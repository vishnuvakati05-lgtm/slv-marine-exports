import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPrint, FaSnowflake, FaShieldAlt } from 'react-icons/fa';
import { Product } from '../../data/products';
import { useLanguage } from '../../context/LanguageContext';

interface ProductSpecModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductSpecModal: React.FC<ProductSpecModalProps> = ({ product, onClose }) => {
  const { t } = useLanguage();

  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#1E293B] rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden z-10 my-8 print:shadow-none print:border-none print:m-0 print:p-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0077B6] to-[#023047] p-6 sm:p-8 text-white relative print:bg-none print:text-black">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors print:hidden"
              aria-label="Close"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-[#48CAE4] text-[#023047] text-[10px] font-extrabold rounded-full tracking-wider uppercase">
                EXPORT SPECIFICATION SHEET
              </span>
              <span className="text-xs text-slate-300">REF: SLV-SPEC-{product.id.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{product.name}</h2>
            <p className="text-sm text-slate-200 mt-1">{product.category} · Premium Quality Frozen Seafood</p>
          </div>

          {/* Body content */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 print:text-black">

            {/* Overview & Image */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-40 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="%23e2e8f0"><rect width="400" height="300"/><text x="200" y="150" text-anchor="middle" fill="%2394a3b8" font-size="14" font-family="sans-serif">' + product.name + '</text></svg>';
                  }}
                />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Product Description</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-[#0077B6] dark:text-[#48CAE4] rounded-lg text-xs font-bold">
                    <FaSnowflake className="w-3 h-3" /> IQF / Block Frozen
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-bold">
                    <FaShieldAlt className="w-3 h-3" /> Export Grade A
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Specs Grid */}
            <div className="border-t border-slate-100 dark:border-white/10 pt-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-[#48CAE4] mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Freezing Technology</span>
                  <p className="font-bold text-slate-800 dark:text-white">Individually Quick Frozen (IQF) / Blast Frozen</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Storage Temperature</span>
                  <p className="font-bold text-slate-800 dark:text-white">-18°C (0°F) or Lower</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Glazing Options</span>
                  <p className="font-bold text-slate-800 dark:text-white">0% to 20% Net Weight Glaze (As requested)</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Shelf Life</span>
                  <p className="font-bold text-slate-800 dark:text-white">24 Months from Production Date</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Packaging Specs</span>
                  <p className="font-bold text-slate-800 dark:text-white">10kg Master Carton / Polybag / Retail Box</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Origin & Processing</span>
                  <p className="font-bold text-slate-800 dark:text-white">Andhra Pradesh, India (HACCP Approved)</p>
                </div>
              </div>
            </div>

            {/* Quality & Certifications */}
            <div className="border-t border-slate-100 dark:border-white/10 pt-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-[#48CAE4] mb-3">
                Quality Compliance & Certifications
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {['HACCP Certified', 'ISO 22000', 'FSSAI Approved', 'MPEDA Registered', 'EIC Inspected', 'US FDA Facility Registered'].map(c => (
                  <span key={c} className="px-3 py-1.5 bg-slate-100 dark:bg-white/10 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-4 text-xs text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between gap-2">
              <p>SLV Marine Exports Pvt. Ltd. · Kodavalur, Andhra Pradesh, India</p>
              <p className="font-semibold">Email: slvmarineexports@gmail.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-white/10 flex justify-end gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-[#0077B6] hover:bg-[#005988] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
            >
              <FaPrint className="w-4 h-4" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
