import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLanguage();

  if (!type) return null;

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
        <div className="bg-gradient-to-r from-[#350A16] to-[#24060D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1 text-[#D6AD55] text-xs font-semibold uppercase tracking-wider">
            {type === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            <span>
              {type === 'privacy'
                ? t('गोपनीयता नीति (Privacy Policy)', 'Privacy Policy')
                : t('नियम एवं शर्तें (Terms & Conditions)', 'Terms & Conditions')}
            </span>
          </div>

          <h3 className="text-xl font-bold font-devanagari text-[#FFF9ED]">
            {type === 'privacy'
              ? t('गोपनीयता नीति एवं डेटा सुरक्षा', 'Privacy Policy & Data Ethics')
              : t('सेवा नियम एवं अनुष्ठान शर्तें', 'Service Terms & Guidelines')}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                {t(
                  'पण्डित आनन्द आचार्य (Pandit Anand Acharya) की आधिकारिक वेबसाइट पर यजमानों एवं श्रद्धालुओं की व्यक्तिगत जानकारी की शुचिता एवं गोपनीयता का पूर्ण सम्मान किया जाता है।',
                  'At the official website of Pandit Anand Acharya, we hold the sanctity and privacy of our visitors and devotee families in the highest regard.'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('1. एकत्रित की जाने वाली जानकारी', '1. Information We Collect')}
              </h4>
              <p>
                {t(
                  'हमारे संकल्प/संपर्क फॉर्म के माध्यम से केवल आवश्यक विवरण जैसे नाम, मोबाइल नंबर, WhatsApp नंबर, सेवा की आवश्यकता एवं नगर दर्ज किया जाता है ताकि अनुष्ठान का समन्वय किया जा सके।',
                  'We only collect essential details such as name, mobile number, WhatsApp number, ceremony requirements, and location through our contact/booking form strictly to coordinate ritual services.'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('2. जानकारी का उपयोग एवं सुरक्षा', '2. Usage & Data Security')}
              </h4>
              <p>
                {t(
                  'आपकी जानकारी किसी भी तृतीय पक्ष को बेची, साझा या विज्ञापनों हेतु प्रयोग नहीं की जाती। इसका उपयोग केवल आपके साथ पूजन, समय एवं सामग्री के समन्वय हेतु होता है।',
                  'Your personal information is never sold, shared, or exploited for marketing with third parties. It is solely used for coordinating ceremonies, dates, and samagri requirements with you.'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('3. संपर्क एवं सुधार', '3. Contact & Queries')}
              </h4>
              <p>
                {t(
                  `किसी भी प्रश्न हेतु आप पंडित जी से सीधे फोन अथवा WhatsApp (${SITE_CONFIG.contact.displayPhone}) पर संपर्क कर सकते हैं।`,
                  `For any questions regarding privacy, you may reach Pandit Anand Acharya directly via phone or WhatsApp at ${SITE_CONFIG.contact.displayPhone}.`
                )}
              </p>
            </>
          ) : (
            <>
              <p>
                {t(
                  'कृपया वैदिक सेवाओं एवं धार्मिक अनुष्ठानों के संकल्प से पूर्व निम्नलिखित शर्तों का अवलोकन करें:',
                  'Please review the following guidelines and terms prior to scheduling religious rituals:'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('1. सेवा उपलब्धता एवं व्यक्तिगत पुष्टि (Confirmation)', '1. Service Confirmation & Availability')}
              </h4>
              <p>
                {t(
                  'वेबसाइट पर प्रदर्शित सभी पूजन सेवाएं पूर्व परामर्श, तिथि निर्धारण एवं दोनों पक्षों की व्यक्तिगत सहमति (Subject to confirmation) के आधार पर ही संपन्न की जाती हैं।',
                  'All religious ceremonies listed on this website are subject to prior consultation, date availability, and mutual confirmation between the host and the priest.'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('2. शास्त्रोक्त विधि एवं शुचिता', '2. Scriptural Vidhi & Purity')}
              </h4>
              <p>
                {t(
                  'सभी अनुष्ठान सनातन परंपरा, शुद्ध वैदिक मंत्रोच्चार एवं सात्त्विक मर्यादाओं के अनुरूप संपन्न किए जाते हैं। यजमान परिवार से पूजन के दौरान सात्त्विक आचरण अपेक्षित है।',
                  'All ceremonies are performed in accordance with traditional Sanatan principles, pure Vedic chanting, and sattvic conduct.'
                )}
              </p>
              <h4 className="font-bold text-[#350A16]">
                {t('3. तिथि परिवर्तन एवं संवाद', '3. Rescheduling & Communication')}
              </h4>
              <p>
                {t(
                  'यदि अपरिहार्य कारणों से तिथि में परिवर्तन आवश्यक हो, तो कृपया पूर्व में WhatsApp अथवा फोन कॉल के माध्यम से सूचित करें ताकि दूसरा उपयुक्त शुभ मुहूर्त निर्धारित किया जा सके।',
                  'If rescheduling is required due to unavoidable family circumstances, please inform us reasonably in advance via phone or WhatsApp so an alternate auspicious time can be calculated.'
                )}
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#D6AD55]/40 bg-white flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#350A16] hover:bg-[#24060D] rounded cursor-pointer"
          >
            {t('बंद करें', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
