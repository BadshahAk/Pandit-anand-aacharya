import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Gamepad2,
  Sparkles,
  Users,
  Send,
  RotateCw,
  Trophy,
  CheckCircle2,
  HelpCircle,
  Copy,
  Check,
  Flame,
  MessageCircle,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS, WOULD_YOU_RATHER_CARDS, TRUTH_OR_DARE_DECK } from '../config/siteData';
import { GameRoom } from '../types';

export const LoveGamesLounge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'quiz' | 'truth-dare' | 'multiplayer-room'>('calculator');

  // GAME 1: Soul Resonance Calculator State
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [vibeChoice, setVibeChoice] = useState('Chai & Rooftop');
  const [calcResult, setCalcResult] = useState<{ score: number; verdict: string; title: string } | null>(null);

  // GAME 2: Who Knows Anand Best Quiz State
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // GAME 3: Truth or Dare State
  const [tdFilter, setTdFilter] = useState<'all' | 'truth' | 'dare'>('all');
  const [currentCard, setCurrentCard] = useState(TRUTH_OR_DARE_DECK[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  // GAME 4: Multiplayer Room State
  const [room, setRoom] = useState<GameRoom | null>(null);
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [playerNameInput, setPlayerNameInput] = useState('');
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [roomError, setRoomError] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  // Poll room updates if in room
  useEffect(() => {
    if (!room) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/rooms/${room.code}`);
        const data = await res.json();
        if (data.success && data.room) {
          setRoom(data.room);
        }
      } catch (err) {
        // silent fail
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [room?.code]);

  // Handle Calculator
  const handleCalculateSynergy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) return;

    // Deterministic pseudo-algorithm with high romantic flavor
    const combined = (name1.trim() + name2.trim() + vibeChoice).toLowerCase();
    let sum = 0;
    for (let i = 0; i < combined.length; i++) {
      sum += combined.charCodeAt(i);
    }
    const scoreVal = 82 + (sum % 18); // 82% to 99%
    let verdict = 'You two share an electric, unspoken comfort that feels like warm tea on a rainy afternoon.';
    let title = 'Soulmate Constellation ✨';

    if (scoreVal >= 95) {
      title = 'Celestial Twin Flames 🔥❤️';
      verdict = 'Rare, profound connection. Late-night conversations will fly by in minutes. Keep this bond protected!';
    } else if (scoreVal >= 90) {
      title = 'Harmonious Melodies 🌸';
      verdict = 'Deep mutual understanding, playful banter, and unconditional loyalty form the backbone of this connection.';
    }

    setCalcResult({ score: scoreVal, verdict, title });

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FF1493', '#FFD700']
    });
  };

  // Handle Quiz
  const handleSelectQuizOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === QUIZ_QUESTIONS[quizIdx].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (quizIdx + 1 < QUIZ_QUESTIONS.length) {
      setQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#E85D75', '#D4AF37', '#F48FB1']
      });
    }
  };

  const resetQuiz = () => {
    setQuizIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  // Handle Truth or Dare draw
  const handleDrawCard = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const pool = TRUTH_OR_DARE_DECK.filter((item) => {
        if (tdFilter === 'all') return true;
        return item.type === tdFilter;
      });
      const randomItem = pool[Math.floor(Math.random() * pool.length)];
      setCurrentCard(randomItem);
      setIsSpinning(false);
    }, 400);
  };

  // Handle Multiplayer Room
  const handleCreateRoom = async () => {
    if (!playerNameInput.trim()) {
      setRoomError('Please enter your name first!');
      return;
    }
    setRoomError(null);
    setIsCreatingRoom(true);

    try {
      const res = await fetch('/api/rooms/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hostName: playerNameInput.trim(),
          title: `${playerNameInput.trim()}'s Love Lounge`,
          gameType: 'would-you-rather'
        })
      });
      const data = await res.json();
      if (data.success) {
        setRoom(data.room);
        setPlayerId(data.playerId);
      } else {
        setRoomError(data.error || 'Failed to create room.');
      }
    } catch {
      setRoomError('Unable to connect to game room server.');
    } finally {
      setIsCreatingRoom(false);
    }
  };

  const handleJoinRoom = async () => {
    if (!playerNameInput.trim() || !roomCodeInput.trim()) {
      setRoomError('Please enter both your name and room code!');
      return;
    }
    setRoomError(null);

    try {
      const res = await fetch('/api/rooms/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: roomCodeInput.trim(),
          playerName: playerNameInput.trim()
        })
      });
      const data = await res.json();
      if (data.success) {
        setRoom(data.room);
        setPlayerId(data.playerId);
      } else {
        setRoomError(data.error || 'Room not found.');
      }
    } catch {
      setRoomError('Unable to join game room.');
    }
  };

  const handleRoomAnswer = async (answer: string) => {
    if (!room || !playerId) return;

    try {
      const res = await fetch(`/api/rooms/${room.code}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId,
          actionType: 'submit-answer',
          payload: { answer }
        })
      });
      const data = await res.json();
      if (data.success) {
        setRoom(data.room);
      }
    } catch {
      // silent
    }
  };

  const handleNextRoomQuestion = async () => {
    if (!room || !playerId) return;
    try {
      const res = await fetch(`/api/rooms/${room.code}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId,
          actionType: 'next-question',
          payload: {}
        })
      });
      const data = await res.json();
      if (data.success) {
        setRoom(data.room);
      }
    } catch {
      // silent
    }
  };

  const handleSendRoomChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!room || !playerId || !chatMessage.trim()) return;

    const textToSend = chatMessage;
    setChatMessage('');

    try {
      const res = await fetch(`/api/rooms/${room.code}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId,
          actionType: 'send-message',
          payload: { text: textToSend }
        })
      });
      const data = await res.json();
      if (data.success) {
        setRoom(data.room);
      }
    } catch {
      // silent
    }
  };

  const handleSendReaction = async (emoji: string) => {
    if (!room || !playerId) return;
    try {
      await fetch(`/api/rooms/${room.code}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId,
          actionType: 'send-reaction',
          payload: { emoji }
        })
      });
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { y: 0.8 }
      });
    } catch {
      // silent
    }
  };

  const handleCopyRoomCode = () => {
    if (!room) return;
    navigator.clipboard.writeText(room.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentWyr = WOULD_YOU_RATHER_CARDS[room ? room.currentQuestionIndex % WOULD_YOU_RATHER_CARDS.length : 0];

  return (
    <section
      id="games"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#180C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Gamepad2 className="w-4 h-4 text-rose-500" />
            <span>Interactive Connection Zone</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Love Lounge & Games 🎮💖
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Play solo, calculate your resonance, or create a room to play live with friends!
          </motion.p>

          {/* 4 Navigation Game Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'calculator', label: 'Soul Resonance 💕', icon: Heart },
              { id: 'quiz', label: 'Know Anand Quiz 🏆', icon: Trophy },
              { id: 'truth-dare', label: 'Truth or Dare 🎲', icon: RotateCw },
              { id: 'multiplayer-room', label: 'Room Lounge 👥', icon: Users, highlight: true }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25'
                    : 'bg-white/80 dark:bg-white/5 text-[#5C3847] dark:text-[#E2CAD4] border border-pink-200/60 dark:border-pink-900/40 hover:bg-rose-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* GAME 1: Soul Resonance Calculator */}
        {activeTab === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 bg-white/85 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl romantic-frame"
          >
            <div className="text-center mb-6">
              <span className="text-4xl">🔮</span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mt-2">
                Soul Synergy Calculator
              </h3>
              <p className="text-xs text-[#5C3847] dark:text-[#E2CAD4] mt-1">
                Enter your names & preferred romantic vibe to calculate your cosmic harmony.
              </p>
            </div>

            <form onSubmit={handleCalculateSynergy} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                  Partner / Friend / Crush Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Someone Special"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                  Favorite Date Vibe
                </label>
                <select
                  value={vibeChoice}
                  onChange={(e) => setVibeChoice(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                >
                  <option value="Chai & Rooftop">Late-Night Rooftop Chai ☕</option>
                  <option value="Rainy Walk">Walking Under Rain With One Umbrella ☔</option>
                  <option value="Road Trip">Spontaneous Sunset Drive with Music 🌅</option>
                  <option value="Swiss Snow">Snowy Alps & Warm Cocoa 🏔️</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md shadow-rose-500/25 transition-all cursor-pointer mt-4"
              >
                Calculate Our Synergy ✨
              </button>
            </form>

            {/* Result Box */}
            {calcResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50/40 to-amber-50 dark:from-pink-950/60 dark:via-rose-950/40 dark:to-amber-950/30 border border-rose-300 dark:border-rose-800 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-rose-600 font-bold mb-1">
                  {calcResult.title}
                </p>
                <div className="font-serif-luxury text-5xl font-black text-rose-600 dark:text-rose-400 my-2">
                  {calcResult.score}%
                </div>
                <p className="font-serif-luxury text-sm text-[#4A2D3A] dark:text-[#E2CAD4] leading-relaxed">
                  {calcResult.verdict}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* GAME 2: Who Knows Anand Best Quiz */}
        {activeTab === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-10 bg-white/85 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl romantic-frame"
          >
            {!quizFinished ? (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-rose-600 mb-4">
                  <span>Question {quizIdx + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>Score: {score}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-6">
                  {QUIZ_QUESTIONS[quizIdx].question}
                </h3>

                <div className="space-y-3 mb-6">
                  {QUIZ_QUESTIONS[quizIdx].options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === QUIZ_QUESTIONS[quizIdx].correctIndex;

                    let btnClass = 'border-pink-200 dark:border-pink-900/60 bg-pink-50/40 dark:bg-pink-950/20 text-[#3B222E] dark:text-[#F3DFE7] hover:bg-rose-50';
                    if (selectedOption !== null) {
                      if (isCorrect) {
                        btnClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
                      } else if (isSelected) {
                        btnClass = 'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuizOption(idx)}
                        disabled={selectedOption !== null}
                        className={`w-full text-left p-4 rounded-2xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span>{option}</span>
                        {selectedOption !== null && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedOption !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 mb-6"
                  >
                    <p className="text-xs text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                      <span className="font-semibold text-amber-700 dark:text-amber-300">Anand says:</span>{' '}
                      {QUIZ_QUESTIONS[quizIdx].explanation}
                    </p>
                    <p className="font-script text-base text-rose-600 dark:text-rose-300 italic">
                      {QUIZ_QUESTIONS[quizIdx].anandQuote}
                    </p>
                  </motion.div>
                )}

                {selectedOption !== null && (
                  <button
                    onClick={handleNextQuiz}
                    className="w-full py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md cursor-pointer"
                  >
                    {quizIdx + 1 < QUIZ_QUESTIONS.length ? 'Next Question →' : 'See My Final Result 🏆'}
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-6">
                <span className="text-6xl">🏆</span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mt-3">
                  Quiz Completed!
                </h3>
                <p className="font-serif-luxury text-lg text-rose-600 dark:text-rose-400 font-semibold my-2">
                  You scored {score} out of {QUIZ_QUESTIONS.length}!
                </p>

                <p className="text-sm text-[#4A2D3A] dark:text-[#E2CAD4] max-w-md mx-auto mb-6">
                  {score >= 4
                    ? 'Incredible! You deeply understand Anand’s wavelength, values, and romantic philosophy! ❤️'
                    : 'A sweet attempt! Anand’s world is always open for more conversations and discoveries! ✨'}
                </p>

                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-rose-500 hover:bg-rose-600 cursor-pointer"
                >
                  Play Again 🔄
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* GAME 3: Truth or Dare Deck */}
        {activeTab === 'truth-dare' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 bg-white/85 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl romantic-frame text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              {['all', 'truth', 'dare'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTdFilter(type as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    tdFilter === type
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'bg-pink-50 dark:bg-pink-950/40 text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {type === 'all' ? 'All Cards' : type}
                </button>
              ))}
            </div>

            {/* Prompt Card */}
            <motion.div
              animate={{ rotate: isSpinning ? 360 : 0, scale: isSpinning ? 0.9 : 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF8] via-[#FFF5F7] to-[#FFF0F4] dark:from-[#25121E] dark:via-[#291421] dark:to-[#1E0E18] border-2 border-rose-300 dark:border-rose-800 shadow-lg mb-6 min-h-[220px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-rose-500">
                <span>{currentCard.type.toUpperCase()}</span>
                <span>{currentCard.category}</span>
              </div>

              <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] my-4 leading-relaxed">
                "{currentCard.text}"
              </p>

              <span className="text-[11px] text-stone-500 dark:text-stone-400">
                Intensity: {currentCard.intensity}
              </span>
            </motion.div>

            <button
              onClick={handleDrawCard}
              disabled={isSpinning}
              className="w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md shadow-rose-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
              <span>Draw Next Card ✨</span>
            </button>
          </motion.div>
        )}

        {/* GAME 4: Multiplayer Love Room (Requested Feature!) */}
        {activeTab === 'multiplayer-room' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-white/90 dark:bg-[#23121E]/90 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl romantic-frame"
          >
            {!room ? (
              /* Create or Join Room Setup */
              <div className="max-w-md mx-auto space-y-6 text-center">
                <div>
                  <span className="text-5xl">🏰</span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mt-2">
                    Create or Join a Private Love Room
                  </h3>
                  <p className="text-xs text-[#5C3847] dark:text-[#E2CAD4] mt-1">
                    Play live "Would You Rather" and whisper messages with friends or someone special in real time!
                  </p>
                </div>

                {roomError && (
                  <div className="p-3 rounded-xl bg-rose-100 text-rose-800 text-xs font-medium">
                    {roomError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] text-left mb-1">
                    Your Nickname
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand or Angel"
                    value={playerNameInput}
                    onChange={(e) => setPlayerNameInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleCreateRoom}
                    disabled={isCreatingRoom}
                    className="py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md cursor-pointer"
                  >
                    {isCreatingRoom ? 'Creating Room...' : 'Create New Room 👑'}
                  </button>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Room Code"
                      value={roomCodeInput}
                      onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 rounded-full bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-xs font-mono uppercase text-center"
                    />
                    <button
                      onClick={handleJoinRoom}
                      className="py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 hover:bg-rose-200 cursor-pointer shrink-0"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Active Multiplayer Room Live View */
              <div className="space-y-6">
                {/* Room Header & Code Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 dark:from-pink-950/50 dark:via-rose-950/40 dark:to-amber-950/30 border border-pink-200 dark:border-pink-800 gap-3">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#5C3847] dark:text-[#E2CAD4]">
                      Players Active: {Object.keys(room.players).length}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-black/40 border border-rose-300 font-mono text-xs font-bold tracking-widest text-rose-600 dark:text-rose-400">
                      CODE: {room.code}
                    </div>
                    <button
                      onClick={handleCopyRoomCode}
                      title="Copy room code"
                      className="p-2 rounded-full bg-white dark:bg-black/40 border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Players Avatars */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">In Room:</span>
                  {Object.values(room.players).map((p) => (
                    <div
                      key={p.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/70 dark:bg-pink-950/60 text-xs font-medium text-[#2B1720] dark:text-[#FFF0F4] border border-pink-200 dark:border-pink-800"
                    >
                      <span>{p.avatar}</span>
                      <span>{p.name}</span>
                      {p.currentAnswer && <span className="text-[10px] text-emerald-600 font-bold">✓ Ready</span>}
                    </div>
                  ))}
                </div>

                {/* Live "Would You Rather" Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-pink-50/60 dark:bg-pink-950/30 border border-pink-200/70 dark:border-pink-900/50">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-rose-600 mb-4">
                    <span>Synchronized Would You Rather</span>
                    <span>Round {(room.currentQuestionIndex % 15) + 1}</span>
                  </div>

                  <p className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2B1720] dark:text-[#FFF0F4] text-center mb-6">
                    Would You Rather...
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <button
                      onClick={() => handleRoomAnswer(currentWyr.optionA)}
                      className={`p-5 rounded-2xl border text-sm font-medium transition-all text-left cursor-pointer ${
                        room.players[playerId || '']?.currentAnswer === currentWyr.optionA
                          ? 'border-rose-500 bg-rose-500 text-white shadow-md'
                          : 'border-pink-200 dark:border-pink-900/60 bg-white dark:bg-[#25121E] hover:border-rose-400'
                      }`}
                    >
                      {currentWyr.optionA}
                    </button>

                    <button
                      onClick={() => handleRoomAnswer(currentWyr.optionB)}
                      className={`p-5 rounded-2xl border text-sm font-medium transition-all text-left cursor-pointer ${
                        room.players[playerId || '']?.currentAnswer === currentWyr.optionB
                          ? 'border-rose-500 bg-rose-500 text-white shadow-md'
                          : 'border-pink-200 dark:border-pink-900/60 bg-white dark:bg-[#25121E] hover:border-rose-400'
                      }`}
                    >
                      {currentWyr.optionB}
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleNextRoomQuestion}
                      className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-600 bg-white dark:bg-white/10 border border-rose-200 hover:bg-rose-50 cursor-pointer"
                    >
                      Next Dilemma →
                    </button>
                  </div>
                </div>

                {/* Live Whisper Chat & Heart Reactions */}
                <div className="space-y-3">
                  <div className="h-44 overflow-y-auto p-4 rounded-2xl bg-white/70 dark:bg-black/30 border border-pink-200/50 dark:border-pink-900/40 space-y-2 text-xs">
                    {room.messages.map((m) => (
                      <div
                        key={m.id}
                        className={`p-2 rounded-xl ${
                          m.type === 'system'
                            ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-center font-medium'
                            : 'bg-pink-50/70 dark:bg-pink-950/40 text-[#3B222E] dark:text-[#F3DFE7]'
                        }`}
                      >
                        {m.type !== 'system' && <span className="font-bold text-rose-600 mr-1.5">{m.sender}:</span>}
                        <span>{m.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Reaction Buttons */}
                  <div className="flex items-center gap-2 justify-center">
                    {['❤️', '🥺', '✨', '🌹', '🥰'].map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleSendReaction(emoji)}
                        className="px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-950 hover:scale-125 transition-transform text-sm cursor-pointer"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendRoomChat} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Send a sweet whisper to the room..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    <button
                      type="submit"
                      className="p-2.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors cursor-pointer shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
};
