import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiCheck, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import heroMarineExport from '../../assets/hero-building.jpg';
import { useLanguage } from '../../context/LanguageContext';

const proofPoints = ['Export-ready formats', 'Cold-chain focused', 'Quality-led sourcing'];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      className="relative isolate flex min-h-screen overflow-hidden bg-[#023047]"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <motion.img
        src={heroMarineExport}
        alt="SLV Marine Exports facility"
        className="absolute inset-0 -z-30 w-full h-full object-cover object-center"
        initial={shouldReduceMotion ? false : { scale: 1.06 }}
        animate={shouldReduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent sm:to-[#0F172A]/40" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#0F172A]/95 via-transparent to-[#0F172A]/30" />

      {/* Ambient glow */}
      <div className="absolute -left-40 top-1/4 -z-10 w-[500px] h-[400px] rounded-full bg-[#4A5568]/20 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 -z-10 w-[400px] h-[300px] rounded-full bg-[#48CAE4]/15 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end lg:justify-center w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14
                      pt-24 pb-28 sm:pt-28 sm:pb-36 lg:py-24
                      min-h-screen">

        <div className="grid w-full gap-10 lg:grid-cols-[1fr_300px] lg:gap-16 items-center">

          {/* Left — main content */}
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-[0.65rem] font-bold tracking-[0.16em] text-[#48CAE4] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#48CAE4] shadow-[0_0_10px_#48CAE4]" />
              {t('heroBadge')}
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white"
            >
              {t('heroTitle')}
              <span className="block mt-1 bg-gradient-to-r from-[#A2E9F8] via-[#48CAE4] to-[#1e9eb7] bg-clip-text text-transparent">
                {t('heroHighlight')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-5 text-sm sm:text-base leading-7 text-slate-300 max-w-lg"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-7 flex flex-col xs:flex-row flex-wrap gap-3"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#48CAE4] hover:bg-[#3ab8d2] px-6 py-3.5 text-sm font-extrabold text-[#023047] shadow-[0_8px_24px_rgba(72,202,228,0.3)] transition-all hover:-translate-y-0.5 active:scale-95"
              >
                {t('exploreCatalog')} <FiArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#48CAE4] hover:bg-white/15 active:scale-95"
              >
                {t('startConversation')} <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Certifications (Mobile Optimized) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-sm">
                <div className="w-6 h-6 border-2 border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full" />
                </div>
                <span className="text-[0.7rem] font-bold text-slate-800">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-sm">
                <div className="w-6 h-6 border-2 border-red-600 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                </div>
                <span className="text-[0.7rem] font-bold text-slate-800">Non-Veg</span>
              </div>
            </motion.div>

            {/* Proof points */}
            <motion.ul
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5 text-xs font-semibold text-white/65">
                  <FiCheck className="w-3.5 h-3.5 text-[#75d9f0] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — stats card (desktop only) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_18px_55px_rgba(3,25,38,0.25)]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-[0.6rem] font-bold tracking-[0.18em] text-[#48CAE4] uppercase">Primary Market Focus</p>
                  <p className="mt-2 text-3xl font-extrabold text-white tracking-tight">India & Nepal</p>
                </div>
                <span className="grid w-10 h-10 place-items-center rounded-full border border-[#48CAE4]/30 bg-[#48CAE4]/10 text-[#48CAE4] flex-shrink-0">
                  <FiGlobe className="w-5 h-5" />
                </span>
              </div>
              <div className="h-px bg-white/10 mb-5" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '500+', label: 'Shipments' },
                  { val: '100+', label: 'Products' },
                  { val: '15+', label: 'Years Exp.' },
                  { val: 'Grade A', label: 'Quality' },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-xl font-extrabold text-[#48CAE4]">{val}</div>
                    <div className="text-[0.65rem] text-white/50 font-medium mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#main-content"
        className="absolute bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-[0.6rem] font-bold tracking-[0.18em] text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll to content"
      >
        SCROLL
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <FiArrowDown className="w-4 h-4" />
        </motion.div>
      </a>
    </section>
  );
};

export default HeroSection;
