import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PERSONALITY_CARDS } from '../config/siteData';
import { PersonalityTrait } from '../types';

export const PersonalityCards: React.FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<PersonalityTrait | null>(null);

  return (
    <section
      id="personality"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#190C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-950/80 border border-pink-200 dark:border-pink-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Four Dimensions of Anand</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            A Soul in Four Harmonies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Tradition, code, markets & heartfelt dreams in one heart.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PERSONALITY_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedTrait(card)}
              className="group relative cursor-pointer rounded-3xl p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-xl shadow-rose-950/5 hover:shadow-2xl hover:shadow-rose-500/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient color glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: card.accentColor }}
              />

              <div>
                {/* Large Emoji & Role */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl select-none group-hover:scale-110 transition-transform duration-300">
                    {card.emoji}
                  </span>
                  <span
                    className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold border"
                    style={{ borderColor: `${card.accentColor}60`, color: card.accentColor }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] tracking-wide mb-1">
                  {card.role}
                </h3>

                <p className="text-xs uppercase tracking-widest text-[#7C495E] dark:text-[#C79EB1] font-medium mb-3">
                  {card.subtitle}
                </p>

                {/* Exact Required Short Description */}
                <p className="text-sm leading-relaxed text-[#4A2D3A] dark:text-[#E2CAD4] font-normal">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Click prompt */}
              <div className="pt-6 mt-6 border-t border-pink-100 dark:border-pink-900/40 flex items-center justify-between text-xs font-medium text-rose-600 dark:text-rose-400">
                <span>Discover Anand’s thoughts</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Deep Dive Details */}
        <AnimatePresence>
          {selectedTrait && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrait(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full rounded-3xl p-8 bg-white dark:bg-[#25121E] border border-pink-200 dark:border-pink-800 shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTrait(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-pink-50 dark:bg-pink-950 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{selectedTrait.emoji}</span>
                  <div>
                    <h3 className="font-serif-luxury text-3xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
                      {selectedTrait.role}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-rose-600 dark:text-rose-300 font-semibold">
                      {selectedTrait.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium text-stone-700 dark:text-stone-200 mb-6 bg-pink-50/60 dark:bg-pink-950/40 p-4 rounded-2xl border border-pink-100 dark:border-pink-900/60">
                  {selectedTrait.description}
                </p>

                <h4 className="text-xs uppercase tracking-widest text-[#7C495E] dark:text-[#C79EB1] font-semibold mb-3">
                  How This Shapes Anand:
                </h4>

                <div className="space-y-3 mb-6">
                  {selectedTrait.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#4A2D3A] dark:text-[#E2CAD4]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedTrait(null)}
                  className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 transition-all cursor-pointer"
                >
                  Close & Explore More ✨
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
