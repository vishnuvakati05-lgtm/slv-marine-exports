import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dynamically import facility videos
const videoAssets = import.meta.glob('../assets/videos/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const getImageUrl = (filename: string) => {
  if (filename.startsWith('/products/')) return filename;
  return `/products/${filename}`;
};

const getVideoUrl = (filename: string) => {
  const key = Object.keys(videoAssets).find(k => k.endsWith(`/${filename}`));
  return key ? videoAssets[key] : '';
};

// Clean captions for images
const formatCaption = (file: string, originalCaption: string) => {
  if (originalCaption !== "Premium Product") return originalCaption;
  // Extract number from /products/img-29 (X).jpg
  const match = file.match(/\((\d+)\)/);
  if (match) {
    return `Frozen Seafood Export Stock #${match[1]}`;
  }
  return "Seafood Export Product";
};

// Gallery data
const galleryData = {
  title: "Seafood Export Gallery",
  subtitle: "Products • Processing • Packing • Certifications • Facility Videos",
  categories: ["All", "Products", "Processing Videos"],
  images: [
    { file: "/products/Seer Fish.jpeg", caption: "Fresh Seer Fish", category: "Products" },
    { file: "/products/Shrimp.jpeg", caption: "21/25 grade prawns", category: "Products" },
    { file: "/products/Breaded Shrimp.jpeg", caption: "Breaded Shrimp Snack", category: "Products" },
    { file: "/products/Spring Rolls.jpeg", caption: "Spring Rolls", category: "Products" },
    { file: "/products/Crab.jpeg", caption: "Crab", category: "Products" },
    { file: "/products/Lobster.jpeg", caption: "Lobster", category: "Products" },
    { file: "/products/Octopus.jpeg", caption: "Baby Octopus", category: "Products" },
    { file: "/products/Meat Balls.jpg", caption: "Sea Meat Balls", category: "Products" },
    { file: "/products/Prawn Rolls.jpg", caption: "Prawn Rolls", category: "Products" },
    { file: "/products/Samosa meat.jpg", caption: "Sea Samosa Meat", category: "Products" },
    { file: "/products/Breaded Fingers.jpg", caption: "Breaded Fingers", category: "Products" },
    { file: "/products/Breaded Prawns Type-01.jpeg", caption: "Breaded Prawns Type-01", category: "Products" },
    { file: "/products/Shrimp Fingers.jpg", caption: "Shrimp Fingers", category: "Products" },
    { file: "/products/Grade vise packing.jpeg", caption: "Grade-wise Packing", category: "Products" },
    { file: "/products/VPD 16-20 grade.jpeg", caption: "VPD 16-20 Grade", category: "Products" },
    { file: "/products/Black Tiger Prawns.jpeg", caption: "Black Tiger Prawns", category: "Products" },
    { file: "/products/Slab Prawns.jpeg", caption: "Slab Prawns", category: "Products" },
    { file: "/products/Jumbo Prawns.jpeg", caption: "Jumbo Prawns", category: "Products" },
  ],
  videos: [
    { file: "packing.mp4", caption: "Grading & Packing", category: "Processing Videos" },
    { file: "WhatsApp Image 2026-01-08 at 1.37.32 PM (1).mp4", caption: "General Cold Store", category: "Processing Videos" },
    { file: "WhatsApp Image 2026-01-08 at 1.37.32 PM (2).mp4", caption: "Prawn Packing Facility", category: "Processing Videos" },
    { file: "WhatsApp Image 2026-01-08 at 1.37.32 PM (3).mp4", caption: "Container Loading for Export", category: "Processing Videos" },
    { file: "WhatsApp Image 2026-01-08 at 1.37.32 PM (4).mp4", caption: "Hygiene Processing & Packing", category: "Processing Videos" },
    { file: "WhatsApp Image 2026-01-08 at 1.37.32 PM (6).mp4", caption: "Cold Storage Logistics", category: "Processing Videos" }
  ]
};

