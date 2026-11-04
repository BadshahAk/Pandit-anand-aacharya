import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSamagriGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSamagriGuide,
  onOpenBooking
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-[#350A16] via-[#24060D] to-[#180308] text-white pt-16 pb-12 border-t-2 border-[#D6AD55]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D6AD55]/20">
          
          {/* Column 1: Brand & Profile Avatar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D6AD55] shadow shrink-0">
                <img
                  src={SITE_CONFIG.profile.photoSrc}
                  alt={SITE_CONFIG.brand.nameHi}
                  className="w-full h-full object-cover object-[center_12%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[11px] font-devanagari text-[#D6AD55] font-semibold block">
                  {SITE_CONFIG.brand.ganeshMantra}
                </span>
                <h3 className="text-xl font-bold font-devanagari text-[#FFF9ED]">
                  {t(SITE_CONFIG.brand.nameHi, SITE_CONFIG.brand.nameEn)}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#D6AD55] font-semibold font-devanagari">
              {SITE_CONFIG.brand.greeting} • {t(SITE_CONFIG.brand.taglineHi, SITE_CONFIG.brand.taglineEn)}
            </p>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              {t(
                'सनातन संस्कृति, शुद्ध वैदिक कर्मकांड, सत्यनारायण कथा, गृह प्रवेश एवं मांगलिक संस्कारों हेतु निष्ठावान आध्यात्मिक सेवा।',
                'Dedicated spiritual guidance and traditional Vedic rites honoring the eternal ethos of Sanatan Dharma.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#24060D] hover:bg-[#D6AD55] hover:text-[#24060D] border border-[#D6AD55]/40 flex items-center justify-center text-xs font-bold text-[#D6AD55] transition-colors"
                title="YouTube"
              >
                YT
              </a>
              <a
                href={SITE_CONFIG.contact.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#24060D] hover:bg-[#D6AD55] hover:text-[#24060D] border border-[#D6AD55]/40 flex items-center justify-center text-xs font-bold text-[#D6AD55] transition-colors"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={SITE_CONFIG.contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#24060D] hover:bg-[#D6AD55] hover:text-[#24060D] border border-[#D6AD55]/40 flex items-center justify-center text-xs font-bold text-[#D6AD55] transition-colors"
                title="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#D6AD55] uppercase tracking-widest border-b border-[#D6AD55]/30 pb-2">
              {t('मुख्य अनुभाग', 'Navigation')}
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#home" className="hover:text-[#D6AD55] transition-colors">
                  {t('मुखपृष्ठ (Home)', 'Home')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D6AD55] transition-colors">
                  {t('परिचय (About Pandit Ji)', 'About Pandit Anand Acharya')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D6AD55] transition-colors">
                  {t('समस्त 10 पूजन सेवाएं (Services)', '10 Puja Services')}
                </a>
              </li>
              <li>
                <a href="#payment" className="hover:text-[#D6AD55] transition-colors">
                  {t('अग्रिम दक्षिणा व खाता (Advance Payment)', 'Advance Payment & Bank')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D6AD55] transition-colors">
                  {t('संपर्क व परामर्श (Contact)', 'Contact & Booking')}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSamagriGuide}
                  className="hover:text-[#D6AD55] transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-[#D6AD55]" />
                  <span>{t('पूजा सामग्री चेकलिस्ट', 'Puja Checklist')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Actions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#D6AD55] uppercase tracking-widest border-b border-[#D6AD55]/30 pb-2">
              {t('संपर्क सूत्र (Verified Details)', 'Contact Information')}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D6AD55] shrink-0 mt-0.5" />
                <span>{t(SITE_CONFIG.contact.address.fullTextHi, SITE_CONFIG.contact.address.fullTextEn)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D6AD55] shrink-0" />
                <a
                  href={SITE_CONFIG.contact.callUrl}
                  className="font-bold text-white hover:text-[#D6AD55] transition-colors"
                >
                  {SITE_CONFIG.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  {t('WhatsApp: ', 'WhatsApp: ') + SITE_CONFIG.contact.displayPhone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={SITE_CONFIG.contact.callUrl}
                className="flex-1 py-2 px-3 text-xs font-bold text-[#24060D] bg-[#D6AD55] hover:bg-[#F5DE9C] rounded text-center transition-colors"
              >
                {t('कॉल करें', 'Call Now')}
              </a>
              <button
                onClick={onOpenBooking}
                className="flex-1 py-2 px-3 text-xs font-bold text-white bg-[#E58A16] hover:bg-[#F59E0B] rounded text-center transition-colors cursor-pointer"
              >
                {t('पूजा बुक करें', 'Book Puja')}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Shloka and Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-devanagari text-[#D6AD55] font-bold">
              ॥ सर्वे भवन्तु सुखिनः ॥ ॥ सर्वे सन्तु निरामयाः ॥
            </span>
            <span className="hidden sm:inline">|</span>
            <span>
              © 2026 Pandit Anand Acharya. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#D6AD55] transition-colors cursor-pointer"
            >
              {t('गोपनीयता नीति', 'Privacy Policy')}
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#D6AD55] transition-colors cursor-pointer"
            >
              {t('नियम एवं शर्तें', 'Terms & Conditions')}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
