import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShip, FaBoxOpen, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const countries = [
  { name: 'India', flag: '🇮🇳', products: 'Shrimp, Fish, Crab, Squids, Lobsters, Value-Added Products', volume: 'High', desc: 'Nationwide distribution across major cities and ports — from Andhra Pradesh to Delhi, Mumbai, Kolkata, and beyond.' },
  { name: 'Nepal', flag: '🇳🇵', products: 'Fish, Prawns, Crab, Squids, Lobsters, Frozen Seafood', volume: 'High', desc: 'Cross-border delivery to Kathmandu, Biratnagar, Pokhara, and other major trade centres in Nepal.' },
];

const stats = [
  { icon: <FaGlobeAmericas />, label: 'Primary Markets', value: '2' },
  { icon: <FaShip />, label: 'Successful Deliveries', value: '500+' },
  { icon: <FaBoxOpen />, label: 'Products Exported', value: '100+' },
  { icon: <FaHandshake />, label: 'Trade Partners', value: '200+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ExportMarketsPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen font-sans transition-colors duration-300">
      <Helmet>
        <title>Export Markets | SLV Marine Exports</title>
        <meta name="description" content="SLV Marine Exports delivers premium seafood across India and Nepal. Discover our reach and trade partnerships." />
      </Helmet>

      <PageHero
        badge="Regional Reach"
        title="Export"
        highlight="Markets"
        subtitle="Connecting India's finest seafood across the nation and delivering directly to Nepal."
      />

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1E293B] p-6 rounded-xl shadow-lg dark:shadow-none text-center border-t-4 border-[#48CAE4] dark:border-[#0077B6]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl text-[#00B4D8] dark:text-[#48CAE4] mb-3 flex justify-center">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Country Cards Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#023047] dark:text-white mb-4">Our Export Destinations</h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              We proudly supply premium seafood products across India and to our key trade partner Nepal, ensuring freshness and quality every step of the way.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-white/10"
              >
                <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] p-5 text-white flex justify-between items-center">
                  <span className="text-2xl font-semibold">{country.name}</span>
                  <span className="text-5xl">{country.flag}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider font-semibold block mb-1">Key Exports</span>
                    <span className="text-[#1A1A1A] dark:text-slate-200 font-medium text-sm">{country.products}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider font-semibold block mb-1">Coverage</span>
                    <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{country.desc}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider font-semibold block mb-1">Trade Volume</span>
                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${country.volume === 'High' ? 'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-400'}`}>
                      {country.volume}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0077B6] to-[#023047] rounded-3xl p-10 text-white shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Want to become a trade partner?</h3>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">Whether you're a distributor in India or an importer in Nepal, we'd love to discuss a partnership.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#48CAE4] text-[#023047] px-6 py-3.5 rounded-xl font-bold hover:bg-[#3ab8d2] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Start a Conversation <FiArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default ExportMarketsPage;
