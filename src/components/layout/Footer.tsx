import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaPhoneAlt
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend } from 'react-icons/fi';

const quickLinks = [
  { label: 'About Us',        path: '/about' },

  { label: 'Gallery',         path: '/gallery' },
  { label: 'Services',        path: '/services' },
  { label: 'Quality',         path: '/quality' },
  { label: 'Certifications',  path: '/certifications' },
  { label: 'Export Markets',  path: '/export-markets' },
];



const socials = [
  { Icon: FaPhoneAlt, href: 'tel:+918977770455', label: 'Call Us' },
  { Icon: FaWhatsapp, href: 'https://wa.me/918977770455', label: 'WhatsApp' },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); setTimeout(() => setSubscribed(false), 4000); }
  };

  return (
    <footer className="relative bg-[#050f1e] text-slate-400 overflow-hidden">

      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0077B6] to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#0077B6]/10 blur-[80px]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main grid */}
        <div className="pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-black text-sm">SLV</span>
              </div>
              <div>
                <div className="text-white font-black text-lg leading-tight">SLV Marine</div>
                <div className="text-xs text-slate-500 leading-tight">Exports Pvt. Ltd.</div>
              </div>
            </Link>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-xs sm:max-w-none">
              Premium Indian seafood delivered across India and Nepal. Certified, fresh, and export-ready.
            </p>

            {/* Contact mini-list */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-[#48CAE4] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 leading-snug">SLV MARINE EXPORTS, HX27+865, Kodavalur, Gandavaram, Andhra Pradesh 524366</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-[#48CAE4] flex-shrink-0" />
                <a href="tel:+918977770455" className="hover:text-[#48CAE4] transition-colors">+91 8977770455</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-[#48CAE4] flex-shrink-0" />
                <a href="tel:+919390197086" className="hover:text-[#48CAE4] transition-colors">+91 93901 97086</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-[#48CAE4] flex-shrink-0" />
                <a href="mailto:slvmarineexports@gmail.com" className="hover:text-[#48CAE4] transition-colors break-all">slvmarineexports@gmail.com</a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077B6] hover:border-[#0077B6] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#48CAE4] transition-colors group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>



          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Get trade updates, new product alerts, and market insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-600 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#0077B6] focus:bg-white/8 transition-all"
              />
              {subscribed ? (
                <div className="flex items-center gap-2 text-[#00B4D8] text-sm font-medium py-2">
                  <span>✓</span> Subscribed! Thank you.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#005988] text-white text-sm font-semibold py-3 rounded-xl transition-all hover:shadow-[0_4px_20px_rgba(0,91,150,0.4)]"
                >
                  <FiSend className="w-4 h-4" />
                  Subscribe
                </button>
              )}
            </form>

            {/* Certifications mini-badges */}
            <div className="mt-6 pt-5 border-t border-white/6">
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">Certified By</p>
              <div className="flex flex-wrap gap-2">
                {['HACCP', 'ISO', 'FSSAI', 'MPEDA', 'FDA', 'BRC'].map((cert) => (
                  <span key={cert} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] font-bold text-slate-400 tracking-wide">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} SLV Marine Exports Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 text-xs text-slate-600">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-slv-qr-modal'))}
              className="hover:text-[#48CAE4] transition-colors cursor-pointer"
            >
              App QR Code
            </button>
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/certifications" className="hover:text-slate-400 transition-colors">Certifications</Link>
          </div>
        </div>

        {/* Mobile bottom nav spacer — prevents footer being hidden behind fixed nav */}
        <div className="h-16 md:hidden" aria-hidden="true" />
      </div>
    </footer>
  );
};
