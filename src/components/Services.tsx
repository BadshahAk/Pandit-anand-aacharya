import React, { useState } from 'react';
import {
  BookOpen,
  Home,
  HeartHandshake,
  Sparkles,
  Droplets,
  Sun,
  FlameKindling,
  Flame,
  Award,
  Compass,
  Clock,
  ArrowRight,
  Info,
  CalendarCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
  onOpenDetailsModal: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForBooking,
  onOpenDetailsModal
}) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'puja' | 'sanskar' | 'anushthan'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#D6AD55]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#D6AD55]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D6AD55]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D6AD55]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#D6AD55]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#D6AD55]" />;
      case 'FlameKindling':
        return <FlameKindling className="w-6 h-6 text-[#D6AD55]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#D6AD55]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#D6AD55]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D6AD55]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D6AD55]" />;
    }
  };

  const filteredServices = SITE_CONFIG.services.filter((s) => {
    if (filter === 'puja') return ['satyanarayan-katha', 'ganesh-puja', 'puja-path'].includes(s.id);
    if (filter === 'sanskar') return ['griha-pravesh', 'vivah-sanskar', 'birthday-anushthan'].includes(s.id);
    if (filter === 'anushthan') return ['rudrabhishek', 'navagraha-shanti', 'havan-yajna', 'jyotish-kundali'].includes(s.id);
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#FFF9ED] border-b border-[#D6AD55]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E58A16] font-bold block mb-1">
            {t('शास्त्रसम्मत धार्मिक अनुष्ठान', 'Scriptural Religious Services')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#350A16] mb-3">
            {t('वैदिक पूजन एवं मांगलिक सेवाएं', 'Vedic Puja & Sacred Ceremonies')}
          </h2>
          <p className="text-sm text-stone-600">
            {t(
              'सनातन परंपरा के अनुसार समस्त 10 पावन वैदिक अनुष्ठान निष्ठापूर्वक संपन्न कराए जाते हैं।',
              'All 10 sacred Vedic ceremonies performed strictly in accordance with scriptural tradition.'
            )}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto mt-4" />
        </div>

        {/* Transparent Confirmation Notice */}
        <div className="mb-10 p-4 rounded-xl bg-white border border-[#D6AD55]/50 max-w-4xl mx-auto shadow-sm flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#350A16] text-[#D6AD55] shrink-0">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#350A16] leading-relaxed">
            <span className="font-bold">
              {t('महत्वपूर्ण सूचना (सत्य एवं शुचिता संकल्प): ', 'Notice on Availability: ')}
            </span>
            {t(
              'समस्त सेवाएं पूर्व परामर्श, तिथि निर्धारण एवं व्यक्तिगत पुष्टि (Subject to confirmation) के आधार पर उपलब्ध हैं। पंडित जी स्वयं यजमान से बात कर मुहूर्त एवं समय निश्चित करते हैं।',
              'All services are subject to personal consultation, auspicious timing, and confirmation by Pandit Anand Acharya. No booking is finalized until personally confirmed.'
            )}
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow-md border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('सभी 10 सेवाएं (All 10)', 'All 10 Services')}
          </button>

          <button
            onClick={() => setFilter('puja')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              filter === 'puja'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow-md border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('कथा व नित्य पूजा', 'Katha & Daily Puja')}
          </button>

          <button
            onClick={() => setFilter('sanskar')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              filter === 'sanskar'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow-md border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('गृह प्रवेश व विवाह संस्कार', 'Housewarming & Wedding')}
          </button>

          <button
            onClick={() => setFilter('anushthan')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              filter === 'anushthan'
                ? 'bg-[#350A16] text-[#FFF9ED] shadow-md border border-[#D6AD55]'
                : 'bg-white text-stone-700 hover:bg-[#FFF9ED] border border-amber-200'
            }`}
          >
            {t('रुद्राभिषेक, हवन व कुंडली', 'Abhishek, Havan & Kundali')}
          </button>
        </div>

        {/* 10 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#D6AD55]/40 hover:border-[#D6AD55] shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Gold Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#D6AD55]/20 to-transparent pointer-events-none rounded-tr-2xl" />

              <div>
                {/* Header with Icon and Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#350A16] border border-[#D6AD55]/50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E58A16] bg-[#FFF9ED] border border-[#D6AD55]/30 px-2 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold font-devanagari text-[#350A16] mb-2 group-hover:text-[#E58A16] transition-colors">
                  {t(service.titleHi, service.titleEn)}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#E58A16]" />
                  <span>{t(service.durationHi, service.durationEn)}</span>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {t(service.shortDescHi, service.shortDescEn)}
                </p>

                {/* Highlights */}
                <div className="border-t border-amber-100 pt-3 mb-5 space-y-1.5">
                  {service.highlightsHi.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-stone-700">
                      <span className="text-[#D6AD55] font-bold">✦</span>
                      <span>{t(item, service.highlightsEn[i])}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Know More + Book Now */}
              <div className="pt-3 border-t border-amber-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenDetailsModal(service)}
                  className="flex-1 py-2 px-2.5 text-xs font-bold text-[#350A16] bg-[#FFF9ED] hover:bg-[#FDF0D0] rounded-lg border border-[#D6AD55]/60 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#E58A16]" />
                  <span>{t('विधि जानें', 'Know More')}</span>
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="flex-1 py-2 px-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#E58A16] to-[#C25E00] hover:from-[#F59E0B] hover:to-[#E58A16] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow"
                >
                  <span>{t('पूजा बुक करें', 'Book Now')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-maroon-royal text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#D6AD55]/40">
          <div>
            <span className="text-[11px] text-[#D6AD55] font-semibold uppercase tracking-wider block mb-1">
              {t('निःसंकोच परामर्श लें', 'Free Spiritual Guidance')}
            </span>
            <h4 className="text-xl font-bold font-devanagari text-[#FFF9ED] mb-1">
              {t('किसी विशेष अनुष्ठान अथवा मुहूर्त हेतु मार्गदर्शन चाहिए?', 'Planning an Auspicious Family Ceremony?')}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              {t(
                'पंडित जी से सीधे बात कर शुभ मुहूर्त, पूजन सामग्री एवं तिथि निर्धारण करें।',
                'Speak directly with Pandit Anand Acharya to discuss auspicious muhurat and rituals.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.contact.callUrl}
              className="px-5 py-3 rounded-lg bg-[#D6AD55] hover:bg-[#F5DE9C] text-[#24060D] font-bold text-xs sm:text-sm transition-all"
            >
              {t('कॉल करें', 'Call Now')}
            </a>
            <button
              onClick={() => onSelectServiceForBooking('satyanarayan-katha')}
              className="px-5 py-3 rounded-lg bg-[#E58A16] hover:bg-[#F59E0B] text-white font-bold text-xs sm:text-sm transition-all shadow cursor-pointer"
            >
              {t('पूजा बुक करें', 'Book a Ritual')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
