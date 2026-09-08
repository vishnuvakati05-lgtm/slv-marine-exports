import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiChevronDown, FiCheck } from 'react-icons/fi';
import { useLanguage, LANGUAGES, Language } from '../../context/LanguageContext';

interface LanguageSelectorProps {
  isTransparent?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isTransparent }) => {
  const { language, setLanguage, currentLangObj } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const buttonClass = isTransparent
    ? 'border-white/15 bg-white/10 text-white hover:bg-white/20'
    : 'border-slate-200 bg-white/80 text-slate-700 hover:border-[#0077B6]/30 hover:text-[#0077B6] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-[#48CAE4]';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition-all shadow-sm ${buttonClass}`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <FiGlobe className="w-3.5 h-3.5 text-[#00B4D8]" />
        <span className="hidden sm:inline-block">{currentLangObj.flag}</span>
        <span>{currentLangObj.nativeName}</span>
        <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-44 bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 py-2 z-[90] overflow-hidden"
          >
            <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-white/5 mb-1">
              Select Language
            </div>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold transition-colors ${
                  language === lang.code
                    ? 'bg-[#0077B6]/10 text-[#0077B6] dark:bg-[#0077B6]/20 dark:text-[#48CAE4]'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <div>
                    <p className="leading-none">{lang.nativeName}</p>
                    <p className="text-[10px] text-slate-400 font-normal mt-0.5">{lang.name}</p>
                  </div>
                </div>
                {language === lang.code && <FiCheck className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#48CAE4]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
