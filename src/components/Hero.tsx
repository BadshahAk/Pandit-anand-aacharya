import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Compass, User, ArrowDown, ExternalLink } from 'lucide-react';
import { SITE_BRAND } from '../config/siteData';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#180C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      {/* Dreamy Ambient Glows */}
      <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-rose-200/40 dark:bg-pink-900/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full bg-amber-200/35 dark:bg-amber-800/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-pink-100/30 dark:bg-pink-950/20 blur-3xl pointer-events-none" />

      {/* Floating Micro Hearts & Stars */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="absolute top-36 left-[8%] hidden lg:block text-2xl select-none"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[12%] hidden lg:block text-2xl select-none"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-44 right-[10%] hidden lg:block text-2xl select-none"
      >
        💖
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Romantic Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-rose-200 dark:border-rose-900/60 shadow-sm"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
              <span className="font-serif-luxury text-xs sm:text-sm tracking-widest uppercase text-rose-800 dark:text-rose-200 font-semibold">
                Anand’s Personal Digital Universe
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </motion.div>

            {/* Main Greeting Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif-luxury text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#2B1720] dark:text-[#FFF0F4] leading-[1.12]"
            >
              Hey, I'm Anand! <span className="inline-block hover:scale-125 transition-transform duration-300">❤️</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-script text-2xl sm:text-4xl text-rose-600 dark:text-rose-300/90 leading-tight font-normal"
            >
              A Simple Soul, A Beautiful Story.
            </motion.h2>

            {/* Exact Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base sm:text-lg text-[#5E3B4B] dark:text-[#E2CAD4] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              <span className="font-medium text-[#2B1720] dark:text-[#FFF0F4]">
                "A simple soul with a heart full of dreams."
              </span>{' '}
              Walking the rare path where ancient Vedic values meet modern code, market strategy, and a deeply emotional, poetic heart.
            </motion.p>

            {/* Interactive Personality Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2"
            >
              {[
                { emoji: '🕉️', name: 'Pandit', color: 'border-amber-300 bg-amber-50/70 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200' },
                { emoji: '💻', name: 'Developer', color: 'border-blue-300 bg-blue-50/70 text-blue-900 dark:bg-blue-950/40 dark:text-blue-200' },
                { emoji: '📈', name: 'Trader', color: 'border-emerald-300 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200' },
                { emoji: '✨', name: 'Dreamer', color: 'border-rose-300 bg-rose-50/70 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200' }
              ].map((badge) => (
                <span
                  key={badge.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-xs ${badge.color}`}
                >
                  <span>{badge.emoji}</span>
                  <span>{badge.name}</span>
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-white text-sm tracking-wide bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 cursor-pointer"
              >
                <span>Explore My World</span>
                <Compass className="w-4 h-4" />
              </a>

              <a
                href="#feelings"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-[#4A2D39] dark:text-[#FFF0F4] bg-white/80 dark:bg-white/5 hover:bg-rose-50 dark:hover:bg-white/10 border border-pink-200 dark:border-pink-900/60 transition-all cursor-pointer shadow-xs"
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>My Heart & Feelings</span>
              </a>

              <a
                href="#games"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 border border-rose-300 dark:border-rose-800 transition-all cursor-pointer"
              >
                <span>🎮 Love Lounge & Games</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Asset */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 sm:w-88 md:w-96 max-w-full"
            >
              {/* Outer Decorative Floating Ring */}
              <div className="absolute -inset-3.5 rounded-[2.5rem] bg-gradient-to-tr from-rose-400/40 via-amber-300/30 to-pink-500/40 blur-xl animate-pulse" />
              
              {/* Ornate Gold & Rose Border Frame */}
              <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-[#F9E5C0] via-[#F48FB1]/40 to-[#E85D75]/40 shadow-2xl shadow-rose-900/15">
                <div className="relative rounded-[2.2rem] overflow-hidden bg-[#FFF5F7] dark:bg-[#25121E] aspect-[3/4] flex items-center justify-center">
                  
                  {!imageError ? (
                    <img
                      src={SITE_BRAND.portraitAsset}
                      alt="Anand - A simple soul with a heart full of dreams"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                  ) : (
                    /* Elegant Fallback Placeholder with Initials as requested */
                    <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 dark:from-pink-950/80 dark:via-purple-950/40 dark:to-stone-900 w-full h-full">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow-xl mb-4">
                        <span className="font-serif-luxury text-3xl font-bold tracking-widest">
                          {SITE_BRAND.fallbackInitials.slice(0, 2)}
                        </span>
                      </div>
                      <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
                        {SITE_BRAND.name}
                      </h3>
                      <p className="font-script text-lg text-rose-600 dark:text-rose-300 mt-1">
                        A Little World of Dreams
                      </p>
                      <span className="mt-4 px-3 py-1 rounded-full text-xs font-mono bg-white/70 dark:bg-white/10 text-stone-600 dark:text-stone-300">
                        {SITE_BRAND.portraitAsset}
                      </span>
                    </div>
                  )}

                  {/* Glassmorphic Caption Card */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-white/80 dark:bg-[#1D0E17]/85 backdrop-blur-md border border-white/60 dark:border-pink-900/40 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-rose-600 dark:text-rose-400">
                        Anand ❤️
                      </p>
                      <p className="text-[11px] text-[#5C3847] dark:text-[#E2CAD4]">
                        Simple Soul • Big Dreams
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                      <span>✨</span>
                      <span>Pure Vibe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cute badge attached to portrait */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#25121E] border border-pink-200 dark:border-pink-800 shadow-md text-xs font-medium text-rose-600 dark:text-rose-300 flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Real & Genuine</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-rose-800/60 dark:text-pink-300/60 hover:text-rose-600 dark:hover:text-rose-300 transition-colors"
          >
            <span>Scroll to Enter</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <ArrowDown className="w-4 h-4 text-rose-500" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
