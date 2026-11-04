import React, { useState } from 'react';
import { CreditCard, Copy, Check, QrCode, ShieldCheck, ArrowRight, Building2, User, Hash, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface AdvancePaymentProps {
  onProceedToBooking: () => void;
}

export const AdvancePayment: React.FC<AdvancePaymentProps> = ({ onProceedToBooking }) => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bank = SITE_CONFIG.bankDetails;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="payment" className="py-20 bg-ivory-gradient border-b border-[#D6AD55]/40 relative overflow-hidden">
      {/* Subtle Background Watermarks */}
      <div className="absolute top-12 left-8 text-[#350A16]/5 text-9xl font-serif select-none pointer-events-none">
        ॐ
      </div>
      <div className="absolute bottom-10 right-10 text-[#350A16]/5 text-9xl font-serif select-none pointer-events-none">
        卐
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#E58A16] font-bold block mb-1">
            {t('शुभ संकल्प एवं अग्रिम दक्षिणा', 'Sacred Advance Dakshina')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#350A16] mb-3">
            {t('अग्रिम दक्षिणा एवं बैंक खाता विवरण', 'Advance Payment & Bank Details')}
          </h2>
          <p className="text-sm text-stone-600">
            {t(
              'पूजा संकल्प, समय निर्धारण एवं सामग्री व्यवस्था हेतु अग्रिम दक्षिणा सीधे बैंक खाते अथवा UPI में प्रेषित कर सकते हैं।',
              'For ceremony scheduling and samagri arrangements, advance dakshina may be sent directly via Bank Transfer or UPI.'
            )}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Luxury Payment Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Official State Bank of India Account Card */}
          <div className="lg:col-span-7 bg-maroon-royal rounded-3xl p-6 sm:p-8 text-white border-2 border-[#D6AD55]/60 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Gold foil border glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D6AD55]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6AD55]/30">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D6AD55]/20 border border-[#D6AD55]/40 text-[#D6AD55]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D6AD55] uppercase font-bold tracking-wider block">
                      {t('आधिकारिक बैंक विवरण', 'Official Bank Details')}
                    </span>
                    <h3 className="text-xl font-bold font-devanagari text-[#FFF9ED]">
                      {bank.bankName}
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-[#D6AD55]/20 text-[#D6AD55] border border-[#D6AD55]/40 font-semibold">
                  {bank.branch}
                </span>
              </div>

              {/* Account Details with 1-Click Copy Buttons */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Account Number */}
                <div className="p-3.5 rounded-xl bg-black/30 border border-[#D6AD55]/30 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-stone-300 uppercase font-semibold block">
                      {t('खाता संख्या (Account Number)', 'Account Number')}
                    </span>
                    <span className="text-lg sm:text-xl font-mono font-bold tracking-wider text-[#D6AD55]">
                      {bank.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(bank.accountNumber, 'acc')}
                    className="py-1.5 px-3 rounded-lg bg-[#D6AD55] hover:bg-[#F5DE9C] text-[#24060D] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    title="खाता संख्या कॉपी करें"
                  >
                    {copiedField === 'acc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'acc' ? t('कॉपी हुआ', 'Copied') : t('कॉपी करें', 'Copy')}</span>
                  </button>
                </div>

                {/* Account Holder Name */}
                <div className="p-3.5 rounded-xl bg-black/30 border border-[#D6AD55]/30 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-stone-300 uppercase font-semibold block">
                      {t('खाताधारक का नाम (Account Holder)', 'Account Holder Name')}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#FFF9ED]">
                      {bank.holderName}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(bank.holderName, 'name')}
                    className="py-1.5 px-3 rounded-lg bg-[#D6AD55] hover:bg-[#F5DE9C] text-[#24060D] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    title="नाम कॉपी करें"
                  >
                    {copiedField === 'name' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'name' ? t('कॉपी हुआ', 'Copied') : t('कॉपी करें', 'Copy')}</span>
                  </button>
                </div>

                {/* IFSC Code */}
                <div className="p-3.5 rounded-xl bg-black/30 border border-[#D6AD55]/30 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-stone-300 uppercase font-semibold block">
                      {t('IFSC कोड', 'IFSC Code')}
                    </span>
                    <span className="text-lg sm:text-xl font-mono font-bold tracking-wider text-[#D6AD55]">
                      {bank.ifsc}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(bank.ifsc, 'ifsc')}
                    className="py-1.5 px-3 rounded-lg bg-[#D6AD55] hover:bg-[#F5DE9C] text-[#24060D] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    title="IFSC कोड कॉपी करें"
                  >
                    {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'ifsc' ? t('कॉपी हुआ', 'Copied') : t('कॉपी करें', 'Copy')}</span>
                  </button>
                </div>

                {/* Branch & Type */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10">
                    <span className="text-stone-400 block text-[10px]">{t('बैंक शाखा', 'Branch')}</span>
                    <span className="font-semibold text-stone-200">{bank.branch}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10">
                    <span className="text-stone-400 block text-[10px]">{t('खाता प्रकार', 'Account Type')}</span>
                    <span className="font-semibold text-stone-200">{bank.accountType}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6AD55]/20 flex items-center gap-2 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('100% सुरक्षित एवं प्रमाणित भारतीय स्टेट बैंक (SBI) खाता।', '100% verified official SBI account.')}</span>
            </div>
          </div>

          {/* Right Column: Scan & Pay Instructions + Direct Booking Link */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6AD55]/50 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-bold text-[#350A16] bg-[#D6AD55]/20 rounded border border-[#D6AD55]/40">
                  {t('भुगतान चरण (Payment Steps)', 'How to Pay')}
                </span>
              </div>

              <h3 className="text-xl font-bold font-devanagari text-[#350A16] mb-3">
                {t('अग्रिम दक्षिणा भेजने की विधि', 'Procedure for Advance Dakshina')}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="w-6 h-6 rounded-full bg-[#350A16] text-[#D6AD55] font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-[#350A16] block">{t('खाता विवरण में राशि भेजें', 'Transfer the amount')}</strong>
                    <span>{t('Google Pay, PhonePe, Paytm अथवा बैंक ऐप से दिए गए खाता संख्या या IFSC में ट्रांसफर करें।', 'Transfer via Google Pay, PhonePe, Paytm or Net Banking using Account & IFSC.')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="w-6 h-6 rounded-full bg-[#350A16] text-[#D6AD55] font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-[#350A16] block">{t('स्क्रीनशॉट व UTR सहेजें', 'Save Screenshot & UTR')}</strong>
                    <span>{t('सफल भुगतान के बाद रसीद का स्क्रीनशॉट लें एवं 12-अंकीय UTR नंबर नोट कर लें।', 'Take a screenshot of the successful transfer and note down the 12-digit UTR number.')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <span className="w-6 h-6 rounded-full bg-[#350A16] text-[#D6AD55] font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-[#350A16] block">{t('नीचे फॉर्म में अटैच करें', 'Attach in Form Below')}</strong>
                    <span>{t('बुकिंग फॉर्म में अपना UTR नंबर लिखें और स्क्रीनशॉट अपलोड कर सबमिट करें।', 'Enter your UTR in the booking form, attach the screenshot, and click submit.')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onProceedToBooking}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E58A16] to-[#C25E00] hover:from-[#F59E0B] hover:to-[#E58A16] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D6AD55]/40"
              >
                <span>{t('बुकिंग फॉर्म भरें एवं स्क्रीनशॉट अपलोड करें', 'Proceed to Form & Upload Receipt')}</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
