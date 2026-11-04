// Vercel Serverless Function handler for /api/enquiry
import type { Request, Response } from 'express';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

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
    } = req.body || {};

    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({ success: false, error: 'Full Name is required.' });
    }
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return res.status(400).json({ success: false, error: 'Valid Mobile Number is required.' });
    }
    if (!location || typeof location !== 'string' || !location.trim()) {
      return res.status(400).json({ success: false, error: 'City or Location is required.' });
    }

    const cleanName = fullName.trim().slice(0, 100);
    const cleanMobile = mobile.trim().slice(0, 20);
    const cleanWhatsapp = (whatsapp || mobile).trim().slice(0, 20);
    const cleanService = (serviceName || 'General Puja Inquiry').trim().slice(0, 100);
    const cleanDate = (preferredDate || 'To be decided upon consultation').trim().slice(0, 50);
    const cleanTime = (preferredTime || 'Morning / Flexible').trim().slice(0, 50);
    const cleanAddress = (address || 'Not specified').trim().slice(0, 250);
    const cleanLocation = location.trim().slice(0, 100);
    const cleanMessage = (message || 'No additional note provided.').trim().slice(0, 1000);

    const now = new Date();
    const istTimeStr = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
      hour12: true
    }).format(now);

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

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

    if (botToken && chatId) {
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
      }
    }

    return res.status(200).json({
      success: true,
      deliveredToTelegram: telegramDelivered,
      pendingTelegramConfig: !botToken || !chatId,
      istTimestamp: istTimeStr
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your enquiry.'
    });
  }
}
