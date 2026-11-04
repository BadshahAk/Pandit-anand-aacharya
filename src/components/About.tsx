import React from 'react';
import { User, MapPin, Calendar, GraduationCap, Languages, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const { profile, quotes } = SITE_CONFIG;

  return (
    <section id="about" className="py-20 bg-ivory-gradient border-b border-[#D6AD55]/30 relative overflow-hidden">
      {/* Decorative Subtle Watermarks */}
      <div className="absolute top-10 right-10 text-[#350A16]/5 text-9xl font-serif select-none pointer-events-none">
        ॐ
      </div>
      <div className="absolute bottom-10 left-10 text-[#350A16]/5 text-9xl font-serif select-none pointer-events-none">
        卐
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E58A16] font-bold block mb-1">
            {t('आध्यात्मिक परिचय', 'Spiritual Identity')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#350A16] mb-3">
            {t('पण्डित आनन्द आचार्य के विषय में', 'About Pandit Anand Acharya')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto" />
        </div>

        {/* 2-Column Grid: Portrait on Left, Bio and Values on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Portrait & Personal Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden ornate-gold-frame shadow-xl bg-[#350A16] mb-6 group">
              <img
                src={profile.photoSrc}
                alt="Pandit Anand Acharya"
                className="w-full h-auto object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#24060D] via-[#24060D]/85 to-transparent text-white">
                <span className="text-xs text-[#D6AD55] font-semibold">
                  {t('वैदिक सनातन सेवा', 'Vedic Sanatan Seva')}
                </span>
                <h3 className="text-lg font-bold font-devanagari text-white">
                  {profile.professionalName} ({profile.fullName})
                </h3>
                <p className="text-xs text-amber-200/90 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D6AD55]" />
                  <span>{t('चिड़ावा, राजस्थान', 'Chirawa, Rajasthan')}</span>
                </p>
              </div>
            </div>

            {/* Factual Profile Information */}
            <div className="bg-white rounded-xl p-5 border border-[#D6AD55]/40 shadow-sm flex-1">
              <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-amber-100 pb-2">
                <User className="w-4 h-4 text-[#E58A16]" />
                <span>{t('व्यक्तिगत विवरण', 'Personal Details')}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                <div className="p-2 rounded bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="text-stone-500 block text-[11px]">{t('वास्तविक नाम', 'Full Name')}</span>
                  <span className="font-bold text-[#350A16]">{profile.fullName}</span>
                </div>
                <div className="p-2 rounded bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="text-stone-500 block text-[11px]">{t('जन्म तिथि', 'Date of Birth')}</span>
                  <span className="font-bold text-[#350A16]">{profile.dob}</span>
                </div>
                <div className="p-2 rounded bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="text-stone-500 block text-[11px]">{t('जन्मस्थान', 'Birthplace')}</span>
                  <span className="font-bold text-[#350A16]">{profile.birthplace}</span>
                </div>
                <div className="p-2 rounded bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="text-stone-500 block text-[11px]">{t('शिक्षा', 'Education')}</span>
                  <span className="font-bold text-[#350A16]">{profile.education}</span>
                </div>
                <div className="p-2 rounded bg-[#FFF9ED] border border-[#D6AD55]/30 col-span-1 sm:col-span-2">
                  <span className="text-stone-500 block text-[11px]">{t('भाषाएं', 'Languages')}</span>
                  <span className="font-bold text-[#350A16]">{profile.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Spiritual Values, Shanti Shloka */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D6AD55]/40 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 text-xs font-semibold text-[#350A16] bg-[#D6AD55]/20 rounded border border-[#D6AD55]/40">
                  {t('सनातन वैदिक निष्ठा', 'Sanatan Vedic Commitment')}
                </span>
                <span className="text-xs text-stone-500">
                  {t('सत्य व अनुशासन', 'Truth & Discipline')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-devanagari text-[#350A16] mb-4">
                {t(
                  'सनातन संस्कृति, भारतीय परंपरा और वैदिक संस्कार',
                  'Sanatan Heritage, Indian Traditions & Vedic Sacraments'
                )}
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                {t(profile.bioIntroHi, profile.bioIntroEn)}
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                {t(
                  'हमारे जीवन में प्रत्येक संस्कार—चाहे वह गृह प्रवेश हो, सत्यनारायण कथा, रुद्राभिषेक अथवा विवाह संस्कार—पारिवारिक सामंजस्य और आध्यात्मिक शांति का माध्यम है। हमारी चेष्टा रहती है कि प्रत्येक विधि को शास्त्रीय शुचिता और सरल यजमान संवाद के साथ संपन्न कराया जाए।',
                  'Every ceremony in our tradition—be it Griha Pravesh, Satyanarayan Katha, Rudrabhishek, or Vivah Sanskar—is an auspicious pathway to familial harmony and divine blessings. Our constant dedication is to perform these rites with scriptural sanctity and warm guidance.'
                )}
              </p>

              {/* Core Values */}
              <div className="border-t border-[#D6AD55]/20 pt-4">
                <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E58A16]" />
                  <span>{t('मूलभूत आध्यात्मिक मूल्य', 'Core Spiritual Values')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {profile.valuesHi.map((val, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-[#FFF9ED] border border-[#D6AD55]/25 text-xs text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{t(val, profile.valuesEn[idx])}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sacred Shanti Shloka Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#350A16] via-[#4A0E17] to-[#24060D] text-white border border-[#D6AD55]/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10 text-center sm:text-left">
                <span className="text-[11px] font-semibold text-[#D6AD55] uppercase tracking-widest font-devanagari block mb-2">
                  {t('॥ पावन वैदिक प्रार्थना ॥', '॥ Sacred Vedic Prayer ॥')}
                </span>

                <p className="font-devanagari text-lg sm:text-2xl font-bold text-[#FFF9ED] mb-2 leading-relaxed whitespace-pre-line">
                  {quotes.shantiShloka.sanskrit}
                </p>

                <p className="text-xs sm:text-sm text-stone-300 italic pt-2 border-t border-[#D6AD55]/20">
                  <span className="font-semibold text-[#D6AD55] not-italic mr-1">
                    {t('भावार्थ:', 'Meaning:')}
                  </span>
                  {t(quotes.shantiShloka.meaningHi, quotes.shantiShloka.meaningEn)}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
