import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeAmericas, FaShip, FaCertificate, FaHandshake, FaEye, FaBullseye, FaTimes } from 'react-icons/fa';
import PageHero from '../components/layout/PageHero';
import heroBuilding from '../assets/hero-building.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const teamMembers = [
  { name: 'V. Sampath Kumar', role: 'Managing Partner', phone: '+91 89777 70455', img: '/managing-partner.jpg' },
  { name: 'Sohail', role: 'Accountant', phone: '+91 93901 97086', img: '/accountant-profile.jpg' },
];

export default function AboutPage() {
  const [modalImage, setModalImage] = useState<{src: string, name: string, role: string} | null>(null);

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen text-[#1A1A1A] dark:text-slate-200 transition-colors duration-300">
      <Helmet>
        <title>About Us | SLV Marine Exports</title>
        <meta name="description" content="Learn about SLV Marine Exports, a leading seafood exporter from Andhra Pradesh, India serving across India and Nepal." />
      </Helmet>

      <PageHero
        badge="Our Story"
        title="About SLV Marine"
        highlight="Exports"
        subtitle="Delivering the ocean's finest across India and Nepal with uncompromised quality and freshness."
      />

      {/* Company Story */}
      <section className="py-12 sm:py-20 px-5 sm:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-[#0077B6] mb-6">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Founded with a passion for quality seafood and sustainable practices, SLV Marine Exports has grown into a trusted name across India and Nepal. Our journey began with a simple mission: to connect local fishermen with markets while ensuring the highest standards of freshness and hygiene.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, we operate state-of-the-art processing facilities in Andhra Pradesh and maintain a robust supply chain that guarantees our products reach across India and Nepal exactly as nature intended — fresh, delicious, and nutritious.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroBuilding} alt="SLV Marine Exports processing facility in Andhra Pradesh" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MVV Cards */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Our Mission', icon: <FaBullseye className="text-4xl text-[#48CAE4]" />, desc: 'To provide premium quality seafood products across India and Nepal while promoting sustainable fishing practices and empowering local communities.' },
              { title: 'Our Vision', icon: <FaEye className="text-4xl text-[#48CAE4]" />, desc: 'To be the most trusted and preferred partner for seafood supply in India and Nepal, known for our integrity, quality, and reliability.' },
              { title: 'Our Values', icon: <FaHandshake className="text-4xl text-[#48CAE4]" />, desc: 'Quality without compromise, sustainability, transparency, and building long-lasting relationships with our partners and clients.' }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-[#F1FAFC] dark:bg-[#023047] p-8 rounded-2xl border border-gray-100 dark:border-white/6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077B6] rounded-bl-full opacity-5 group-hover:scale-110 transition-transform" />
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#0077B6] mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0077B6] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: <FaGlobeAmericas />, count: '2', label: 'Primary Markets' },
              { icon: <FaShip />, count: '500+', label: 'Shipments Completed' },
              { icon: <FaCertificate />, count: '100%', label: 'Quality Assured' },
              { icon: <FaHandshake />, count: '200+', label: 'Happy Clients' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center">
                <div className="text-5xl text-[#48CAE4] mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-20 bg-[#F1FAFC] dark:bg-[#023047]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0077B6] mb-4">Our Certificates</h2>
            <p className="text-gray-600 dark:text-slate-400">Recognition for our commitment to quality and compliance</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { src: '/certificates/lei-1.png', name: 'LEI Certificate - Part 1', role: 'Legal Entity Identifier' },
              { src: '/certificates/lei-2.png', name: 'LEI Certificate - Part 2', role: 'Legal Entity Identifier' },
              { src: '/certificates/lei-3.png', name: 'LEI Certificate - Part 3', role: 'Legal Entity Identifier' }
            ].map((cert, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn} 
                className="relative group cursor-pointer w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#48CAE4] shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setModalImage({ src: cert.src, name: cert.name, role: cert.role })}
              >
                <div className="aspect-[3/4] bg-white relative">
                  <img 
                    src={cert.src} 
                    alt={cert.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-[#0077B6]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center p-4">
                      <FaEye className="text-white text-4xl mb-3 mx-auto" />
                      <p className="text-white font-bold">{cert.name}</p>
                      <p className="text-[#48CAE4] text-sm mt-1">Click to view fullscreen</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-white dark:bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0077B6] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-slate-400">The dedicated professionals behind our success</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-12 sm:gap-24"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center group flex flex-col items-center bg-[#F1FAFC] dark:bg-[#023047] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-md hover:shadow-xl transition-shadow min-w-[250px]">
                <div 
                  className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-[#0d1f3c] shadow-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 cursor-pointer"
                  onClick={() => setModalImage({ src: member.img, name: member.name, role: member.role })}
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2394a3b8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-[#00B4D8] dark:text-[#75d9f0] font-semibold mb-4 text-lg">{member.role}</p>
                <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center justify-center gap-2 text-sm font-bold bg-white dark:bg-[#061420] px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-[#0077B6] dark:text-slate-300 dark:hover:text-[#48CAE4] transition-all hover:shadow-md">
                  {member.phone}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
              onClick={() => setModalImage(null)}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black/40">
                <img 
                  src={modalImage.src} 
                  alt={modalImage.name}
                  className="max-w-full max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2394a3b8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                  }}
                />
              </div>
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center pointer-events-none">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{modalImage.name}</h3>
                <p className="text-[#48CAE4] text-sm font-semibold mt-1">{modalImage.role}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
