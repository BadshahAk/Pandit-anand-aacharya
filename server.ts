import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory rate limiting to prevent spam and abuse
const requestTracker = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

const rateLimiter = (req: Request, res: Response, next: () => void) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const clientData = requestTracker.get(clientIp);

  if (!clientData || now - clientData.firstRequest > RATE_LIMIT_WINDOW_MS) {
    requestTracker.set(clientIp, { count: 1, firstRequest: now });
    return next();
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting another inquiry.'
    });
  }

  clientData.count += 1;
  next();
};

// Health and Config Status Check (Never exposes actual secret tokens)
app.get('/api/health', (_req: Request, res: Response) => {
  const hasTelegramToken = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_TOKEN.trim());
  const hasTelegramChatId = Boolean(process.env.TELEGRAM_CHAT_ID && process.env.TELEGRAM_CHAT_ID.trim());

  res.json({
    status: 'ok',
    telegramConfigured: hasTelegramToken && hasTelegramChatId,
    timestamp: new Date().toISOString()
  });
});

// Server-side Enquiry Endpoint for Form Submissions & Telegram Dispatch
app.post('/api/enquiry', rateLimiter, async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      mobile,
      whatsapp,
      serviceName,
      preferredDate,
      preferredTime,
      address,
      location,
      message
    } = req.body;

    // Strict Server-Side Validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({ success: false, error: 'Full Name is required.' });
    }
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return res.status(400).json({ success: false, error: 'Valid Mobile Number is required.' });
    }
    if (!location || typeof location !== 'string' || !location.trim()) {
      return res.status(400).json({ success: false, error: 'City or Location is required.' });
    }

    // Sanitize text inputs
    const cleanName = fullName.trim().slice(0, 100);
    const cleanMobile = mobile.trim().slice(0, 20);
    const cleanWhatsapp = (whatsapp || mobile).trim().slice(0, 20);
    const cleanService = (serviceName || 'General Puja Inquiry').trim().slice(0, 100);
    const cleanDate = (preferredDate || 'To be decided upon consultation').trim().slice(0, 50);
    const cleanTime = (preferredTime || 'Morning / Flexible').trim().slice(0, 50);
    const cleanAddress = (address || 'Not specified').trim().slice(0, 250);
    const cleanLocation = location.trim().slice(0, 100);
    const cleanMessage = (message || 'No additional note provided.').trim().slice(0, 1000);

    // Calculate Indian Standard Time (IST) timestamp
    const now = new Date();
    const istTimeStr = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
      hour12: true
    }).format(now);

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    // Telegram Bot Message Formatting as requested
    const telegramMessage =
      `🔔 *NEW WEBSITE ENQUIRY*\n\n` +
      `👤 *Name:* ${cleanName}\n` +
      `📱 *Mobile:* \`${cleanMobile}\`\n` +
      `💬 *WhatsApp:* \`${cleanWhatsapp}\`\n` +
      `📍 *Location:* ${cleanLocation}\n` +
      `🪔 *Service:* ${cleanService}\n` +
      `📅 *Preferred Date:* ${cleanDate}\n` +
      `⏰ *Preferred Time:* ${cleanTime}\n` +
      `🏠 *Address:* ${cleanAddress}\n` +
      `💬 *Message:* ${cleanMessage}\n\n` +
      `⏰ *Submitted:* ${istTimeStr} IST\n` +
      `🌐 *Source:* Pandit Anand Acharya Website`;

    let telegramDelivered = false;
    let telegramError = '';

    if (botToken && chatId) {
      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'Markdown'
          })
        });

        const tgData = await tgRes.json();
        if (tgRes.ok && tgData.ok) {
          telegramDelivered = true;
        } else {
          telegramError = tgData.description || 'Failed to deliver to Telegram bot.';
          console.warn('[Telegram Dispatch Warning]:', telegramError);
        }
      } catch (err: any) {
        telegramError = err?.message || 'Network error reaching Telegram API.';
        console.warn('[Telegram API Error]:', telegramError);
      }
    } else {
      console.log('[Notice]: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in .env yet.');
    }

    return res.status(200).json({
      success: true,
      deliveredToTelegram: telegramDelivered,
      pendingTelegramConfig: !botToken || !chatId,
      istTimestamp: istTimeStr,
      details: {
        name: cleanName,
        service: cleanService,
        date: cleanDate
      }
    });
  } catch (error: any) {
    console.error('Server error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your enquiry.'
    });
  }
});

// Development vs Production Setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`✨ Pandit Anand Acharya Server running on port ${PORT}`);
  });
}

startServer();
