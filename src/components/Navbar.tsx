import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Languages, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenSamagriGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenSamagriGuide }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelHi: 'मुखपृष्ठ', labelEn: 'Home' },
    { href: '#about', labelHi: 'परिचय', labelEn: 'About Me' },
    { href: '#services', labelHi: 'पूजन सेवाएं', labelEn: 'Puja Services' },
    { href: '#payment', labelHi: 'अग्रिम दक्षिणा', labelEn: 'Advance Dakshina' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Auspicious Gold & Maroon Ribbon */}
      <div className="bg-[#24060D] text-[#FFF9ED] text-xs py-1.5 px-4 text-center border-b border-[#D6AD55]/30 tracking-wider">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-devanagari font-semibold text-[#D6AD55] flex items-center gap-1.5">
            <span>{SITE_CONFIG.brand.ganeshMantra}</span>
            <span className="hidden sm:inline text-amber-200/50">|</span>
            <span className="hidden sm:inline">{SITE_CONFIG.brand.greeting}</span>
          </span>

          <span className="hidden md:inline-block text-[#FFF9ED]/80 text-xs">
            {t(SITE_CONFIG.brand.taglineHi, SITE_CONFIG.brand.taglineEn)}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSamagriGuide}
              className="text-[#D6AD55] hover:text-[#FFF9ED] text-xs underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3 h-3 text-[#D6AD55]" />
              <span>{t('पूजा सामग्री सूची', 'Samagri List')}</span>
            </button>
            <span className="text-[#D6AD55]/40">|</span>
            <a
              href={SITE_CONFIG.contact.callUrl}
              className="font-bold text-[#D6AD55] hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{SITE_CONFIG.contact.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#350A16]/95 backdrop-blur-md shadow-lg border-b border-[#D6AD55]/40 py-2.5 text-white'
            : 'bg-[#350A16] border-b border-[#D6AD55]/30 py-3.5 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark with Portrait Icon */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-[#FFF9ED] font-devanagari hover:text-[#D6AD55] transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#D6AD55] shadow-sm shrink-0">
              <img
                src={SITE_CONFIG.profile.photoSrc}
                alt={SITE_CONFIG.brand.nameHi}
                className="w-full h-full object-cover object-[center_12%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold leading-tight text-[#FFF9ED] group-hover:text-[#D6AD55]">
                {t(SITE_CONFIG.brand.nameHi, SITE_CONFIG.brand.nameEn)}
              </span>
              <span className="text-[10px] text-[#D6AD55] font-sans font-normal tracking-wider hidden sm:block">
                Chirawa, Jhunjhunu (Raj.)
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#D6AD55] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#D6AD55]"
              >
                {t(link.labelHi, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Buttons & Language Switcher */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#D6AD55] bg-[#24060D] hover:bg-[#24060D]/80 rounded border border-[#D6AD55]/50 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title={language === 'hi' ? 'Switch to English' : 'हिन्दी में बदलें'}
            >
              <Languages className="w-3.5 h-3.5 text-[#D6AD55]" />
              <span>{language === 'hi' ? 'ENG' : 'हिन्दी'}</span>
            </button>

            {/* Quick Call Button */}
            <a
              href={SITE_CONFIG.contact.callUrl}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#24060D] bg-[#D6AD55] hover:bg-[#F5DE9C] rounded shadow transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t('कॉल करें', 'Call Now')}</span>
            </a>

            {/* Puja Book Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E58A16] to-[#C25E00] hover:from-[#F59E0B] hover:to-[#E58A16] rounded shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0 cursor-pointer border border-amber-300/40"
            >
              <MessageCircle className="w-4 h-4 text-amber-200" />
              <span>{t('पूजा बुक करें', 'Book Puja')}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-200 hover:text-[#D6AD55] rounded focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#24060D] border-b border-[#D6AD55]/40 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 text-stone-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2 text-base font-medium text-stone-200 hover:text-[#D6AD55] border-b border-amber-900/40"
                >
                  {t(link.labelHi, link.labelEn)}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-[#E58A16] hover:bg-[#C25E00] rounded flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 text-amber-200" />
                  <span>{t('पूजा बुक करें', 'Book Puja')}</span>
                </button>

                <a
                  href={SITE_CONFIG.contact.callUrl}
                  className="w-full py-2 px-4 text-center text-xs font-bold text-[#24060D] bg-[#D6AD55] hover:bg-[#F5DE9C] rounded flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t('कॉल करें: ', 'Call: ') + SITE_CONFIG.contact.displayPhone}</span>
                </a>

                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 text-center text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t('WhatsApp पर बात करें', 'Chat on WhatsApp')}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
