import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Compass } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';

interface Props {
  onEnter: () => void;
  isOpen: boolean;
}

export const OpeningExperience: React.FC<Props> = ({ onEnter, isOpen }) => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Generate randomized rose petals for welcome screen
    const items = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      delay: Math.random() * 5,
      duration: 7 + Math.random() * 6,
      size: 14 + Math.random() * 18
    }));
    setPetals(items);
  }, []);

  const handleEnterWorld = () => {
    // Start ambient background melody on user interaction
    romanticAudio.play();
    onEnter();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFBF9] to-[#FCEEF2] dark:from-[#180C14] dark:via-[#21111B] dark:to-[#160B12] text-[#2D1B22] dark:text-[#FBEBF0]"
        >
          {/* Animated Falling Rose Petals & Golden Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {petals.map((p) => (
              <motion.div
                key={p.id}
                initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
                animate={{
                  y: '105vh',
                  x: [0, 25, -20, 30],
                  opacity: [0, 0.75, 0.85, 0],
                  rotate: 360
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  left: `${p.left}%`,
                  fontSize: `${p.size}px`
                }}
                className="absolute select-none drop-shadow-sm"
              >
                {p.id % 3 === 0 ? '🌸' : p.id % 3 === 1 ? '🌹' : '✨'}
              </motion.div>
            ))}

            {/* Glowing Golden Ambient Orbs */}
            <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-pink-200/40 dark:bg-pink-900/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-100/50 dark:bg-amber-900/15 blur-3xl" />
          </div>

          {/* Central Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-xl mx-4 sm:mx-6 px-8 py-12 text-center rounded-3xl bg-white/70 dark:bg-[#25121E]/80 backdrop-blur-xl border border-pink-200/60 dark:border-pink-800/40 shadow-2xl shadow-pink-900/10"
          >
            {/* Soft decorative badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-xs tracking-widest text-[#C2185B] dark:text-pink-300 font-medium uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
              A Little World of Dreams
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-serif-luxury text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1720] dark:text-[#FFF0F4] mb-4"
            >
              Welcome to My Little World
            </motion.h1>

            {/* Poetic Quote */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300/90 mb-6 italic"
            >
              “Some hearts are made of dreams, kindness and a little bit of madness...”
            </motion.p>

            {/* Anand Monogram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
              <span className="font-serif-luxury tracking-[0.3em] text-sm uppercase text-amber-700 dark:text-amber-300 font-semibold">
                ANAND
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            </motion.div>

            {/* CTA Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(232, 93, 117, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEnterWorld}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-base tracking-wide bg-gradient-to-r from-[#E85D75] via-[#E11D48] to-[#D4AF37] shadow-lg shadow-rose-500/25 transition-all duration-300 cursor-pointer"
            >
              <span>Enter My World 💗</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Compass className="w-5 h-5 text-amber-100" />
              </motion.span>
            </motion.button>

            <p className="mt-4 text-xs text-rose-900/60 dark:text-pink-300/60">
              Music will softly begin • You can pause or adjust anytime
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
