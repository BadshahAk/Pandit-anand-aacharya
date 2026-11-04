import React from 'react';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface NotFoundViewProps {
  onReturnHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onReturnHome }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#FFF9ED] text-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-[#D6AD55] shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#FFF9ED] border border-[#D6AD55] flex items-center justify-center mx-auto mb-4 text-3xl">
          🕉️
        </div>

        <h1 className="text-4xl font-bold font-devanagari text-[#350A16] mb-2">404</h1>
        <h2 className="text-xl font-bold font-devanagari text-stone-800 mb-3">
          {t('पृष्ठ उपलब्ध नहीं है', 'Page Not Found')}
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
          {t(
            'यह पृष्ठ स्थानांतरित कर दिया गया है अथवा उपलब्ध नहीं है। कृपया मुख्य पृष्ठ पर लौटकर पावन सेवाओं का अवलोकन करें।',
            'This page is not available. Please return to the homepage to explore traditional Vedic puja services.'
          )}
        </p>

        <p className="text-xs font-devanagari text-[#350A16] font-semibold mb-6">
          {SITE_CONFIG.brand.ganeshMantra} • {SITE_CONFIG.brand.greeting}
        </p>

        <button
          onClick={onReturnHome}
          className="w-full py-3 px-4 rounded-lg bg-[#E58A16] hover:bg-[#F59E0B] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
        >
          <Home className="w-4 h-4 text-amber-200" />
          <span>{t('मुख्य पृष्ठ पर लौटें', 'Return to Homepage')}</span>
        </button>
      </div>
    </div>
  );
};
