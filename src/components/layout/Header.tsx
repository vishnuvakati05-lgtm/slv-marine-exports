import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiGlobe,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi';
import { FaQrcode } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const primaryLinks = [
    { label: t('home'), to: '/' },
    { label: t('about'), to: '/about' },
    { label: t('products'), to: '/products' },
    { label: t('services'), to: '/services' },
    { label: t('gallery'), to: '/gallery' },
    { label: t('quality'), to: '/quality' },
    { label: t('markets'), to: '/export-markets' },
  ];

  const mobileLinks = [
    { label: t('home'), to: '/' },
    { label: t('about'), to: '/about' },
    { label: t('products'), to: '/products' },
    { label: t('services'), to: '/services' },
    { label: t('quality'), to: '/quality' },
    { label: t('markets'), to: '/export-markets' },
    { label: t('certifications'), to: '/certifications' },
    { label: t('gallery'), to: '/gallery' },
    { label: t('contact'), to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navTextClass = isTransparent
    ? 'text-white/80 hover:text-white'
    : 'text-slate-600 hover:text-[#0077B6] dark:text-slate-300 dark:hover:text-[#48CAE4]';

  const iconButtonClass = isTransparent
    ? 'border-white/15 bg-white/10 text-white hover:bg-white/20'
    : 'border-slate-200 bg-white/80 text-slate-600 hover:border-[#0077B6]/30 hover:text-[#0077B6] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-[#48CAE4]';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 pt-[env(safe-area-inset-top,0px)] ${
          isTransparent
            ? 'border-white/10 bg-gradient-to-b from-[#0F172A]/65 to-transparent py-4'
            : 'border-slate-200 bg-white py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#0F172A]'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 lg:px-8">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="SLV Marine Exports home">
            <span className="grid size-9 sm:size-10 place-items-center rounded-xl bg-gradient-to-br from-[#0C75B7] to-[#00B4D8] text-xs sm:text-sm font-extrabold tracking-[-0.08em] text-white shadow-[0_10px_24px_rgba(0,91,150,0.35)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              SLV
            </span>
            <span className="leading-none">
              <span className={`block text-[0.65rem] sm:text-[0.7rem] font-extrabold tracking-[0.22em] ${isTransparent ? 'text-white' : 'text-[#023047] dark:text-white'}`}>SLV</span>
              <span className={`mt-1 block text-[0.55rem] sm:text-[0.6rem] font-semibold tracking-[0.17em] ${isTransparent ? 'text-white/55' : 'text-slate-500 dark:text-slate-400'}`}>MARINE EXPORTS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${isActive ? (isTransparent ? 'bg-white/10 text-white' : 'bg-[#0077B6]/8 text-[#0077B6] dark:bg-white/10 dark:text-[#48CAE4]') : navTextClass}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector isTransparent={isTransparent} />

            <button type="button" onClick={toggleTheme} className={`grid size-9 sm:size-10 place-items-center rounded-full border transition-colors ${iconButtonClass}`} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
              {theme === 'dark' ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
            </button>

            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-slv-qr-modal'))} className={`grid size-9 sm:size-10 place-items-center rounded-full border transition-colors ${iconButtonClass}`} aria-label="Share or scan QR Code" title="Share or Scan App QR Code">
              <FaQrcode className="size-4" />
            </button>

            <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-[#48CAE4] px-4 py-2.5 text-sm font-bold text-[#023047] shadow-[0_10px_24px_rgba(255,200,87,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#3ab8d2] xl:inline-flex">
              {t('startConversation')} <FiArrowUpRight className="size-4" />
            </Link>

            <button type="button" className={`grid size-9 sm:size-10 place-items-center rounded-full border transition-colors xl:hidden ${iconButtonClass}`} onClick={() => setIsMenuOpen(true)} aria-label="Open menu" aria-expanded={isMenuOpen}>
              <FiMenu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button type="button" aria-label="Close menu" className="fixed inset-0 z-[60] bg-[#023047]/65 backdrop-blur-sm xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} />
            <motion.aside
              className="fixed bottom-0 right-0 top-0 z-[61] flex w-full max-w-sm flex-col bg-[#F8FAFC] shadow-[-20px_0_60px_rgba(0,0,0,0.25)] dark:bg-[#0F172A] xl:hidden pt-[env(safe-area-inset-top,0px)]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#0C75B7] to-[#00B4D8] text-xs font-extrabold tracking-[-0.08em] text-white">SLV</span>
                  <span className="text-xs font-extrabold tracking-[0.18em] text-[#023047] dark:text-white">MARINE EXPORTS</span>
                </div>
                <button type="button" onClick={() => setIsMenuOpen(false)} className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-white" aria-label="Close menu"><FiX className="size-5" /></button>
              </div>

              <div className="px-6 py-3 border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Language / ภาษ:</span>
                <LanguageSelector />
              </div>

              <div className="px-6 py-3 border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">App QR Code:</span>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-slv-qr-modal'));
                  }}
                  className="flex items-center gap-1.5 rounded-lg bg-[#0077B6]/10 px-3 py-1.5 text-xs font-bold text-[#0077B6] dark:bg-[#48CAE4]/20 dark:text-[#48CAE4]"
                >
                  <FaQrcode size={14} /> Scan & Share
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile navigation links">
                <p className="mb-3 px-3 text-[0.65rem] font-bold tracking-[0.2em] text-[#00B4D8]">EXPLORE SLV</p>
                {mobileLinks.map((link, index) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                    <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => `mb-1 block rounded-xl px-3 py-3 text-[0.95rem] font-semibold transition-colors ${isActive ? 'bg-[#0077B6] text-white' : 'text-slate-700 hover:bg-[#0077B6]/8 hover:text-[#0077B6] dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-[#48CAE4]'}`}>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="border-t border-slate-200 p-5 dark:border-white/10">
                <Link to="/contact" className="flex items-center justify-between rounded-xl bg-[#48CAE4] px-4 py-4 text-sm font-bold text-[#023047]" onClick={() => setIsMenuOpen(false)}>
                  {t('startConversation')} <FiArrowUpRight className="size-4" />
                </Link>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"><FiGlobe className="size-4 text-[#00B4D8]" /> Serving partners across India & Nepal</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
