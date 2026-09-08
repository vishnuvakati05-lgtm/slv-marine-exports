import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { motion } from 'framer-motion';
import { 
  FiAnchor, 
  FiFilter, 
  FiDroplet, 
  FiSettings, 
  FiSearch, 
  FiPackage, 
  FiTruck, 
  FiNavigation
} from 'react-icons/fi';
import { FaSnowflake } from 'react-icons/fa';

const timelineSteps = [
  {
    icon: <FiAnchor className="w-6 h-6" />,
    title: 'Fishing',
    description: 'Fresh catch from certified fishing vessels utilizing sustainable methods in pristine waters.',
  },
  {
    icon: <FiFilter className="w-6 h-6" />,
    title: 'Sorting',
    description: 'Expert sorting by species, size and grade ensuring consistency and premium quality.',
  },
  {
    icon: <FiDroplet className="w-6 h-6" />,
    title: 'Cleaning',
    description: 'Thorough cleaning in purified, temperature-controlled water to maintain ultimate freshness.',
  },
  {
    icon: <FiSettings className="w-6 h-6" />,
    title: 'Processing',
    description: 'State-of-the-art processing facility meeting stringent international hygiene standards.',
  },
  {
    icon: <FaSnowflake className="w-6 h-6" />,
    title: 'Freezing',
    description: 'Advanced IQF and blast freezing technology locking in natural taste and nutrients.',
  },
  {
    icon: <FiPackage className="w-6 h-6" />,
    title: 'Packaging',
    description: 'Vacuum-sealed export packaging preserving product integrity for extended shelf life.',
  },
  {
    icon: <FiSearch className="w-6 h-6" />,
    title: 'Inspection',
    description: 'Multi-point quality inspection and microbiological testing before dispatch.',
  },
  {
    icon: <FiTruck className="w-6 h-6" />,
    title: 'Container Loading',
    description: 'Temperature-controlled container loading monitored in real-time.',
  },
  {
    icon: <FiNavigation className="w-6 h-6" />,
    title: 'Shipping',
    description: 'Global shipping with unbroken cold chain integrity to your destination.',
  }
];

const QualityPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen text-[#1A1A1A] dark:text-gray-200 transition-colors duration-300 overflow-hidden">
      <Helmet>
        <title>Quality Assurance | SLV Marine Exports</title>
        <meta name="description" content="Discover our rigorous quality control processes ensuring premium seafood from catch to delivery." />
      </Helmet>

            <PageHero 
        badge="Our Standard"
        title="Quality"
        highlight="Commitment"
        subtitle="Uncompromising quality control at every stage, from sea to shipment."
      />

      {/* Premium Apple-Style Timeline Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl relative">
          
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] via-[#00B4D8] to-transparent transform md:-translate-x-1/2 opacity-20 dark:opacity-40"></div>

          <div className="space-y-16 md:space-y-24">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-[#1A1A1A] border-4 border-[#0077B6] dark:border-[#48CAE4] flex items-center justify-center text-[#0077B6] dark:text-[#48CAE4] shadow-xl"
                    >
                      <span className="text-sm md:text-lg font-bold">{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full pl-20 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'}`}
                  >
                    <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300 w-full max-w-md">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/10 flex items-center justify-center mb-6 text-[#00B4D8] dark:text-white">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 tracking-tight text-[#0077B6] dark:text-[#48CAE4]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards Preview (Cards) */}
      <section className="py-20 bg-gray-50 dark:bg-[#12233a]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Global Standards We Meet
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['HACCP', 'ISO 22000', 'FSSAI', 'FDA Approved'].map((std, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-4 bg-white dark:bg-[#023047] rounded-full shadow-sm border border-gray-100 dark:border-white/10 text-lg font-medium text-[#1A1A1A] dark:text-gray-300"
              >
                {std}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
