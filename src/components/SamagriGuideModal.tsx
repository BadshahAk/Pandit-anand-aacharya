import React, { useState } from 'react';
import { X, Check, Copy, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface SamagriGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamagriGuideModal: React.FC<SamagriGuideModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const samagriList = language === 'hi' ? SITE_CONFIG.samagriGuideHi : SITE_CONFIG.samagriGuideEn;

  const handleCopyChecklist = () => {
    let text = `॥ पूजा तैयारी एवं आवश्यक सामग्री सूची (Pandit Anand Acharya) ॥\n`;
    text += `संपर्क: ${SITE_CONFIG.contact.displayPhone} | चिड़ावा (राजस्थान)\n\n`;
    samagriList.forEach((cat) => {
      text += `[${cat.category}]\n`;
      cat.items.forEach((item) => {
        text += `• ${item}\n`;
      });
      text += `\n`;
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFF9ED] rounded-2xl overflow-hidden border border-[#D6AD55] shadow-2xl text-stone-900 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#350A16] via-[#4A0E17] to-[#24060D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#D6AD55] font-semibold block mb-1">
            {t('यजमान परिवार हेतु मार्गदर्शिका', 'Devotee Family Preparation Guide')}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-devanagari text-[#FFF9ED] mb-1">
            {t('सामान्य पूजा सामग्री एवं व्यवस्था सूची', 'Standard Puja Samagri Checklist')}
          </h3>
          <p className="text-xs text-[#D6AD55]">
            {t(
              'किसी भी मांगलिक अनुष्ठान से पूर्व घर में रखी जाने वाली आधारभूत सामग्री।',
              'Fundamental items generally required before conducting sacred ceremonies at home.'
            )}
          </p>
        </div>

        {/* List Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {samagriList.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-[#D6AD55]/40 shadow-sm">
              <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E58A16]" />
                <span>{section.category}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-[#D6AD55] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-white text-xs text-[#350A16] border border-[#D6AD55]/40 shadow-sm">
            <strong>{t('विशेष नोट: ', 'Special Note: ')}</strong>
            {t(
              'विवाह संस्कार, रुद्राभिषेक अथवा बड़े हवन हेतु विशिष्ट सामग्री की सूची संकल्प समय पंडित जी द्वारा पृथक रूप से उपलब्ध कराई जाती है।',
              'For Vivah Sanskar, Rudrabhishek, or major Havans, an extended specialized list will be shared individually based on your family traditions.'
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#D6AD55]/40 bg-white flex items-center justify-between">
          <button
            onClick={handleCopyChecklist}
            className="py-2 px-3 text-xs font-bold text-[#350A16] bg-[#FFF9ED] hover:bg-[#FDF0D0] rounded border border-[#D6AD55] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-[#E58A16]" />}
            <span>{copied ? t('सूची कॉपी हो गई!', 'Checklist Copied!') : t('पूरी सूची कॉपी करें', 'Copy Checklist')}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-[#350A16] hover:bg-[#24060D] rounded cursor-pointer"
          >
            {t('समझ गए (बंद करें)', 'Close Guide')}
          </button>
        </div>
      </div>
    </div>
  );
};
