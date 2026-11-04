import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailsModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  onClose,
  onBook
}) => {
  const { t } = useLanguage();

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFF9ED] rounded-2xl overflow-hidden border border-[#D6AD55] shadow-2xl text-stone-900 max-h-[90vh] flex flex-col"
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
            {t('वैदिक विधि एवं अनुष्ठान विवरण', 'Vedic Procedure & Ritual Overview')}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-devanagari text-[#FFF9ED] mb-2">
            {t(service.titleHi, service.titleEn)}
          </h3>

          <div className="flex items-center gap-2 text-xs text-[#D6AD55]">
            <Clock className="w-3.5 h-3.5" />
            <span>{t(service.durationHi, service.durationEn)}</span>
            <span aria-hidden="true">·</span>
            <span>{t('पारंपरिक वैदिक विधि', 'Traditional Vedic Vidhi')}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Significance */}
          <div className="p-4 rounded-xl bg-white border border-[#D6AD55]/40 shadow-sm">
            <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E58A16]" />
              <span>{t('धार्मिक महत्व एवं फलश्रुति', 'Spiritual Significance')}</span>
            </h4>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              {t(service.significanceHi, service.significanceEn)}
            </p>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-2">
              {t('अनुष्ठान प्रक्रिया एवं विस्तार', 'Ritual Process & Scope')}
            </h4>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
              {t(service.fullDescHi, service.fullDescEn)}
            </p>
          </div>

          {/* Key Stages / Highlights */}
          <div>
            <h4 className="text-xs font-bold text-[#350A16] uppercase tracking-wider mb-2.5">
              {t('प्रमुख चरण एवं विधि विधान', 'Key Ritual Stages')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.highlightsHi.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#D6AD55]/30 text-xs text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t(step, service.highlightsEn[idx])}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Notice */}
          <div className="p-3.5 rounded-lg bg-[#350A16]/5 text-xs text-[#350A16] border border-[#D6AD55]/30">
            {t(
              'पूजा की आवश्यक सामग्री की विस्तृत सूची यजमान को पूर्व में WhatsApp अथवा कॉल पर साझा की जाती है। समय एवं मुहूर्त की पुष्टि पंडित जी से व्यक्तिगत संवाद के उपरांत ही मान्य होगी।',
              'A complete checklist of required samagri is shared with the host prior to the ceremony. Timing and muhurat will be personally confirmed by Pandit Anand Acharya.'
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#D6AD55]/40 bg-white flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            {t('बंद करें', 'Close')}
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(service.id);
            }}
            className="px-5 py-2.5 rounded-lg bg-[#E58A16] hover:bg-[#F59E0B] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow cursor-pointer transition-all"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>{t('यह पूजा बुक करें', 'Book this Ceremony')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
