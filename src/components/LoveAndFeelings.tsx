import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Feather, Coffee, Smile, MessageCircle } from 'lucide-react';
import { LOVE_FEELINGS_CONTENT } from '../config/siteData';

export const LoveAndFeelings: React.FC = () => {
  return (
    <section
      id="feelings"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF9F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1E0F19] dark:to-[#180C14]"
    >
      {/* Soft warm light overlays */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-200/35 dark:bg-pink-900/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-100/50 dark:bg-amber-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>Emotional Sanctuary</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            {LOVE_FEELINGS_CONTENT.heading}
          </motion.h2>

          {/* Exact Required Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#25121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl shadow-rose-950/5 romantic-frame text-left"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl sm:text-4xl select-none">💌</span>
              <p className="font-serif-luxury text-xl sm:text-2xl sm:leading-relaxed text-[#361E29] dark:text-[#FBEBF1] font-medium">
                “{LOVE_FEELINGS_CONTENT.mainStatement}”
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <span className="font-script text-2xl text-rose-600 dark:text-rose-300">
                — Anand
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 Interactive Handwritten-Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {LOVE_FEELINGS_CONTENT.quotes.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? 0.8 : -0.8 }}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#FFFDFB] dark:bg-[#22111D] border border-pink-200/60 dark:border-pink-900/40 shadow-md shadow-rose-950/5 flex flex-col justify-between"
            >
              <div>
                {/* Paper Tape Accent */}
                <div className="w-16 h-4 mx-auto -mt-10 mb-4 bg-amber-100/90 dark:bg-amber-900/40 border border-amber-300/60 rotate-2 rounded-xs shadow-xs" />

                <div className="flex items-center gap-2 mb-4 text-rose-500">
                  <Feather className="w-4 h-4" />
                  <h3 className="font-serif-luxury text-xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
                    {card.title}
                  </h3>
                </div>

                <p className="font-script text-xl sm:text-2xl text-[#4A2D3A] dark:text-[#E2CAD4] leading-relaxed mb-6 font-normal">
                  "{card.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-pink-100 dark:border-pink-900/30 flex items-center justify-between text-xs text-rose-600/80 dark:text-rose-400">
                <span className="font-serif-luxury tracking-widest uppercase">Deep Resonance</span>
                <Heart className="w-3.5 h-3.5 fill-rose-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exact Special Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-pink-500/10 via-rose-500/15 to-amber-500/10 dark:from-pink-950/40 dark:via-rose-950/50 dark:to-amber-950/30 border border-rose-300/50 dark:border-rose-800/40 backdrop-blur-md shadow-lg"
        >
          <p className="text-xs uppercase tracking-widest text-rose-600 dark:text-rose-300 font-semibold mb-3">
            Anand's Simple Truth
          </p>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4] leading-snug">
            "{LOVE_FEELINGS_CONTENT.specialHighlight}"
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-4 max-w-lg mx-auto">
            Real emotions over manufactured perfection. Honesty over games. Someone who makes the chaotic world feel calm.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
