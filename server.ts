import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Increase limit to 10MB for payment screenshot uploads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// In-memory rate limiting to prevent spam and abuse
const requestTracker = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 15;

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

// In-memory Room State for Multiplayer Love & Friendship Games
interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  lastActive: number;
  currentAnswer?: string | null;
  ready: boolean;
}

interface RoomMessage {
  id: string;
  sender: string;
  text: string;
  type: 'chat' | 'system' | 'reaction' | 'confession';
  timestamp: string;
}

interface GameRoom {
  code: string;
  title: string;
  hostId: string;
  gameType: 'would-you-rather' | 'truth-dare' | 'anand-quiz' | 'whisper-lounge';
  createdAt: number;
  currentQuestionIndex: number;
  players: Record<string, Player>;
  messages: RoomMessage[];
}

const activeRooms = new Map<string, GameRoom>();

// Clean up stale rooms older than 6 hours
setInterval(() => {
  const now = Date.now();
  for (const [code, room] of activeRooms.entries()) {
    if (now - room.createdAt > 6 * 60 * 60 * 1000) {
      activeRooms.delete(code);
    }
  }
}, 15 * 60 * 1000);

// Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  const hasTelegramToken = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_TOKEN.trim());
  const hasTelegramChatId = Boolean(process.env.TELEGRAM_CHAT_ID && process.env.TELEGRAM_CHAT_ID.trim());

  res.json({
    status: 'ok',
    telegramConfigured: hasTelegramToken && hasTelegramChatId,
    activeRooms: activeRooms.size,
    timestamp: new Date().toISOString()
  });
});

// Secure Server-side Contact Form Endpoint
app.post('/api/contact', rateLimiter, async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Strict Server-Side Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Your name is required.' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Please include a message.' });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 120);
    const cleanSubject = (subject || 'A Sweet Note from Portfolio').trim().slice(0, 150);
    const cleanMessage = message.trim().slice(0, 2000);

    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
      hour12: true
    }).format(now);

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    let telegramDelivered = false;

    if (botToken && chatId) {
      const telegramText =
        `💌 *NEW MESSAGE FROM ANAND'S WORLD* 🌸\n\n` +
        `👤 *From:* ${cleanName}\n` +
        `📧 *Email:* \`${cleanEmail}\`\n` +
        `🏷️ *Subject:* ${cleanSubject}\n` +
        `💬 *Message:*\n"${cleanMessage}"\n\n` +
        `⏰ *Time:* ${formattedDate} IST\n` +
        `🌐 *Source:* Anand's World Portfolio`;

      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: 'Markdown'
          })
        });

        const tgData = await tgRes.json();
        if (tgRes.ok && tgData.ok) {
          telegramDelivered = true;
        } else {
          console.warn('[Telegram Dispatch Notice]:', tgData.description);
        }
      } catch (err: any) {
        console.warn('[Telegram Network Error]:', err?.message);
      }
    }

    return res.status(200).json({
      success: true,
      delivered: telegramDelivered,
      timestamp: formattedDate,
      telegramConfigured: Boolean(botToken && chatId),
      message: telegramDelivered
        ? "Your heartfelt message reached Anand's Telegram instantly! ❤️"
        : "Message received! If urgent, feel free to drop a direct hello on Telegram @KINGxANAND."
    });
  } catch (error: any) {
    console.error('Server error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your message.'
    });
  }
});

// Multiplayer Love Game Room Endpoints
app.post('/api/rooms/create', (req: Request, res: Response) => {
  const { hostName, title, gameType } = req.body;
  if (!hostName || !hostName.trim()) {
    return res.status(400).json({ success: false, error: 'Host name is required.' });
  }

  // Generate 4-digit readable code e.g. ANAND-8492
  const randNum = Math.floor(1000 + Math.random() * 9000);
  const code = `ANAND-${randNum}`;
  const hostId = `player-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;

  const newRoom: GameRoom = {
    code,
    title: (title || `${hostName}'s Love Lounge`).slice(0, 50),
    hostId,
    gameType: gameType || 'would-you-rather',
    createdAt: Date.now(),
    currentQuestionIndex: 0,
    players: {
      [hostId]: {
        id: hostId,
        name: hostName.trim().slice(0, 30),
        avatar: '👑',
        score: 0,
        lastActive: Date.now(),
        ready: true
      }
    },
    messages: [
      {
        id: `msg-${Date.now()}`,
        sender: 'System',
        text: `🌸 Room created! Share code "${code}" with friends or your crush to play together!`,
        type: 'system',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]
  };

  activeRooms.set(code, newRoom);
  return res.json({ success: true, room: newRoom, playerId: hostId });
});

