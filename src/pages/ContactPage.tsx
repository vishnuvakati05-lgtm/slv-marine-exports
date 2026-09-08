import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaCheckCircle, FaUser, FaBuilding, FaGlobe, FaBox, FaComment, FaHeadset } from 'react-icons/fa';
import PageHero from '../components/layout/PageHero';
import { countries } from '../data/countries';
import { useLanguage } from '../context/LanguageContext';

interface InputWrapperProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ icon: Icon, children }) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0077B6] transition-colors duration-300">
      <Icon className="w-[18px] h-[18px]" />
    </div>
    {children}
  </div>
);

const salesDesks = [
  { region: 'Andhra Pradesh & South India Desk', manager: 'V. Sampath Kumar', phone: '+91 89777 70455', rawPhone: '918977770455' },
  { region: 'North & West India Desk', manager: 'Sohail', phone: '+91 93901 97086', rawPhone: '919390197086' },
  { region: 'Nepal Export Desk', manager: 'Export Desk Team', phone: '+91 89777 70455', rawPhone: '918977770455' },
];

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', inquiryType: 'company', company: '', country: '', email: '', phone: '', productInterest: '', desk: 'Andhra Pradesh & South India Desk', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedDeskObj = salesDesks.find(d => d.region === formData.desk) || salesDesks[0];

    const text = `*New Inquiry from SLV Marine Website:*
*Name:* ${formData.name}
*Type:* ${formData.inquiryType}
${formData.inquiryType === 'company' ? `*Company:* ${formData.company}\n` : ''}*Country:* ${formData.country}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Target Desk:* ${formData.desk}
*Product Interest:* ${formData.productInterest || 'General Inquiry'}

*Message:*
${formData.message}`;

    if (sendMethod === 'whatsapp') {
      const whatsappLink = `https://wa.me/${selectedDeskObj.rawPhone}?text=${encodeURIComponent(text)}`;
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    } else {
      const mailtoLink = `mailto:slvmarineexports@gmail.com?subject=New Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(text)}`;
      window.location.href = mailtoLink;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', inquiryType: 'company', company: '', country: '', email: '', phone: '', productInterest: '', desk: 'Andhra Pradesh & South India Desk', message: '' });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1200);
  };

  const inputClass = "w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl focus:ring-4 focus:ring-[#0077B6]/20 focus:border-[#0077B6] outline-none transition-all duration-300 text-[15px] shadow-sm";
  const labelClass = "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1";

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      lines: ['SLV Marine Exports', 'HX27+865, Kodavalur, Gandavaram,', 'Andhra Pradesh 524366, India'],
      color: '#0077B6',
    },
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      lines: ['+91 8977770455', '+91 93901 97086'],
      color: '#0F766E',
      href: 'tel:+918977770455',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      lines: ['slvmarineexports@gmail.com'],
      color: '#0284C7',
      href: 'mailto:slvmarineexports@gmail.com',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      lines: ['Mon – Sat: 9:00 AM – 6:00 PM IST', 'Sunday: Closed'],
      color: '#14B8A6',
    },
  ];

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>{t('contact')} | SLV Marine Exports</title>
        <meta name="description" content="Contact SLV Marine Exports for seafood export inquiries, quotes, and partnerships. Based in Andhra Pradesh, India." />
      </Helmet>

      <PageHero
        badge={t('contact')}
        title="Contact"
        highlight="SLV Marine"
        subtitle="We respond to all enquiries promptly. Our team is ready to discuss your seafood requirements across India and Nepal."
      />

      {/* Regional Helpline Desks */}
      <section className="pt-12 px-5 sm:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#00B4D8] uppercase mb-2">Dedicated Assistance</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Regional Helpline Desks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salesDesks.map((desk) => (
            <div
              key={desk.region}
              className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-slate-100 dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 text-[#0077B6] dark:text-[#48CAE4] flex items-center justify-center mb-4">
                  <FaHeadset className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{desk.region}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{desk.manager}</p>
              </div>
              <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                <a
                  href={`tel:${desk.rawPhone}`}
                  className="flex-1 text-center py-2 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Call {desk.phone}
                </a>
                <a
                  href={`https://wa.me/${desk.rawPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#1ebe5c] transition-colors flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Form — wider column */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white dark:bg-[#1E293B] rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-white/5 p-8 sm:p-12 relative overflow-hidden">
              {/* Glassmorphism ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6]/5 dark:bg-[#0077B6]/10 blur-[80px] rounded-full pointer-events-none" />

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 font-display">Send an Inquiry</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-[15px]">Fill out the form below and select your preferred contact channel.</p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-20 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                      className="w-24 h-24 rounded-[2rem] bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-2"
                    >
                      <FaCheckCircle className="text-5xl text-emerald-500" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Inquiry Received!</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md text-[15px] leading-relaxed">
                      Thank you for choosing SLV Marine Exports. Your message has been prepared via {sendMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}. Our team will respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input type="radio" name="inquiryType" value="company" checked={formData.inquiryType === 'company'} onChange={handleChange} className="text-[#0077B6] focus:ring-[#0077B6] w-4 h-4" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Company</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input type="radio" name="inquiryType" value="personal" checked={formData.inquiryType === 'personal'} onChange={handleChange} className="text-[#0077B6] focus:ring-[#0077B6] w-4 h-4" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Personal</span>
                        </label>
                      </div>

                      <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl text-xs font-bold">
                        <button
                          type="button"
                          onClick={() => setSendMethod('whatsapp')}
                          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${sendMethod === 'whatsapp' ? 'bg-[#25D366] text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" /> Send via WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={() => setSendMethod('email')}
                          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${sendMethod === 'email' ? 'bg-[#0077B6] text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                          <FaEnvelope className="w-3.5 h-3.5" /> Send via Email
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className={formData.inquiryType === 'personal' ? 'sm:col-span-2' : ''}>
                        <label className={labelClass}>Full Name *</label>
                        <InputWrapper icon={FaUser}>
                          <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                        </InputWrapper>
                      </div>
                      {formData.inquiryType === 'company' && (
                        <div>
                          <label className={labelClass}>Company Name *</label>
                          <InputWrapper icon={FaBuilding}>
                            <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Global Trade LLC" className={inputClass} />
                          </InputWrapper>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <InputWrapper icon={FaEnvelope}>
                          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
                        </InputWrapper>
                      </div>
                      <div>
                        <label className={labelClass}>Phone / WhatsApp *</label>
                        <InputWrapper icon={FaPhoneAlt}>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                        </InputWrapper>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Country *</label>
                        <InputWrapper icon={FaGlobe}>
                          <select required name="country" value={formData.country} onChange={handleChange} className={`${inputClass} appearance-none`}>
                            <option value="">Select Country</option>
                            {countries.map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </InputWrapper>
                      </div>
                      <div>
                        <label className={labelClass}>Target Regional Desk *</label>
                        <InputWrapper icon={FaHeadset}>
                          <select name="desk" value={formData.desk} onChange={handleChange} className={`${inputClass} appearance-none`}>
                            {salesDesks.map(d => (
                              <option key={d.region} value={d.region}>{d.region}</option>
                            ))}
                          </select>
                        </InputWrapper>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Product Interest</label>
                      <InputWrapper icon={FaBox}>
                        <select name="productInterest" value={formData.productInterest} onChange={handleChange} className={`${inputClass} appearance-none`}>
                          <option value="">Select Product</option>
                          <option value="Shrimp / Prawns">Shrimp / Prawns</option>
                          <option value="Fish (Fresh / Frozen)">Fish (Tuna, Seer Fish, Pomfret, etc.)</option>
                          <option value="Squid / Cuttlefish / Octopus">Squid / Cuttlefish / Octopus</option>
                          <option value="Crab / Lobster">Crab / Lobster</option>
                          <option value="Value Added Seafood">Value Added Seafood</option>
                          <option value="Breaded Snacks">Breaded Snacks</option>
                          <option value="Bulk Order">Mixed / Bulk Order</option>
                        </select>
                      </InputWrapper>
                    </div>

                    <div>
                      <label className={labelClass}>Message *</label>
                      <div className="relative group">
                        <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-[#0077B6] transition-colors duration-300">
                          <FaComment className="w-[18px] h-[18px]" />
                        </div>
                        <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirements — quantity, frequency, preferred delivery location..." className={`${inputClass} pl-12 resize-none`} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full text-white font-extrabold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-[16px] tracking-wide mt-4 shadow-lg ${sendMethod === 'whatsapp'
                        ? 'bg-[#25D366] hover:bg-[#1ebe5c] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.4)]'
                        : 'bg-[#0077B6] hover:bg-[#005988] shadow-[0_12px_30px_-10px_rgba(0,119,182,0.4)]'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Processing Inquiry...
                        </>
                      ) : (
                        sendMethod === 'whatsapp' ? 'Send via WhatsApp →' : 'Send via Email →'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info — narrower column */}
          <motion.div
            className="lg:col-span-4 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactItems.map(({ icon: Icon, title, lines, color, href }) => (
              <div
                key={title}
                className="bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-none p-6 sm:p-8 flex gap-5 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color + '15' }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1.5">{title}</p>
                  {href ? (
                    lines.map((line, i) => (
                      <a key={i} href={href} className="block text-[15px] font-bold text-slate-700 dark:text-slate-200 hover:text-[#0077B6] transition-colors break-all leading-relaxed">
                        {line}
                      </a>
                    ))
                  ) : (
                    lines.map((line, i) => (
                      <p key={i} className="text-[15px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed">{line}</p>
                    ))
                  )}
                </div>
              </div>
            ))}

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/918977770455"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-extrabold rounded-3xl transition-all hover:shadow-[0_12px_30px_-10px_rgba(37,211,102,0.4)] hover:-translate-y-1 text-[15px] tracking-wide"
            >
              <FaWhatsapp className="w-6 h-6" />
              Chat Directly on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-5 sm:mx-8 lg:mx-auto max-w-[1400px] mb-20 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl relative h-[400px]">
        <div className="absolute inset-0 bg-slate-100 dark:bg-[#1E293B] flex flex-col items-center justify-center gap-4"
          style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0,119,182,0.08) 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <div className="w-20 h-20 bg-white dark:bg-[#023047] rounded-full shadow-2xl flex items-center justify-center border border-slate-100 dark:border-white/10">
              <FaMapMarkerAlt className="text-4xl text-[#0077B6]" />
            </div>
          </motion.div>
          <div className="bg-white dark:bg-[#023047] border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl shadow-xl text-[15px] font-bold text-slate-800 dark:text-white">
            SLV Marine Exports — Andhra Pradesh, India
          </div>
          <a
            href="https://maps.google.com/?q=SLV+Marine+Exports+Kodavalur+Andhra+Pradesh"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#0077B6] hover:text-[#005988] dark:text-[#48CAE4] dark:hover:text-white transition-colors flex items-center gap-2 mt-2"
          >
            Open in Google Maps <FaGlobe />
          </a>
        </div>
      </section>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default ContactPage;
