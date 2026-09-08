import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowUpRight, FiPackage, FiMaximize2, FiX, FiFileText } from 'react-icons/fi';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import PageHero from '../components/layout/PageHero';
import { products, Product } from '../data/products';
import { ProductSpecModal } from '../components/products/ProductSpecModal';
import { WhatsAppOrderModal } from '../components/products/WhatsAppOrderModal';
import { useLanguage } from '../context/LanguageContext';

const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecProduct, setSelectedSpecProduct] = useState<Product | null>(null);
  const [selectedWaProduct, setSelectedWaProduct] = useState<Product | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; name: string } | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>{t('products')} | SLV Marine Exports — Premium Seafood Catalog</title>
        <meta name="description" content="Browse SLV Marine Exports' complete seafood catalog: shrimp, fish, crab, lobster, squid, and value-added products. Premium quality, export-ready." />
      </Helmet>

      <PageHero
        badge={t('products')}
        title="Our Premium"
        highlight="Products"
        subtitle="Explore our diverse range of fresh and frozen seafood — from traditional catches to value-added products."
      />

      <section className="py-12 sm:py-16 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        {/* Search & Filters */}
        <div className="mb-10 space-y-5">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-4 focus:ring-[#0077B6]/20 focus:border-[#0077B6] outline-none transition-all text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 max-w-full sm:flex-wrap sm:justify-center whitespace-nowrap scrollbar-none touch-pan-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#0077B6] text-white shadow-md'
                    : 'bg-white dark:bg-[#1E293B] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                {cat === 'All' ? t('allProducts') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products count */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div 
                  className="relative overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/3] cursor-pointer group/img"
                  onClick={() => setPreviewImage({ src: product.image, name: product.name })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="%23e2e8f0"><rect width="400" height="300"/><text x="200" y="150" text-anchor="middle" fill="%2394a3b8" font-size="14" font-family="sans-serif">' + product.name + '</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full shadow-lg">
                      <FiMaximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  {product.badgeText && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#0077B6] text-white text-[10px] font-bold rounded-full tracking-wider shadow-md z-10">
                      {product.badgeText}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-md tracking-wider z-10">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="mt-auto pt-2 border-t border-slate-100 dark:border-white/5 flex gap-2">
                    <button
                      onClick={() => setSelectedSpecProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl transition-colors"
                      title="View Export Specification Sheet"
                    >
                      <FiFileText className="w-3.5 h-3.5 text-[#0077B6] dark:text-[#48CAE4]" /> Spec
                    </button>
                    <button
                      onClick={() => setSelectedWaProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white text-xs font-bold py-2.5 px-2 rounded-xl transition-colors shadow-sm"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" /> Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <FiPackage className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No products found</p>
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Try a different search or category</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0077B6] to-[#023047] rounded-3xl p-10 text-white shadow-xl max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-3">Can't find what you need?</h3>
            <p className="text-slate-300 mb-6">We source a wide variety of seafood. Tell us your requirements and we'll find the perfect product for you.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#48CAE4] text-[#023047] px-6 py-3.5 rounded-xl font-bold hover:bg-[#3ab8d2] transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Contact Our Team <FiArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <ProductSpecModal
        product={selectedSpecProduct}
        onClose={() => setSelectedSpecProduct(null)}
      />
      <WhatsAppOrderModal
        product={selectedWaProduct}
        onClose={() => setSelectedWaProduct(null)}
      />

      {/* Image Preview Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#023047]/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setPreviewImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
              onClick={() => setPreviewImage(null)}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center bg-black/20 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black/40 p-2">
                <img
                  src={previewImage.src}
                  alt={previewImage.name}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="%23e2e8f0"><rect width="400" height="300"/><text x="200" y="150" text-anchor="middle" fill="%2394a3b8" font-size="14" font-family="sans-serif">' + previewImage.name + '</text></svg>';
                  }}
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center pointer-events-none">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{previewImage.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default ProductsPage;