app.post('/api/rooms/join', (req: Request, res: Response) => {
  const { code, playerName, avatar } = req.body;
  if (!code || !playerName || !playerName.trim()) {
    return res.status(400).json({ success: false, error: 'Room code and player name are required.' });
  }

  const roomCode = code.toUpperCase().trim();
  const room = activeRooms.get(roomCode);

  if (!room) {
    return res.status(404).json({ success: false, error: 'Room not found. Check the code or create a new room!' });
  }

  const playerId = `player-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  room.players[playerId] = {
    id: playerId,
    name: playerName.trim().slice(0, 30),
    avatar: avatar || '💖',
    score: 0,
    lastActive: Date.now(),
    ready: true
  };

  room.messages.push({
    id: `msg-${Date.now()}`,
    sender: 'System',
    text: `✨ ${playerName} joined the room! Let the fun begin!`,
    type: 'system',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  return res.json({ success: true, room, playerId });
});

app.get('/api/rooms/:code', (req: Request, res: Response) => {
  const roomCode = req.params.code.toUpperCase().trim();
  const room = activeRooms.get(roomCode);
  if (!room) {
    return res.status(404).json({ success: false, error: 'Room not found.' });
  }
  return res.json({ success: true, room });
});

app.post('/api/rooms/:code/action', (req: Request, res: Response) => {
  const roomCode = req.params.code.toUpperCase().trim();
  const room = activeRooms.get(roomCode);
  if (!room) {
    return res.status(404).json({ success: false, error: 'Room not found.' });
  }

  const { playerId, actionType, payload } = req.body;
  const player = room.players[playerId];

  if (!player && actionType !== 'leave') {
    return res.status(403).json({ success: false, error: 'Player not recognized in this room.' });
  }

  if (player) {
    player.lastActive = Date.now();
  }

  if (actionType === 'submit-answer') {
    player.currentAnswer = payload.answer;
    player.score += payload.points || 10;
    
    // Check if all players answered to show match
    const playersList = Object.values(room.players);
    const allAnswered = playersList.length > 1 && playersList.every(p => p.currentAnswer !== undefined && p.currentAnswer !== null);
    
    if (allAnswered) {
      const answers = playersList.map(p => p.currentAnswer);
      const isMatch = answers.every(a => a === answers[0]);
      room.messages.push({
        id: `msg-${Date.now()}`,
        sender: 'Game Master',
        text: isMatch ? `🔥 MATCH! Everyone picked "${answers[0]}"! Soul synergy 100%! 💕` : `⚡ Opposites attract! Unique perspectives revealed!`,
        type: 'system',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }
  } else if (actionType === 'next-question') {
    room.currentQuestionIndex = (room.currentQuestionIndex + 1) % 15;
    // reset current answers
    Object.values(room.players).forEach(p => { p.currentAnswer = null; });
  } else if (actionType === 'send-message') {
    if (payload.text && payload.text.trim()) {
      room.messages.push({
        id: `msg-${Date.now()}`,
        sender: player.name,
        text: payload.text.trim().slice(0, 300),
        type: payload.type || 'chat',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      // Keep last 40 messages
      if (room.messages.length > 40) {
        room.messages.shift();
      }
    }
  } else if (actionType === 'send-reaction') {
    room.messages.push({
      id: `msg-${Date.now()}`,
      sender: player.name,
      text: `${player.name} sent ${payload.emoji || '💖'}`,
      type: 'reaction',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  }

  return res.json({ success: true, room });
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
