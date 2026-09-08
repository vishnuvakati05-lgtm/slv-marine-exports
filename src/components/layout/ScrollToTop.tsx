import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          // On mobile: left side, above bottom nav. Desktop: right side, low
          className="fixed left-4 sm:left-6 bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:bottom-6 z-[70] w-12 h-12 bg-[#0077B6] hover:bg-[#023047] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <FiChevronUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
