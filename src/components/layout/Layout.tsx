import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { LoadingScreen } from './LoadingScreen';
import { MobileBottomNav } from './MobileBottomNav';
import { ScrollToTop } from './ScrollToTop';
import { SmartQuoteBot } from '../chat/SmartQuoteBot';
import { QRCodeModal } from './QRCodeModal';

export const Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show brand loading screen briefly (800ms) on initial mount
    const timer = setTimeout(() => {
      setLoading(false);
      window.dispatchEvent(new Event('resize'));
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, loading]);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: 'var(--color-bg-light)',
        color: 'var(--color-text-light)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0077B6] focus:text-white focus:rounded-lg focus:shadow-xl font-bold text-sm"
      >
        Skip to main content
      </a>

      {/* Loading screen sits on top and fades out */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Header */}
      <Header />

      {/* Main content with per-route page transition */}
      <main id="main-content" className="flex-1 w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingButtons />
      <SmartQuoteBot />
      <QRCodeModal />
      <ScrollToTop />
      <MobileBottomNav />
    </div>
  );
};
