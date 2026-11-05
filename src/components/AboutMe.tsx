import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Coffee, Globe, Compass, Stars } from 'lucide-react';
import { ABOUT_TEXT } from '../config/siteData';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF8F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1B0E16] dark:to-[#190C14]"
    >
      {/* Decorative Warm Backlights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-rose-200/25 dark:bg-pink-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-amber-100/40 dark:bg-amber-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100/80 dark:bg-rose-950/70 border border-rose-200/70 dark:border-rose-800/50 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <span>🌷</span>
            <span>{ABOUT_TEXT.title}</span>
            <span>🌷</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            The Soul Behind The Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            {ABOUT_TEXT.subtitle}
          </motion.p>
        </div>

        {/* Editorial Journal Parchment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-white/80 dark:bg-[#23111C]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-2xl shadow-rose-900/10 romantic-frame"
        >
          {/* Subtle Watermark Stamp */}
          <div className="absolute top-6 right-8 opacity-10 dark:opacity-5 pointer-events-none select-none font-serif-luxury text-8xl font-black">
            ANAND
          </div>

          <div className="space-y-8 relative z-10">
            {/* Lead greeting with large quote */}
            <div className="border-b border-pink-100 dark:border-pink-900/40 pb-6">
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2B1720] dark:text-[#FFF0F4] flex items-center gap-3">
                <span>{ABOUT_TEXT.p1}</span>
              </h3>
              <p className="text-xs uppercase tracking-widest text-rose-500/80 font-semibold mt-1">
                Personal Diary Entry • Written from the heart
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="font-serif-luxury text-xl sm:text-2xl leading-relaxed text-[#3B222E] dark:text-[#F3DFE7] font-medium">
              {ABOUT_TEXT.p2}
            </p>

            {/* Paragraph 3 (Highlighted Journal Quote Box) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-pink-50/80 via-[#FFF9FA] to-amber-50/60 dark:from-pink-950/40 dark:via-[#2A1422] dark:to-amber-950/20 border-l-4 border-rose-500 shadow-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 shrink-0 mt-1" />
                <p className="text-base sm:text-lg leading-relaxed text-[#4A2D3A] dark:text-[#EBD3DE] font-normal">
                  {ABOUT_TEXT.p3}
                </p>
              </div>
            </div>

            {/* Paragraph 4 */}
            <p className="text-base sm:text-lg leading-relaxed text-[#553342] dark:text-[#DEC1CF] font-light">
              {ABOUT_TEXT.p4}
            </p>

            {/* Micro Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-pink-100 dark:border-pink-900/40">
              {[
                { icon: Stars, title: 'Dream Big', desc: 'No limits to vision' },
                { icon: Heart, title: 'Feel Deeply', desc: 'Authentic warmth' },
                { icon: Coffee, title: 'Small Joys', desc: 'Chai & simple smiles' },
                { icon: Globe, title: 'Explore', desc: 'Memories across earth' }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-pink-50/50 dark:bg-pink-950/30 text-center">
                  <item.icon className="w-5 h-5 mx-auto mb-1.5 text-rose-500" />
                  <p className="font-serif-luxury text-sm font-semibold text-[#2B1720] dark:text-[#FFF0F4]">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#6E4455] dark:text-[#CBB0BF]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Handwritten Signature */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-xs text-rose-700/60 dark:text-rose-300/60 font-mono">
                Authentic & Living in Truth
              </span>
              <span className="font-script text-3xl sm:text-4xl text-rose-600 dark:text-rose-300">
                ~ Anand ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
