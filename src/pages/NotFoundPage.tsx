import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft, FiAnchor } from 'react-icons/fi';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen flex items-center justify-center transition-colors duration-300 pt-20 pb-24">
      <Helmet>
        <title>Page Not Found | SLV Marine Exports</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SLV Marine Exports homepage." />
      </Helmet>

      <div className="max-w-lg mx-auto px-5 text-center">
        {/* Animated anchor icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-28 h-28 rounded-[2rem] bg-gradient-to-br from-[#0077B6]/10 to-[#48CAE4]/20 dark:from-[#0077B6]/20 dark:to-[#48CAE4]/10"
          >
            <FiAnchor className="w-14 h-14 text-[#0077B6] dark:text-[#48CAE4]" />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-[#0077B6] to-[#48CAE4] bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mb-4"
        >
          Lost at Sea
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 dark:text-slate-400 mb-10 text-base leading-relaxed max-w-md mx-auto"
        >
          The page you're looking for seems to have drifted away. Don't worry — let's navigate you back to safer waters.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#005988] text-white font-bold py-3.5 px-6 rounded-2xl transition-all hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(0,91,150,0.3)]"
          >
            <FiHome className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold py-3.5 px-6 rounded-2xl transition-all hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <FiArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
