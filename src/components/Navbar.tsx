import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sun, Moon, Menu, X, Send, Sparkles, Music2, Gamepad2 } from 'lucide-react';
import { SITE_BRAND } from '../config/siteData';

interface Props {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onReplayIntro: () => void;
  isPlayingMusic: boolean;
  toggleMusic: () => void;
}

export const Navbar: React.FC<Props> = ({
  darkMode,
  setDarkMode,
  onReplayIntro,
  isPlayingMusic,
  toggleMusic
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Personality', href: '#personality' },
    { label: 'Dreams', href: '#dreams' },
    { label: 'Journey', href: '#journey' },
    { label: 'Feelings', href: '#feelings' },
    { label: 'Faves', href: '#faves' },
    { label: 'Travel', href: '#travel' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Love Lounge 🎮', href: '#games', highlight: true },
    { label: 'Surprises 💌', href: '#surprises' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/80 dark:bg-[#1A0D15]/85 backdrop-blur-md border-b border-pink-200/50 dark:border-pink-900/40 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#2D1B22] dark:text-[#FFF0F4]"
          >
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-md shadow-rose-500/20 text-xs font-sans">
              <Heart className="w-4 h-4 fill-white animate-pulse" />
            </span>
            <span className="tracking-[0.18em]">{SITE_BRAND.name}</span>
            <span className="hidden sm:inline font-script text-base font-normal text-rose-500 dark:text-rose-300">
              • my little world
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  link.highlight
                    ? 'font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200/60 dark:border-rose-800/40'
                    : 'text-[#4A2D39] dark:text-[#E2CAD4] hover:text-rose-600 dark:hover:text-rose-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Mini Toggle */}
            <button
              onClick={toggleMusic}
              title={isPlayingMusic ? 'Pause Music' : 'Play O Sanam'}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isPlayingMusic
                  ? 'bg-rose-100 dark:bg-rose-950 border-rose-300 text-rose-600 dark:text-rose-300 shadow-sm'
                  : 'bg-white/60 dark:bg-white/5 border-pink-200/60 dark:border-pink-900/40 text-stone-600 dark:text-stone-300 hover:text-rose-500'
              }`}
            >
              <Music2 className={`w-4 h-4 ${isPlayingMusic ? 'animate-bounce' : ''}`} />
            </button>

            {/* Replay Intro Button */}
            <button
              onClick={onReplayIntro}
              title="Replay Opening Experience"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white/70 dark:bg-white/5 border border-pink-200/60 dark:border-pink-900/40 text-[#5C3847] dark:text-[#E2CAD4] hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Intro</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Rose Mode' : 'Switch to Velvet Night Mode'}
              className="p-2 rounded-full bg-white/70 dark:bg-white/5 border border-pink-200/60 dark:border-pink-900/40 text-[#5C3847] dark:text-amber-300 hover:text-rose-600 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Telegram Link Button */}
            <a
              href={SITE_BRAND.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 shadow-md shadow-rose-500/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/70 dark:bg-white/5 border border-pink-200/60 dark:border-pink-900/40 text-[#4A2D39] dark:text-[#FFF0F4] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white/95 dark:bg-[#1E0E18]/95 backdrop-blur-xl border-b border-pink-200/60 dark:border-pink-900/40 px-6 py-5 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-sm transition-all ${
                      link.highlight
                        ? 'bg-rose-500 text-white font-semibold flex items-center gap-1.5'
                        : 'text-[#4A2D39] dark:text-[#E2CAD4] hover:bg-rose-50 dark:hover:bg-rose-950/50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-pink-100 dark:border-pink-900/40 flex items-center justify-between">
                <a
                  href={SITE_BRAND.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-amber-500 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Chat on Telegram</span>
                </a>

                <button
                  onClick={() => {
                    onReplayIntro();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                >
                  Replay Intro 🌸
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
