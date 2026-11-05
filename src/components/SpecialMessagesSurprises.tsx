import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Mail, X, Gift, Smile, Key, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HIDDEN_LETTER_CONTENT, SWEET_RANDOM_QUOTES } from '../config/siteData';

export const SpecialMessagesSurprises: React.FC = () => {
  // A. Letter Modal
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  // B. Teddy Bear
  const [teddyHugs, setTeddyHugs] = useState(0);
  const [teddyMessage, setTeddyMessage] = useState('Give me a warm hug! Click me 🧸');

  // C. Random Happiness
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // D. Secret Corner
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  const handleOpenLetter = () => {
    setIsLetterOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E85D75', '#F48FB1', '#D4AF37']
    });
  };

  const handleTeddyClick = () => {
    const newCount = teddyHugs + 1;
    setTeddyHugs(newCount);

    const messages = [
      'Sending you a big warm teddy hug! 🥰',
      'You are special and appreciated! 💖',
      'May all your worries melt away today! 🌸',
      'Sending positive energy your way! ✨',
      'Anand says: Keep smiling, it suits you! 🥺❤️'
    ];
    setTeddyMessage(messages[newCount % messages.length]);

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.7 },
      colors: ['#FF69B4', '#FFB6C1', '#FFD700']
    });
  };

  const handleRandomQuote = () => {
    let nextIdx = Math.floor(Math.random() * SWEET_RANDOM_QUOTES.length);
    if (nextIdx === currentQuoteIdx) {
      nextIdx = (nextIdx + 1) % SWEET_RANDOM_QUOTES.length;
    }
    setCurrentQuoteIdx(nextIdx);
    setCopiedQuote(false);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(SWEET_RANDOM_QUOTES[currentQuoteIdx]);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleUnlockSecret = () => {
    setSecretUnlocked(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF1493', '#FF69B4', '#FFD700', '#FFFFFF']
    });
  };

  return (
    <section
      id="surprises"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF9F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1D0F18] dark:to-[#190C14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Gift className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
            <span>Treasures For Your Heart</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Special Messages & Hidden Surprises ✨
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Delightful interactive corners crafted to brighten your day.
          </motion.p>
        </div>

        {/* 4 Interactive Corners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* A. Open My Letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900 flex items-center justify-center text-rose-500 mb-5">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                Open My Letter 💌
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-6">
                An intimate handwritten note sealed with wax, penned for anyone who believes in warmth and kindness.
              </p>
            </div>

            <button
              onClick={handleOpenLetter}
              className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md shadow-rose-500/20 transition-all cursor-pointer"
            >
              Unseal Letter 💌
            </button>
          </motion.div>

          {/* B. A Little Surprise (Teddy Bear) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 flex flex-col justify-between text-center"
          >
            <div>
              {/* Animated Teddy Button */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleTeddyClick}
                className="w-20 h-20 mx-auto rounded-3xl bg-pink-100/70 dark:bg-pink-950/50 flex items-center justify-center text-5xl cursor-pointer shadow-sm mb-4 select-none"
              >
                🧸
              </motion.button>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-1">
                A Little Surprise 🧸
              </h3>
              <p className="font-script text-base text-rose-600 dark:text-rose-300 min-h-[48px] flex items-center justify-center">
                "{teddyMessage}"
              </p>
            </div>

            <div className="pt-4 border-t border-pink-100 dark:border-pink-900/30 flex items-center justify-between text-xs text-rose-500">
              <span>Hugs Given: {teddyHugs}</span>
              <span>Tap teddy 💗</span>
            </div>
          </motion.div>

          {/* C. Random Happiness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">✨</span>
                <button
                  onClick={handleCopyQuote}
                  title="Copy quote"
                  className="p-1.5 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/40 text-stone-500 dark:text-stone-300 transition-colors"
                >
                  {copiedQuote ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="font-serif-luxury text-xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                Random Happiness ✨
              </h3>

              <div className="p-4 rounded-2xl bg-pink-50/70 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/40 mb-4 min-h-[100px] flex items-center">
                <p className="font-serif-luxury text-sm italic text-[#4A2D3A] dark:text-[#E2CAD4]">
                  “{SWEET_RANDOM_QUOTES[currentQuoteIdx]}”
                </p>
              </div>
            </div>

            <button
              onClick={handleRandomQuote}
              className="w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 border border-rose-200 dark:border-rose-800 transition-all cursor-pointer"
            >
              Another Sweet Thought 🌸
            </button>
          </motion.div>

          {/* D. Secret Corner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 flex items-center justify-center text-amber-500 mb-5">
                <Key className="w-7 h-7" />
              </div>

              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                Secret Corner ❤️
              </h3>

              <p className="text-xs sm:text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-4">
                {secretUnlocked
                  ? 'You unlocked Anand’s innermost wish!'
                  : 'A quiet interactive secret hidden within this world. Click below to reveal.'}
              </p>
            </div>

            {!secretUnlocked ? (
              <button
                onClick={handleUnlockSecret}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Click Little Heart</span>
                <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
              </button>
            ) : (
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-center animate-fade-in">
                <p className="font-script text-lg text-rose-600 dark:text-rose-300">
                  "You found the secret key! May your life be as radiant as your curiosity! ✨🫶🏻"
                </p>
              </div>
            )}
          </motion.div>

        </div>

        {/* Modal: Open My Letter */}
        <AnimatePresence>
          {isLetterOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLetterOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-xl w-full rounded-3xl p-8 sm:p-12 bg-[#FFFDF8] dark:bg-[#25121E] border-2 border-[#D4AF37]/50 shadow-2xl romantic-frame max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setIsLetterOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-pink-100/60 dark:bg-pink-950 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Wax Seal Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-rose-700 text-amber-200 border-2 border-amber-300 flex items-center justify-center text-xs font-serif-luxury font-bold tracking-widest shadow-lg shadow-rose-900/30 mb-3">
                    SEALED
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
                    {HIDDEN_LETTER_CONTENT.to}
                  </h3>
                  <p className="font-script text-lg text-rose-600 dark:text-rose-300">
                    {HIDDEN_LETTER_CONTENT.greeting}
                  </p>
                </div>

                {/* Letter Body in Handwritten Font */}
                <div className="font-serif-luxury text-base sm:text-lg leading-relaxed text-[#3D222E] dark:text-[#F3DFE7] space-y-4 whitespace-pre-line border-y border-pink-200/50 dark:border-pink-900/40 py-6">
                  {HIDDEN_LETTER_CONTENT.body}
                </div>

                {/* Sign-off */}
                <div className="mt-6 flex flex-col items-end">
                  <span className="text-xs uppercase tracking-widest text-[#7C495E] dark:text-[#C79EB1]">
                    {HIDDEN_LETTER_CONTENT.closing}
                  </span>
                  <span className="font-script text-3xl text-rose-600 dark:text-rose-300 mt-1">
                    {HIDDEN_LETTER_CONTENT.signature}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
