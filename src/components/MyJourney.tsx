import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Flame, Code2, TrendingUp, Heart } from 'lucide-react';
import { JOURNEY_CHAPTERS } from '../config/siteData';

const iconMap: Record<string, any> = {
  Flame,
  Code2,
  TrendingUp,
  Heart,
  Compass
};

export const MyJourney: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#190C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-950/70 border border-pink-200 dark:border-pink-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Narrative Arc</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Every Chapter Makes Me Who I Am.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Unfolding in grace, lessons, and relentless belief.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central glowing vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-rose-300 via-pink-400 to-amber-300 dark:from-rose-900 dark:via-pink-800 dark:to-amber-900" />

          <div className="space-y-12">
            {JOURNEY_CHAPTERS.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || Sparkles;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.chapter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } gap-6 sm:gap-12`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#25121E] border-2 border-rose-400 dark:border-rose-600 shadow-md flex items-center justify-center text-rose-600 dark:text-rose-300 z-10">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Spacer for Alternate Desktop Layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="pl-16 sm:pl-0 sm:w-1/2">
                    <div className="rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-lg shadow-rose-950/5 hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif-luxury text-sm uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                          {item.chapter}
                        </span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 font-medium border border-rose-100 dark:border-rose-900/40">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-[#4A2D3A] dark:text-[#D9BED0] font-normal mb-4">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-pink-100 dark:border-pink-900/40 flex items-center gap-2 text-xs font-medium text-rose-600 dark:text-rose-400">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span className="italic">{item.feeling}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
