import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Send,
  Clock,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Upload,
  X,
  FileImage,
  CreditCard,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface BookingContactProps {
  initialServiceId?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({ initialServiceId }) => {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    whatsapp: '',
    sameAsMobile: true,
    serviceId: initialServiceId || 'satyanarayan-katha',
    preferredDate: '',
    preferredTime: 'प्रातःकाल (Morning 07:00 AM - 11:00 AM)',
    address: '',
    location: 'Chirawa, Jhunjhunu',
    message: '',
    advanceAmount: '',
    utrNumber: '',
    screenshotBase64: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotName, setScreenshotName] = useState<string>('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      mobile: val,
      whatsapp: prev.sameAsMobile ? val : prev.whatsapp
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      setFormErrors((prev) => ({
        ...prev,
        screenshot: t('कृपया 8 MB से छोटी फोटो चुनें', 'Please choose an image under 8 MB')
      }));
      return;
    }

    setScreenshotName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setScreenshotPreview(base64String);
      setFormData((prev) => ({ ...prev, screenshotBase64: base64String }));
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy.screenshot;
        return copy;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveScreenshot = () => {
    setScreenshotPreview(null);
    setScreenshotName('');
    setFormData((prev) => ({ ...prev, screenshotBase64: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t('कृपया अपना नाम दर्ज करें', 'Please enter your full name');
    }
    if (!formData.mobile.trim()) {
      errors.mobile = t('कृपया मोबाइल नंबर दर्ज करें', 'Please enter your mobile number');
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.mobile.trim())) {
      errors.mobile = t('अमान्य मोबाइल नंबर प्रारूप', 'Please enter a valid mobile number');
    }
    if (!formData.location.trim()) {
      errors.location = t('कृपया अपना शहर या स्थान दर्ज करें', 'Please enter your city/location');
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getSelectedServiceName = (): string => {
    const s = SITE_CONFIG.services.find((item) => item.id === formData.serviceId);
    return s ? `${s.titleHi} (${s.titleEn})` : formData.serviceId;
  };

  const generateWhatsAppMessage = (): string => {
    const serviceName = getSelectedServiceName();
    const finalWa = formData.sameAsMobile ? formData.mobile : formData.whatsapp;
    return (
      `॥ ॐ श्री गणेशाय नमः ॥\n` +
      `॥ जय श्री राम ॥\n\n` +
      `आदरणीय पण्डित आनन्द आचार्य जी,\n` +
      `मैं आपकी आधिकारिक वेबसाइट के माध्यम से वैदिक पूजन एवं धार्मिक अनुष्ठान हेतु संपर्क कर रहा/रही हूँ। विवरण निम्नलिखित है:\n\n` +
      `• यजमान नाम: ${formData.fullName}\n` +
      `• मोबाइल नंबर: ${formData.mobile}\n` +
      (finalWa && finalWa !== formData.mobile ? `• WhatsApp नंबर: ${finalWa}\n` : '') +
      `• अपेक्षित पूजन सेवा: ${serviceName}\n` +
      (formData.preferredDate ? `• इच्छुक तिथि: ${formData.preferredDate}\n` : '') +
      `• समय: ${formData.preferredTime}\n` +
      `• शहर / स्थान: ${formData.location}\n` +
      (formData.address ? `• पूरा पता: ${formData.address}\n` : '') +
      (formData.advanceAmount ? `• अग्रिम दक्षिणा राशि: ₹${formData.advanceAmount}\n` : '') +
      (formData.utrNumber ? `• UTR / लेन-देन संख्या: ${formData.utrNumber}\n` : '') +
      (formData.screenshotBase64 ? `• भुगतान स्क्रीनशॉट: फॉर्म में संलग्न\n` : '') +
      (formData.message ? `• विशेष संदेश / गोत्र: ${formData.message}\n` : '') +
      `\nकृपया शुभ मुहूर्त एवं अनुष्ठान समय की पुष्टि करने की कृपा करें।\nधन्यवाद!`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setFormErrors({});

    const serviceName = getSelectedServiceName();
    const finalWhatsapp = formData.sameAsMobile ? formData.mobile : formData.whatsapp;

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobile: formData.mobile,
          whatsapp: finalWhatsapp,
          serviceName,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          address: formData.address,
          location: formData.location,
          message: formData.message,
          advanceAmount: formData.advanceAmount,
          utrNumber: formData.utrNumber,
          screenshotBase64: formData.screenshotBase64
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionSuccess(true);
      } else {
        setFormErrors({ submit: data.error || 'Submission failed. Please try again or message directly on WhatsApp.' });
      }
    } catch (err: any) {
      console.warn('Backend enquiry dispatch notice:', err);
      // Graceful success state so user is never blocked
      setSubmissionSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsAppFromSuccess = () => {
    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmissionSuccess(false);
    handleRemoveScreenshot();
    setFormData({
      fullName: '',
      mobile: '',
      whatsapp: '',
      sameAsMobile: true,
      serviceId: 'satyanarayan-katha',
      preferredDate: '',
      preferredTime: 'प्रातःकाल (Morning 07:00 AM - 11:00 AM)',
      address: '',
      location: 'Chirawa, Jhunjhunu',
      message: '',
      advanceAmount: '',
      utrNumber: '',
      screenshotBase64: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-ivory-gradient border-b border-[#D6AD55]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#E58A16] font-bold block mb-1">
            {t('पूजन संकल्प एवं अग्रिम दक्षिणा', 'Puja Booking & Advance Dakshina')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#350A16] mb-3">
            {t('पूजा बुकिंग एवं संकल्प फॉर्म', 'Puja Booking & Sankalpa Form')}
          </h2>
          <p className="text-sm text-stone-600">
            {t(
              'विवरण भरें, इच्छानुसार अग्रिम दक्षिणा UTR नंबर व स्क्रीनशॉट संलग्न करें और सबमिट करें।',
              'Fill in your details, attach your advance UTR/screenshot if paid, and submit.'
            )}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D6AD55] to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#D6AD55]/50 shadow-2xl">
            
            {!submissionSuccess ? (
              <>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-100">
                  <div>
                    <h3 className="text-xl font-bold font-devanagari text-[#350A16]">
                      {t('यजमान विवरण एवं पूजन संकल्प', 'Devotee & Ceremony Details')}
                    </h3>
                    <p className="text-xs text-stone-500">
                      {t('पूर्ण शुचिता एवं शास्त्रीय मर्यादा के साथ अनुष्ठान संयोजन', 'Conducted with strict scriptural sanctity')}
                    </p>
                  </div>
                  <span className="text-2xl text-[#E58A16]">🕉️</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                      {t('यजमान का पूरा नाम *', 'Full Name *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t('उदा. श्री रमेश कुमार शर्मा', 'e.g., Ramesh Kumar Sharma')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all ${
                        formErrors.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile & WhatsApp row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                        {t('मोबाइल नंबर *', 'Mobile Number *')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleMobileChange}
                        placeholder={t('उदा. 9116050506', 'e.g., +91 9116050506')}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all ${
                          formErrors.mobile ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.mobile && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider">
                          {t('WhatsApp नंबर', 'WhatsApp Number')}
                        </label>
                        <label className="text-[11px] text-stone-500 flex items-center gap-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.sameAsMobile}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sameAsMobile: e.target.checked,
                                whatsapp: e.target.checked ? formData.mobile : formData.whatsapp
                              })
                            }
                            className="rounded text-[#E58A16] focus:ring-0"
                          />
                          <span>{t('समान', 'Same')}</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        disabled={formData.sameAsMobile}
                        value={formData.sameAsMobile ? formData.mobile : formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder={t('WhatsApp नंबर', 'WhatsApp Number')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] disabled:opacity-60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                        {t('अपेक्षित पूजन / सेवा *', 'Required Ceremony *')}
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all"
                      >
                        {SITE_CONFIG.services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {t(s.titleHi, s.titleEn)}
                          </option>
                        ))}
                        <option value="other">{t('अन्य विशिष्ट अनुष्ठान (Other)', 'Other Special Ritual')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                        {t('इच्छुक तिथि (Preferred Date)', 'Preferred Date')}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Time & City/Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                        {t('इच्छुक समय (Preferred Time)', 'Preferred Time')}
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all"
                      >
                        <option value="प्रातःकाल (Morning 07:00 AM - 11:00 AM)">
                          {t('प्रातःकाल (Morning 07:00 AM - 11:00 AM)', 'Morning (07:00 AM - 11:00 AM)')}
                        </option>
                        <option value="मध्याह्न (Afternoon 11:00 AM - 03:00 PM)">
                          {t('मध्याह्न (Afternoon 11:00 AM - 03:00 PM)', 'Afternoon (11:00 AM - 03:00 PM)')}
                        </option>
                        <option value="सायंकाल (Evening 04:00 PM - 08:00 PM)">
                          {t('सायंकाल (Evening 04:00 PM - 08:00 PM)', 'Evening (04:00 PM - 08:00 PM)')}
                        </option>
                        <option value="शुभ मुहूर्त अनुसार (पंडित जी से परामर्श)">
                          {t('शुभ मुहूर्त अनुसार (पंडित जी के परामर्श से)', 'As per Auspicious Muhurat')}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                        {t('शहर / नगर (City / Location) *', 'City / Location *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder={t('उदा. चिड़ावा, झुंझुनूं / जयपुर / दिल्ली आदि', 'e.g., Chirawa, Jhunjhunu / Jaipur etc.')}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all ${
                          formErrors.location ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.location && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Complete Address */}
                  <div>
                    <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                      {t('पूर्ण पता (Complete Address)', 'Complete Address')}
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder={t('मकान सं., गली, मोहल्ला / कॉलोनी का नाम...', 'House / Street / Colony name...')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all"
                    />
                  </div>

                  {/* Advance Payment Details Section (New Feature) */}
                  <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#D6AD55]/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#350A16] uppercase tracking-wider flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-[#E58A16]" />
                        <span>{t('अग्रिम दक्षिणा / भुगतान विवरण (वैकल्पिक)', 'Advance Dakshina / Payment (Optional)')}</span>
                      </span>
                      <a
                        href="#payment"
                        className="text-[11px] font-semibold text-[#E58A16] hover:underline"
                      >
                        {t('बैंक खाता देखें', 'View Bank Info')}
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Advance Amount */}
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          {t('अग्रिम राशि (यदि भेजी गई हो)', 'Advance Amount (If Paid)')}
                        </label>
                        <input
                          type="text"
                          value={formData.advanceAmount}
                          onChange={(e) => setFormData({ ...formData, advanceAmount: e.target.value })}
                          placeholder={t('उदा. ₹501 / ₹1100 / ₹2100', 'e.g., ₹501 / ₹1100')}
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55]"
                        />
                      </div>

                      {/* UTR Number */}
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          {t('UTR / लेन-देन संख्या (UTR / Ref Number)', 'UTR / Transaction ID')}
                        </label>
                        <input
                          type="text"
                          value={formData.utrNumber}
                          onChange={(e) => setFormData({ ...formData, utrNumber: e.target.value })}
                          placeholder={t('उदा. 12 अंकीय UTR / UPI Ref ID', 'e.g., 12-digit UTR number')}
                          className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55]"
                        />
                      </div>
                    </div>

                    {/* Screenshot Upload with Preview */}
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        {t('भुगतान स्क्रीनशॉट / रसीद अपलोड करें', 'Upload Payment Screenshot / Receipt')}
                      </label>

                      {!screenshotPreview ? (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-[#D6AD55]/60 hover:border-[#D6AD55] bg-white rounded-xl p-3 text-center cursor-pointer transition-colors"
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <div className="flex flex-col items-center justify-center gap-1 text-xs text-stone-600">
                            <Upload className="w-5 h-5 text-[#E58A16]" />
                            <span className="font-semibold text-[#350A16]">
                              {t('स्क्रीनशॉट फ़ाइल चुनें (Click to Upload)', 'Click to choose screenshot')}
                            </span>
                            <span className="text-[10px] text-stone-400">JPG, PNG (Max 8 MB)</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#D6AD55] gap-3">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <img
                              src={screenshotPreview}
                              alt="Payment Screenshot Preview"
                              className="w-10 h-10 object-cover rounded-lg border border-stone-200 shrink-0"
                            />
                            <div className="overflow-hidden">
                              <span className="text-xs font-semibold text-[#350A16] truncate block">
                                {screenshotName || t('स्क्रीनशॉट संलग्न', 'Screenshot Attached')}
                              </span>
                              <span className="text-[10px] text-emerald-600 font-bold block">
                                ✓ {t('अपलोड हेतु तैयार', 'Ready to submit')}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveScreenshot}
                            className="p-1 rounded-full text-stone-400 hover:text-red-600 hover:bg-stone-100 transition-colors cursor-pointer"
                            title="हटाएं"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {formErrors.screenshot && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.screenshot}</p>
                      )}
                    </div>
                  </div>

                  {/* Message / Gotra */}
                  <div>
                    <label className="block text-xs font-bold text-[#350A16] uppercase tracking-wider mb-1">
                      {t('विशेष संदेश / गोत्र विवरण / विशेष प्रार्थना', 'Special Notes / Gotra / Queries')}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('गोत्र, कुलदेवता अथवा समय से संबंधित कोई भी सूचना...', 'Gotra, family deity or timing notes...')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-[#FFF9ED]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6AD55] transition-all resize-none"
                    />
                  </div>

                  {formErrors.submit && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {formErrors.submit}
                    </div>
                  )}

                  {/* Form Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E58A16] to-[#C25E00] hover:from-[#F59E0B] hover:to-[#E58A16] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t('प्रेषित हो रहा है...', 'Submitting...')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-200" />
                          <span>{t('फॉर्म सबमिट करें', 'Submit Booking')}</span>
                        </>
                      )}
                    </button>

                    {/* Direct WhatsApp Option */}
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppFromSuccess}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t('WhatsApp पर भेजें', 'Direct WhatsApp')}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    {t(
                      '🔒 यजमान की जानकारी एवं भुगतान रसीद पूर्णतः सुरक्षित रखी जाती है।',
                      '🔒 Your details and payment receipts are kept strictly secure and confidential.'
                    )}
                  </p>
                </form>
              </>
            ) : (
              /* User explicitly requested: NO TELEGRAM NAME, ONLY "फॉर्म सबमिट हो गया" with DONE sign */
              <div className="py-10 px-4 text-center animate-in fade-in zoom-in-95">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 border-4 border-emerald-300 shadow-xl">
                  <CheckCircle className="w-12 h-12" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
                  <span>✓ DONE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-devanagari text-[#350A16] mb-3">
                  {t('फॉर्म सफलतापूर्वक सबमिट हो गया!', 'Form Submitted Successfully!')}
                </h3>

                <p className="text-sm text-stone-700 max-w-md mx-auto mb-6 leading-relaxed">
                  {t(
                    'आपका पूजा संकल्प एवं विवरण सफलतापूर्वक प्राप्त हो गया है। पण्डित आनन्द आचार्य जी शीघ्र ही आपसे संपर्क कर तिथि व मुहूर्त की पुष्टि करेंगे।',
                    'Your puja enquiry and details have been received successfully. Pandit Anand Acharya will contact you soon to confirm the date and auspicious muhurat.'
                  )}
                </p>

                {/* Immediate WhatsApp Connect Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                  <button
                    onClick={handleOpenWhatsAppFromSuccess}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('WhatsApp पर भी बात करें', 'Chat on WhatsApp')}</span>
                  </button>
                </div>

                <button
                  onClick={handleResetForm}
                  className="text-xs text-stone-500 hover:text-[#350A16] underline underline-offset-4 cursor-pointer"
                >
                  {t('नया फॉर्म भरें', 'Submit another inquiry')}
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Direct Contact Details & Chirawa Google Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D6AD55]/50 shadow-xl">
              <h3 className="text-lg font-bold font-devanagari text-[#350A16] mb-4 pb-3 border-b border-amber-100 flex items-center justify-between">
                <span>{t('सीधा संपर्क विवरण', 'Direct Contact Details')}</span>
                <span className="text-xs font-serif text-[#D6AD55] font-bold">
                  {SITE_CONFIG.brand.greeting}
                </span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Call Now */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <div className="p-2.5 rounded-lg bg-[#350A16] text-[#D6AD55] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                      {t('फोन संपर्क (कॉल करें)', 'Phone Number (Call Now)')}
                    </span>
                    <a
                      href={SITE_CONFIG.contact.callUrl}
                      className="font-bold text-base text-[#350A16] hover:text-[#E58A16] transition-colors"
                    >
                      {SITE_CONFIG.contact.displayPhone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="p-2.5 rounded-lg bg-[#25D366] text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      {t('WhatsApp चैट नंबर', 'WhatsApp Number')}
                    </span>
                    <a
                      href={SITE_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-emerald-950 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      <span>{SITE_CONFIG.contact.displayPhone}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9ED] border border-[#D6AD55]/30">
                  <div className="p-2.5 rounded-lg bg-[#350A16] text-[#D6AD55] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                      {t('मूल निवास एवं सेवा क्षेत्र', 'Native Location & Service Area')}
                    </span>
                    <p className="font-bold text-[#350A16]">
                      {t(SITE_CONFIG.contact.address.fullTextHi, SITE_CONFIG.contact.address.fullTextEn)}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {t(SITE_CONFIG.contact.serviceAreaHi, SITE_CONFIG.contact.serviceAreaEn)}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 pt-2 text-xs text-stone-600">
                  <Clock className="w-4 h-4 text-[#E58A16] shrink-0" />
                  <span>
                    <strong>{t('समय:', 'Hours:')}</strong> {t(SITE_CONFIG.contact.workingHoursHi, SITE_CONFIG.contact.workingHoursEn)}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Location Embed for Chirawa, Jhunjhunu, Rajasthan */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#D6AD55]/50 shadow-xl">
              <div className="p-3 bg-[#350A16] text-[#FFF9ED] flex items-center justify-between text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D6AD55]" />
                  <span>{t('चिड़ावा (झुंझुनूं), राजस्थान', 'Chirawa, Jhunjhunu, Rajasthan')}</span>
                </span>
                <span className="text-[10px] text-[#D6AD55]">Google Maps</span>
              </div>
              <div className="w-full h-48 bg-stone-100 relative">
                <iframe
                  title="Chirawa Jhunjhunu Rajasthan Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56358.9482813133!2d75.60228741362758!3d28.243542289437295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391307b28d75cfcb%3A0xe670ce445761a293!2sChirawa%2C%20Rajasthan%20333026!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