const PAGE_SIZE = 24;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Modal State
  const [modalData, setModalData] = useState<{ type: 'image' | 'video', src: string, caption: string } | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      const allImages = galleryData.images.map(img => ({ ...img, caption: formatCaption(img.file, img.caption), type: 'image' }));
      const allVideos = galleryData.videos.map(vid => ({ ...vid, type: 'video' }));

      const mixed = [];
      let imgIdx = 0;
      let vidIdx = 0;
      while (imgIdx < allImages.length || vidIdx < allVideos.length) {
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (vidIdx < allVideos.length) mixed.push(allVideos[vidIdx++]);
      }
      return mixed;
    } else if (activeFilter === 'Videos') {
      return galleryData.videos.map(vid => ({ ...vid, type: 'video' }));
    } else {
      return galleryData.images
        .filter(img => img.category === activeFilter)
        .map(img => ({ ...img, caption: formatCaption(img.file, img.caption), type: 'image' }));
    }
  }, [activeFilter]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const openModal = (type: 'image' | 'video', file: string, caption: string) => {
    const src = type === 'image' ? getImageUrl(file) : getVideoUrl(file);
    setModalData({ type, src, caption });
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#023047] min-h-screen pb-20 transition-colors duration-300">
      <Helmet>
        <title>Gallery | SLV Marine Exports – Products, Processing & Facilities</title>
        <meta name="description" content="SLV Marine Exports gallery – frozen fish, prawn processing, export packing, cold storage, infrastructure and processing facility videos." />
      </Helmet>

      {/* Header section */}
      <section className="bg-[#023047] pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-16 text-center text-white relative border-b-4 border-[#00B4D8]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#023047]/80" />
        <div className="relative z-10 px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0077B6]/40 text-[#48CAE4] text-xs font-bold tracking-widest mb-4">GALLERY</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{galleryData.title}</h1>
          <p className="text-[#48CAE4] font-medium tracking-wide max-w-2xl mx-auto">{galleryData.subtitle}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 px-1 max-w-full sm:flex-wrap sm:justify-center whitespace-nowrap scrollbar-none touch-pan-x mb-10">
          {galleryData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm shrink-0 ${activeFilter === cat
                ? 'bg-[#0077B6] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 dark:bg-[#061420] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.file + idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#061420] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,119,182,0.12)] transition-all cursor-pointer border border-slate-100 dark:border-white/5 flex flex-col group hover:-translate-y-1"
                onClick={() => openModal(item.type as 'image' | 'video', item.file, item.caption)}
              >
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  {item.type === 'image' ? (
                    <img
                      src={getImageUrl(item.file)}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full relative group">
                      <video
                        src={getVideoUrl(item.file) + "#t=0.1"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        preload="metadata"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaPlay className="text-[#0077B6] ml-1 text-xl" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                        VIDEO
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <p className="text-[0.95rem] font-bold text-slate-800 dark:text-slate-100 line-clamp-1">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
              className="bg-white dark:bg-[#061420] text-[#0077B6] dark:text-[#48CAE4] border border-[#0077B6]/30 dark:border-[#48CAE4]/30 font-bold px-8 py-3.5 rounded-full hover:bg-[#0077B6] hover:text-white dark:hover:bg-[#48CAE4] dark:hover:text-[#023047] transition-all shadow-sm hover:shadow-md"
            >
              Load More Gallery Items ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
            No items found for this category.
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center pb-8 border-t border-slate-200 dark:border-white/10 pt-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-6">Contact our team for more details and Products with all kinds of Grades</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#0077B6] hover:bg-[#023047] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_8px_20px_rgba(0,119,182,0.25)] hover:-translate-y-1">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#023047]/95 backdrop-blur-md p-4 md:p-10"
            onClick={closeModal}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
              onClick={closeModal}
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
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black/40">
                {modalData.type === 'image' ? (
                  <img
                    src={modalData.src}
                    alt={modalData.caption}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                ) : (
                  <video
                    src={modalData.src}
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    className="max-w-full max-h-[85vh] w-full bg-black"
                  />
                )}
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center pointer-events-none">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{modalData.caption}</h3>
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
