import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FAVOURITE_THINGS } from '../config/siteData';

export const FavouriteThings: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="faves"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FFF0F4] dark:from-[#180C14] dark:via-[#1D0F18] dark:to-[#170B12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-950/70 border border-pink-200 dark:border-pink-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Things That Make My Heart Sing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            My Favourite Things
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            The little pleasures and passions that bring Anand pure happiness.
          </motion.p>
        </div>

        {/* 8 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FAVOURITE_THINGS.map((item, idx) => {
            const isHovered = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="relative p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/60 dark:border-pink-900/40 shadow-md shadow-rose-950/5 hover:shadow-xl hover:shadow-rose-500/15 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl p-2.5 rounded-2xl bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/40 group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </span>
                    <Heart className={`w-4 h-4 transition-colors ${isHovered ? 'text-rose-500 fill-rose-500' : 'text-stone-300 dark:text-stone-700'}`} />
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Quote on Hover */}
                <div className="pt-3 border-t border-pink-100 dark:border-pink-900/30">
                  <p className="font-script text-sm text-rose-600 dark:text-rose-300 italic line-clamp-2">
                    "{item.quote}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
