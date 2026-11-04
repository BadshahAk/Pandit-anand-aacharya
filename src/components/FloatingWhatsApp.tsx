import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(SITE_CONFIG.contact.defaultWhatsAppMsg);
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* Label Badge */}
      <button
        onClick={handleOpenWhatsApp}
        className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-[#24060D] text-[#D6AD55] border border-[#D6AD55]/60 shadow-xl text-xs font-bold hover:bg-[#350A16] transition-all cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{t('पूजा बुक करें', 'Book Puja')}</span>
      </button>

      {/* Floating Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center border-2 border-white"
        aria-label="WhatsApp Contact"
        title="WhatsApp: +91 9116050506"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow" />
      </button>
    </div>
  );
};
