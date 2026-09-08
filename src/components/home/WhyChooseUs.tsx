import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiShield, FiTruck, FiAward, FiUsers, FiCheckCircle,
  FiThermometer, FiGlobe, FiPackage, FiAnchor, FiFilter,
} from 'react-icons/fi';
import { FaLeaf, FaSnowflake } from 'react-icons/fa';

const features = [
  { icon: FaLeaf,          title: '99.99% Fresh',       desc: 'Sourced directly from verified catch for peak freshness.',                color: '#22c55e' },
  { icon: FiShield,        title: 'Global Standards', desc: 'Certified facilities meeting stringent international export norms.',      color: '#0077B6' },
  { icon: FiTruck,         title: 'Fast Shipping',    desc: 'Optimised logistics for rapid, reliable delivery across regions.',        color: '#f97316' },
  { icon: FiThermometer,   title: 'Cold Chain',       desc: 'Unbroken temperature control from harvest to destination.',             color: '#06b6d4' },
  { icon: FiAward,         title: 'Premium Quality',  desc: 'Meticulous QC at every stage — from sea to shelf.',                     color: '#48CAE4' },
  { icon: FiUsers,         title: 'Expert Team',      desc: 'Decades of combined experience in the Indian seafood industry.',         color: '#8b5cf6' },
  { icon: FiGlobe,         title: 'Export Ready',     desc: 'All documentation, labelling, and compliance handled in-house.',        color: '#00B4D8' },
  { icon: FiCheckCircle,   title: 'On-time Delivery', desc: 'Consistent fulfilment with real-time shipment tracking updates.',        color: '#e85d9a' },
];

const coldChainSteps = [
  {
    step: '01',
    title: 'Harvest & Sorting',
    desc: 'Fresh catch brought to harbor and sorted by size, weight, and grade under strict temperature controls.',
    icon: FiAnchor,
    temp: '4°C'
  },
  {
    step: '02',
    title: 'Chilled Washing',
    desc: 'Thorough cleaning in purified, temperature-controlled water to maintain ultimate hygiene and natural texture.',
    icon: FiFilter,
    temp: '2°C'
  },
  {
    step: '03',
    title: 'IQF Blast Freezing',
    desc: 'Advanced Individual Quick Freezing technology locks in ocean freshness, taste, and nutrients instantly.',
    icon: FaSnowflake,
    temp: '-35°C'
  },
  {
    step: '04',
    title: 'Vacuum Packaging',
    desc: 'Export-grade sealed master cartons and polybags protecting product integrity for extended shelf life.',
    icon: FiPackage,
    temp: '-18°C'
  },
  {
    step: '05',
    title: 'Quality Certification',
    desc: 'Microbiological testing and multi-point quality inspection before container sealing and clearance.',
    icon: FiCheckCircle,
    temp: '-18°C'
  },
  {
    step: '06',
    title: 'Refrigerated Transit',
    desc: 'GPS-monitored refrigerated trucks maintaining an unbroken cold chain straight to India cities and Nepal.',
    icon: FiTruck,
    temp: '-18°C'
  }
];

const WhyChooseUs = () => {
  const [[activeStep, direction], setStep] = useState([0, 1]);
  const [isPaused, setIsPaused] = useState(false);

  const changeStep = (newStep: number) => {
    setStep(([prevStep]) => [newStep, newStep > prevStep ? 1 : -1]);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStep(([prevStep]) => [(prevStep + 1) % coldChainSteps.length, 1]);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-24 bg-[#F1FAFC] dark:bg-[#023047] transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#0077B6] dark:text-[#48CAE4] uppercase mb-3">
            Why SLV Marine
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            The standard other exporters<br className="hidden sm:block" /> measure themselves against
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Every shipment from SLV Marine Exports carries our promise of quality, safety, and reliability.
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8]" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative bg-white dark:bg-[#0d1f3c] rounded-2xl p-6 border border-slate-100 dark:border-white/6 shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${f.color}12 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: f.color + '18', border: `1px solid ${f.color}30` }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>

              <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: f.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Cold Chain Process Showcase */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-white dark:bg-[#0d1f3c] rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-white/6 shadow-xl relative overflow-hidden"
        >
          <div className="text-center mb-10">
            <span className="px-3.5 py-1 bg-[#0077B6]/10 text-[#0077B6] dark:text-[#48CAE4] text-xs font-bold rounded-full uppercase tracking-wider">
              INNOVATION & LOGISTICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
              Unbroken Cold Chain Journey
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto mt-2">
              Explore how we preserve 100% ocean freshness from Andhra Pradesh coastlines to buyers across India and Nepal.
            </p>
          </div>

          {/* Timeline Step Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {coldChainSteps.map((item, idx) => {
              const Icon = item.icon;
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => {
                    changeStep(idx);
                    setIsPaused(true);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isCurrent
                      ? 'bg-[#0077B6] text-white border-[#0077B6] shadow-lg scale-105 z-10'
                      : 'bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-black ${isCurrent ? 'text-white/80' : 'text-[#0077B6] dark:text-[#48CAE4]'}`}>
                      STEP {item.step}
                    </span>
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-extrabold line-clamp-1">{item.title}</p>
                  <span className={`text-[10px] mt-1 inline-block font-semibold ${isCurrent ? 'text-white/90' : 'text-slate-400'}`}>
                    Target: {item.temp}
                  </span>

                  {/* 2-Second Animated Progress Bar */}
                  {isCurrent && !isPaused && (
                    <motion.div
                      key={activeStep}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#48CAE4] origin-left"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Step Detail Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 24, mass: 0.8 }}
              className="bg-gradient-to-r from-[#0077B6] to-[#023047] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            >
              <div className="space-y-3 flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                  <FiThermometer className="text-[#48CAE4]" /> Controlled Temperature: {coldChainSteps[activeStep].temp}
                </div>
                <h4 className="text-2xl font-extrabold">
                  {coldChainSteps[activeStep].step}. {coldChainSteps[activeStep].title}
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                  {coldChainSteps[activeStep].desc}
                </p>
              </div>

              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-4xl text-[#48CAE4] shadow-inner"
              >
                {(() => {
                  const Icon = coldChainSteps[activeStep].icon;
                  return <Icon />;
                })()}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
