import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLogOut, FiX } from 'react-icons/fi';
import { App as CapacitorApp } from '@capacitor/app';

interface ExitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExitModal: React.FC<ExitModalProps> = ({ isOpen, onClose }) => {
  const handleExit = () => {
    CapacitorApp.exitApp();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#023047]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#0F172A] p-8 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
            >
              <FiX size={20} />
            </button>

            {/* Icon/Decoration */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0077B6]/10 to-[#48CAE4]/20 text-[#0077B6] dark:text-[#48CAE4]">
              <FiLogOut size={32} />
            </div>

            {/* Content */}
            <h3 className="mb-3 text-2xl font-extrabold text-[#023047] dark:text-white tracking-tight">
              Thank you for visiting!
            </h3>
            <p className="mb-8 text-[0.95rem] leading-relaxed text-slate-500 dark:text-slate-400">
              We hope you enjoyed exploring SLV Marine. <br />
              <span className="font-bold text-[#0077B6] dark:text-[#48CAE4]">Visit us again soon</span> for the finest premium seafood exports.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleExit}
                className="w-full rounded-2xl bg-[#0077B6] py-4 text-sm font-bold text-white shadow-[0_8px_20px_-4px_rgba(0,119,182,0.4)] transition-all hover:bg-[#005f91] active:scale-95"
              >
                Exit App
              </button>
              <button
                onClick={onClose}
                className="w-full rounded-2xl border border-slate-200 py-4 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 active:scale-95 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
              >
                Stay a little longer
              </button>
            </div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#48CAE4]/10 blur-3xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#0077B6]/10 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
