import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

interface Certificate {
  id: number;
  shortName: string;
  fullName: string;
  description: string;
  authority: string;
  validity: string;
  scope: string;
  images?: string[];
}

const certifications: Certificate[] = [
  {
    id: 1,
    shortName: 'HACCP',
    fullName: 'Hazard Analysis Critical Control Points',
    description: 'International standard defining the requirements for effective control of food safety.',
    authority: 'International Certification Body',
    validity: '2023 - 2026',
    scope: 'Processing, Freezing and Packaging of Marine Products'
  },
  {
    id: 2,
    shortName: 'ISO 22000',
    fullName: 'Food Safety Management',
    description: 'Demonstrates our ability to control food safety hazards to ensure that food is safe.',
    authority: 'ISO Certification Body',
    validity: '2022 - 2025',
    scope: 'Food Safety Management System for Seafood Export'
  },
  {
    id: 3,
    shortName: 'FSSAI',
    fullName: 'Food Safety and Standards Authority of India',
    description: 'Mandatory certification ensuring compliance with Indian food safety standards.',
    authority: 'Ministry of Health & Family Welfare, Govt. of India',
    validity: '2021 - 2026',
    scope: 'Manufacturing and Export of Fish & Fish Products'
  },
  {
    id: 4,
    shortName: 'MPEDA',
    fullName: 'Marine Products Export Development Authority',
    description: 'Official authorization for exporting marine products from India.',
    authority: 'Ministry of Commerce and Industry',
    validity: 'Valid until revoked',
    scope: 'Registered Exporter of Marine Products'
  },
  {
    id: 5,
    shortName: 'FDA',
    fullName: 'US Food and Drug Administration Approved',
    description: 'Facility registration required for exporting food products to the United States.',
    authority: 'U.S. FDA',
    validity: 'Renewed Annually',
    scope: 'Facility Registration for Seafood Export'
  },
  {
    id: 6,
    shortName: 'EIC',
    fullName: 'Export Inspection Council',
    description: 'Ensures products meet the requirements of the importing countries.',
    authority: 'Export Inspection Agency',
    validity: '2023 - 2025',
    scope: 'Quality Control and Inspection'
  },
  {
    id: 7,
    shortName: 'BRC',
    fullName: 'British Retail Consortium',
    description: 'Global standard for food safety, recognized by retailers worldwide.',
    authority: 'BRC Global Standards',
    validity: '2024 - 2025',
    scope: 'Food Safety for Seafood Processing'
  },
  {
    id: 8,
    shortName: 'LEI',
    fullName: 'Legal Entity Identifier',
    description: 'Global identifier for legal entities participating in financial transactions.',
    authority: 'GLEIF / Ubisecure Oy',
    validity: 'Renewed Annually',
    scope: 'Financial Transactions and Global Entity Identification',
    images: [
      '/certificates/lei-1.png',
      '/certificates/lei-2.png',
      '/certificates/lei-3.png'
    ]
  }
];

const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen text-[#1A1A1A] dark:text-gray-200 transition-colors duration-300">
      <Helmet>
        <title>Certifications & Accreditations | SLV Marine Exports</title>
        <meta name="description" content="View our global food safety certifications including HACCP, ISO 22000, and FDA approval." />
      </Helmet>

            <PageHero 
        badge="Compliance"
        title="Global"
        highlight="Certifications"
        subtitle="Recognized globally for our commitment to food safety and sustainable practices."
      />

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer bg-white dark:bg-white/5 rounded-2xl p-6 border-2 border-transparent hover:border-[#48CAE4] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#48CAE4]/20 to-transparent rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10 flex-grow">
                  <FaCertificate className="text-4xl text-[#0077B6] dark:text-[#48CAE4] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2 text-[#1A1A1A] dark:text-white group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4] transition-colors">
                    {cert.shortName}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 h-10">
                    {cert.fullName}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {cert.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex justify-between items-center text-sm font-medium">
                  <span className="text-[#00B4D8] dark:text-green-400">View Details</span>
                  <span className="text-gray-400">&rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#12233a] rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 dark:border-white/10"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors z-20"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#48CAE4]/20 rounded-2xl flex items-center justify-center">
                    <FaAward className="text-3xl text-[#48CAE4]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">
                      {selectedCert.shortName}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      Certificate No. SLV-{selectedCert.shortName}-{selectedCert.id.toString().padStart(3, '0')}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">Full Name</h4>
                    <p className="text-lg font-medium text-[#0077B6] dark:text-[#48CAE4]">{selectedCert.fullName}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">Issuing Authority</h4>
                      <p className="text-gray-800 dark:text-gray-200">{selectedCert.authority}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">Validity</h4>
                      <p className="text-gray-800 dark:text-gray-200">{selectedCert.validity}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">Scope</h4>
                    <p className="text-gray-800 dark:text-gray-200">{selectedCert.scope}</p>
                  </div>
                </div>

                {/* Certificate Images */}
                {selectedCert.images && selectedCert.images.length > 0 ? (
                  <div className="mt-8 space-y-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">Certificate Documents</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedCert.images.map((img, idx) => (
                        <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                          <img src={img} alt={`${selectedCert.shortName} Certificate ${idx + 1}`} className="w-full h-auto object-contain bg-white" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center bg-gray-50 dark:bg-white/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                      <FaCertificate className="text-9xl text-gray-900 dark:text-white" />
                    </div>
                    <FaCertificate className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Official Certificate Document</p>
                    <p className="text-sm text-gray-400 mt-2">Available upon request</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationsPage;
