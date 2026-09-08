import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaBox, FaMapMarkerAlt, FaTruck, FaSnowflake } from 'react-icons/fa';
import { Product } from '../../data/products';

interface WhatsAppOrderModalProps {
  product: Product | null;
  onClose: () => void;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState('500 kg');
  const [freezingType, setFreezingType] = useState('IQF (Individually Quick Frozen)');
  const [destination, setDestination] = useState('India (Domestic)');
  const [customCity, setCustomCity] = useState('');
  const [notes, setNotes] = useState('');

  if (!product) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*SLV MARINE EXPORTS — Quick Product Inquiry* 🦐🐟

*Product:* ${product.name}
*Category:* ${product.category}
*Target Quantity:* ${quantity}
*Freezing Preference:* ${freezingType}
*Destination Region:* ${destination}${customCity ? ` (${customCity})` : ''}
${notes ? `\n*Additional Requirements:* ${notes}` : ''}

Please share current availability, packaging options, and logistics details.`;

    const url = `https://wa.me/918977770455?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
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
          className="relative w-full max-w-lg bg-white dark:bg-[#1E293B] rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden z-10 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#25D366] p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
              <FaWhatsapp className="w-4 h-4 text-white" /> Quick Order Builder
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold">{product.name}</h2>
            <p className="text-xs text-emerald-100 mt-0.5">Build your WhatsApp inquiry in 3 seconds</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 text-slate-800 dark:text-slate-200">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Target Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <option value="100 kg (Sample / Trial Order)">100 kg (Sample Order)</option>
                <option value="500 kg">500 kg</option>
                <option value="1 Ton (1,000 kg)">1 Ton (1,000 kg)</option>
                <option value="5 Tons">5 Tons</option>
                <option value="1 Container (FCL - 20ft Reefer)">1 Container (20ft FCL)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Freezing Preference</label>
              <select
                value={freezingType}
                onChange={(e) => setFreezingType(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <option value="IQF (Individually Quick Frozen)">IQF (Individually Quick Frozen)</option>
                <option value="Block Frozen (1.8kg / 2kg Blocks)">Block Frozen</option>
                <option value="Shatterpack">Shatterpack</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Destination Region</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <option value="India — South (AP, TS, TN, KA, KL)">India — South Region</option>
                <option value="India — North / West / East (Delhi, Mumbai, Kolkata, etc.)">India — North / West / East</option>
                <option value="Nepal (Kathmandu, Pokhara, Biratnagar)">Nepal — Cross Border Trade</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">City / Port Location (Optional)</label>
              <input
                type="text"
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                placeholder="e.g. Kathmandu, Delhi, Hyderabad..."
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#25D366]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Additional Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Any special size/count requirements or packaging preferences..."
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-extrabold py-4 px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 text-base mt-2"
            >
              <FaWhatsapp className="w-5 h-5" /> Open WhatsApp Inquiry →
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
