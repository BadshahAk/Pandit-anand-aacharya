import React from 'react';
import { motion } from 'motion/react';
import { Moon, Heart, Sparkles, Stars } from 'lucide-react';

export const MyLittleWish: React.FC = () => {
  return (
    <section
      id="wish"
      className="relative py-28 sm:py-36 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#24101D] to-[#160B12] text-white"
    >
      {/* Night Sky / Celestial Stars Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2.5 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.3
            }}
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 31) % 98}%`
            }}
            className="absolute text-amber-200 text-xs sm:text-sm select-none"
          >
            {i % 4 === 0 ? '✨' : i % 4 === 1 ? '✦' : '•'}
          </motion.div>
        ))}

        {/* Ambient Dream Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Crescent Moon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-amber-200 font-semibold mb-6 shadow-lg"
        >
          <Moon className="w-4 h-4 text-amber-300" />
          <span>🌙 A Little Wish</span>
          <Stars className="w-4 h-4 text-rose-300" />
        </motion.div>

        {/* Cinematic Main Wish Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative"
        >
          <p className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold leading-relaxed text-[#FFF0F5] mb-8">
            “Someday, I want someone with whom even ordinary days feel magical. Someone to laugh with, dream with, travel with, and grow old with.”
          </p>

          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-rose-400 to-transparent mb-8" />

          {/* Second Exact Highlight */}
          <p className="font-script text-2xl sm:text-4xl text-rose-300 leading-relaxed font-normal">
            “Not looking for a perfect fairytale… just a beautiful story with real feelings. 🥺❤️”
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-300">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
            <span>Held close in Anand’s heart</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
