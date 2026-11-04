import React from 'react';
import { MessageCircle, Calendar, Phone, MapPin, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const handleWhatsAppContact = () => {
    const msg = encodeURIComponent(
      `नमस्ते पण्डित आनन्द आचार्य जी! जय श्री राम। मैं आपकी वेबसाइट देखकर वैदिक पूजन व धार्मिक अनुष्ठान के संबंध में जानकारी प्राप्त करने हेतु संपर्क कर रहा/रही हूँ।`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#24060D] text-white">
      {/* Background Image with Deep Maroon/Gold Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_ram_temple_1793804380537.jpg"
          alt="Temple Sanctum Background"
          className="w-full h-full object-cover object-center transform scale-105 opacity-35"
          referrerPolicy="no-referrer"
        />
        {/* Deep Maroon Rich Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#24060D] via-[#350A16]/90 to-[#24060D]/95" />
        {/* Subtle Radial Golden Glow */}
        <div className="absolute inset-0 bg-radial from-[#D6AD55]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Subtle Animated Om Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] sm:text-[28rem] font-serif text-[#D6AD55]/5 select-none pointer-events-none animate-om-slow z-0">
        ॐ
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Top Portrait (Shown on Mobile, hidden on Desktop) */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden ornate-gold-frame shadow-2xl bg-[#350A16] group">
              <img
                src={SITE_CONFIG.profile.photoSrc}
                alt="Pandit Anand Acharya"
                className="w-full h-full object-cover object-[center_10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#24060D] via-[#24060D]/80 to-transparent text-center">
                <span className="text-[11px] text-[#D6AD55] font-semibold tracking-widest uppercase">
                  पण्डित आनन्द आचार्य
                </span>
              </div>
            </div>
          </div>

          {/* Headline & Introduction Column (Left on Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Mantra Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6AD55]/15 border border-[#D6AD55]/40 backdrop-blur-sm mb-5 text-[#D6AD55] text-xs sm:text-sm font-devanagari font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D6AD55]" />
              <span>{SITE_CONFIG.brand.ganeshMantra}</span>
              <span className="text-amber-200/50">|</span>
              <span>{SITE_CONFIG.brand.greeting}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-devanagari tracking-tight text-[#FFF9ED] mb-3 drop-shadow-md">
              {t('॥ पण्डित आनन्द आचार्य ॥', '॥ Pandit Anand Acharya ॥')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#D6AD55] font-devanagari font-medium mb-4 max-w-2xl">
              {t(SITE_CONFIG.brand.taglineHi, SITE_CONFIG.brand.taglineEn)}
            </p>

            {/* Introduction */}
            <p className="text-sm sm:text-base text-stone-200/95 leading-relaxed max-w-xl mb-6 font-light">
              {t(SITE_CONFIG.brand.heroIntroHi, SITE_CONFIG.brand.heroIntroEn)}
            </p>

            {/* Location & Quick Contact Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-300 mb-8 pb-4 border-b border-[#D6AD55]/20 w-full max-w-xl">
              <span className="flex items-center gap-1.5 text-[#D6AD55]">
                <MapPin className="w-4 h-4" />
                <span>{t('चिड़ावा (झुंझुनूं), राजस्थान', 'Chirawa (Jhunjhunu), Rajasthan')}</span>
              </span>
              <span className="text-[#D6AD55]/40">·</span>
              <a
                href={SITE_CONFIG.contact.callUrl}
                className="flex items-center gap-1.5 font-bold text-white hover:text-[#D6AD55] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D6AD55]" />
                <span>{SITE_CONFIG.contact.displayPhone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#E58A16] to-[#C25E00] hover:from-[#F59E0B] hover:to-[#E58A16] text-white font-bold text-sm sm:text-base shadow-xl shadow-amber-950/50 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-[#D6AD55]/50"
              >
                <Calendar className="w-5 h-5 text-amber-200" />
                <span>{t('पूजा बुक करें', 'Book a Puja')}</span>
              </button>

              <button
                onClick={handleWhatsAppContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-300/40"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{t('WhatsApp पर संपर्क करें', 'WhatsApp Contact')}</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-300 w-full max-w-xl">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#350A16]/60 border border-[#D6AD55]/20">
                <ShieldCheck className="w-4 h-4 text-[#D6AD55] shrink-0" />
                <span>{t('शुद्ध वैदिक विधि', 'Vedic Method')}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#350A16]/60 border border-[#D6AD55]/20">
                <Sparkles className="w-4 h-4 text-[#D6AD55] shrink-0" />
                <span>{t('शास्त्रोक्त मंत्रोच्चार', 'Scriptural Chants')}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#350A16]/60 border border-[#D6AD55]/20 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <HeartHandshake className="w-4 h-4 text-[#D6AD55] shrink-0" />
                <span>{t('पारिवारिक मंगल', 'Family Well-being')}</span>
              </div>
            </div>
          </div>

          {/* Desktop Right Column: Real Professional Portrait with Gold Accents */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden ornate-gold-frame shadow-2xl bg-[#350A16] group">
              <img
                src={SITE_CONFIG.profile.photoSrc}
                alt="Pandit Anand Acharya - Spiritual Portrait"
                className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Gold frame shimmer overlay */}
              <div className="absolute inset-0 border border-[#D6AD55]/40 rounded-2xl pointer-events-none" />

              {/* Nameplate tag on bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#24060D] via-[#24060D]/85 to-transparent text-center">
                <p className="text-xs text-[#D6AD55] font-semibold tracking-widest uppercase font-devanagari">
                  {t('सनातन वैदिक संस्कार', 'Sanatan Vedic Samskar')}
                </p>
                <h3 className="text-base font-bold text-[#FFF9ED] font-devanagari">
                  {SITE_CONFIG.profile.professionalName}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Gold Transition */}
      <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#FFF9ED] to-transparent pointer-events-none" />
    </section>
  );
};
