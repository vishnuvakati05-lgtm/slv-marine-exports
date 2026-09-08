import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { motion } from 'framer-motion';
import { 
  FiGlobe, 
  FiThermometer, 
  FiPackage, 
  FiBox, 
  FiCheckCircle, 
  FiTruck, 
  FiNavigation, 
  FiFileText, 
  FiTag, 
  FiHeadphones,
  FiArrowUpRight
} from 'react-icons/fi';

const services = [
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: 'Seafood Export',
    description: 'Premium quality seafood exported across India and Nepal, adhering to international standards. We ensure freshness from catch to delivery.',
  },
  {
    icon: <FiThermometer className="w-8 h-8" />,
    title: 'Frozen Seafood Supply',
    description: 'State-of-the-art IQF technology preserves the natural taste and nutritional value of our diverse seafood range.',
  },
  {
    icon: <FiPackage className="w-8 h-8" />,
    title: 'Bulk Orders',
    description: 'Reliable fulfillment of large-scale wholesale orders for distributors, retail chains, and food service providers.',
  },
  {
    icon: <FiBox className="w-8 h-8" />,
    title: 'OEM Packaging',
    description: 'Customized processing and packaging solutions tailored to your specific brand requirements and market preferences.',
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: 'Quality Inspection',
    description: 'Rigorous multi-point quality control ensuring every batch meets our stringent safety and grade specifications.',
  },
  {
    icon: <FiTruck className="w-8 h-8" />,
    title: 'Cold Chain Logistics',
    description: 'Unbroken temperature-controlled supply chain guaranteeing product integrity throughout the transit process.',
  },
  {
    icon: <FiNavigation className="w-8 h-8" />,
    title: 'Nationwide Transport',
    description: 'Efficient distribution network with optimized routing for timely and secure delivery across India and Nepal.',
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: 'Documentation Support',
    description: 'Comprehensive assistance with customs clearance, health certificates, and all necessary export-import paperwork.',
  },
  {
    icon: <FiTag className="w-8 h-8" />,
    title: 'Private Label Packaging',
    description: 'End-to-end private labeling services helping you build your brand with our premium quality seafood products.',
  },
  {
    icon: <FiHeadphones className="w-8 h-8" />,
    title: '24×7 Customer Support',
    description: 'Dedicated support team available around the clock to assist with inquiries, orders, and tracking.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen text-[#1A1A1A] dark:text-gray-200 transition-colors duration-300">
      <Helmet>
        <title>Our Services | SLV Marine Exports</title>
        <meta name="description" content="Explore our premium seafood export services, cold chain logistics, and custom packaging solutions." />
      </Helmet>

      <PageHero 
        badge="What We Do"
        title="Our"
        highlight="Services"
        subtitle="Comprehensive seafood processing, packaging, and export solutions across India & Nepal."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-100 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,91,150,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(72,202,228,0.1)]"
              >
                <div className="w-16 h-16 bg-[#F1FAFC] dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 text-[#0077B6] dark:text-[#48CAE4] group-hover:text-white group-hover:bg-[#00B4D8] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#00B4D8] dark:text-[#48CAE4] hover:underline gap-1"
                >
                  Get a quote
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We understand that every business has unique requirements. Contact our experts to discuss how we can tailor our services to meet your specific needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#48CAE4] hover:bg-[#3ab8d2] text-[#023047] font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Our Team <FiArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default ServicesPage;
