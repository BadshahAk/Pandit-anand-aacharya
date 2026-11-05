import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { DREAMS_SUMMARY, DREAMS_LIST } from '../config/siteData';

export const MyDreams: React.FC = () => {
  return (
    <section
      id="dreams"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF8F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1B0E16] dark:to-[#190C14]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-rose-200/30 dark:bg-pink-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-100/40 dark:bg-amber-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Guiding Stars of My Life</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Dreams That Keep Me Going 💫
          </motion.h2>

          {/* Exact Required Summary Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif-luxury text-lg sm:text-xl text-[#4A2D3A] dark:text-[#E2CAD4] font-medium mt-4 max-w-2xl mx-auto italic"
          >
            “{DREAMS_SUMMARY}”
          </motion.p>
        </div>

        {/* 5 Dream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DREAMS_LIST.map((dream, idx) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-7 sm:p-8 bg-white/80 dark:bg-[#23111C]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/50 shadow-lg shadow-rose-950/5 hover:shadow-xl hover:shadow-rose-500/15 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl p-3 rounded-2xl bg-pink-50 dark:bg-pink-950/50 border border-pink-100 dark:border-pink-900/40 select-none">
                    {dream.emoji}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-rose-500 font-semibold uppercase">
                    Dream 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-3">
                  {dream.title}
                </h3>

                <p className="text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-5">
                  {dream.description}
                </p>

                {/* Poetic Quote */}
                <div className="p-3.5 rounded-xl bg-pink-50/60 dark:bg-pink-950/30 border-l-2 border-rose-400 mb-5">
                  <p className="font-script text-base text-rose-700 dark:text-rose-300 italic">
                    {dream.quote}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-pink-100 dark:border-pink-900/40">
                {dream.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-white dark:bg-white/5 border border-pink-200/60 dark:border-pink-900/40 text-stone-600 dark:text-stone-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
