import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Heart, Mail, User, MessageSquare, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { SITE_BRAND } from '../config/siteData';

export const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Thank you! Your message has been sent to Anand.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(data.error || 'Unable to deliver message right now. Please message Anand directly on Telegram.');
      }
    } catch {
      setErrorMsg('Network error. Feel free to contact Anand directly on Telegram @KINGxANAND.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF8F6] to-[#FFF5F7] dark:from-[#170B12] dark:via-[#1B0E16] dark:to-[#190C14]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-xs uppercase tracking-widest text-rose-700 dark:text-rose-300 font-semibold mb-4"
          >
            <Send className="w-3.5 h-3.5 text-rose-500" />
            <span>Direct Reach to Anand</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2B1720] dark:text-[#FFF0F4]"
          >
            Let's Create a Beautiful Connection 💗
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-script text-xl sm:text-2xl text-rose-600 dark:text-rose-300 mt-2"
          >
            Whether for deep conversations, dreams, collaborations, or a simple hello.
          </motion.p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Direct Telegram Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-lg shadow-rose-950/5">
              <span className="text-4xl">✈️</span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mt-3 mb-2">
                Fastest Way to Reach Me
              </h3>
              <p className="text-xs sm:text-sm text-[#4A2D3A] dark:text-[#D9BED0] leading-relaxed mb-6">
                I am most active and responsive on Telegram. Drop a direct DM anytime — I love meeting kind, genuine souls.
              </p>

              {/* Prominent Telegram Button */}
              <a
                href={SITE_BRAND.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 shadow-lg shadow-rose-500/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open Telegram ({SITE_BRAND.telegramUsername})</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <div className="mt-6 pt-6 border-t border-pink-100 dark:border-pink-900/40 text-xs text-stone-500 dark:text-stone-400 space-y-2">
                <p>✨ Real human responses, no automated bots.</p>
                <p>🔒 End-to-end respect and complete privacy.</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#23121E]/85 backdrop-blur-xl border border-pink-200/70 dark:border-pink-900/50 shadow-xl shadow-rose-950/5 romantic-frame">
              
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2B1720] dark:text-[#FFF0F4] mb-2">
                Send a Thoughtful Note
              </h3>
              <p className="text-xs text-[#5C3847] dark:text-[#E2CAD4] mb-6">
                Submissions are sent directly to Anand’s private Telegram notifications.
              </p>

              {/* Alert Feedback Messages */}
              {successMsg && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-start gap-2.5 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs flex items-start gap-2.5 mb-6">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is on your mind?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C3847] dark:text-[#E2CAD4] mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write anything from the heart..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-pink-50/50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 shadow-md shadow-rose-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{loading ? 'Delivering to Anand...' : 'Send Message 💗'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
