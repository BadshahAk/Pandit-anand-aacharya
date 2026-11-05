import React from 'react';
import { motion } from 'motion/react';
import { Heart, Send, Sparkles, ArrowUp } from 'lucide-react';
import { SITE_BRAND } from '../config/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFB] to-[#FCEEF2] dark:from-[#170B12] dark:via-[#190C14] dark:to-[#13080F] border-t border-pink-200/60 dark:border-pink-900/40 text-center">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-rose-200/20 dark:bg-pink-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Monogram Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-lg shadow-rose-500/20 mb-2">
          <Heart className="w-6 h-6 fill-white animate-pulse" />
        </div>

        {/* Exact Required Footer Quote */}
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2B1720] dark:text-[#FFF0F4]">
          “Still dreaming. Still believing. Still becoming. ✨”
        </h3>

        {/* Brand Tagline */}
        <p className="font-script text-xl text-rose-600 dark:text-rose-300">
          {SITE_BRAND.tagline}
        </p>

        {/* Social Link to Telegram */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={SITE_BRAND.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect on Telegram ({SITE_BRAND.telegramUsername})</span>
          </a>
        </div>

        {/* Exact Made with love text */}
        <div className="pt-6 border-t border-pink-100 dark:border-pink-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7C495E] dark:text-[#C79EB1] gap-4">
          <p>
            Made with <Heart className="w-3.5 h-3.5 inline text-rose-500 fill-rose-500 animate-pulse" /> by <strong className="font-serif-luxury text-sm text-[#2B1720] dark:text-[#FFF0F4]">{SITE_BRAND.name}</strong>.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-pink-200 dark:border-pink-900/40 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
