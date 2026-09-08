import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiPackage, FiImage, FiPhone, FiGrid } from 'react-icons/fi';

const navItems = [
  { name: 'Home',     path: '/',         icon: FiHome,    end: true  },
  { name: 'Products', path: '/products', icon: FiPackage, end: false },
  { name: 'Gallery',  path: '/gallery',  icon: FiImage,   end: false },
  { name: 'Services', path: '/services', icon: FiGrid,    end: false },
  { name: 'Contact',  path: '/contact',  icon: FiPhone,   end: false },
];

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  return (
    /* Only visible on mobile (hidden md+) */
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-[80]"
      aria-label="Mobile navigation"
    >
      {/* Frosted glass panel */}
      <div className="bg-white/90 dark:bg-[#023047]/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-white/8 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
        <div className="flex items-stretch h-16">
          {navItems.map(({ name, path, icon: Icon, end }) => {
            const isActive = end
              ? location.pathname === path
              : location.pathname.startsWith(path);

            return (
              <NavLink
                key={name}
                to={path}
                end={end}
                className="relative flex flex-col items-center justify-center flex-1 gap-1 min-w-0 select-none tap-highlight-transparent"
                aria-label={name}
              >
                {/* Active background pill */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-pill"
                      className="absolute inset-x-1.5 inset-y-1.5 rounded-xl bg-[#0077B6]/10 dark:bg-[#0077B6]/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1, y: isActive ? -1 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative z-10"
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#0077B6] dark:text-[#48CAE4]'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </motion.div>

                {/* Label */}
                <span
                  className={`relative z-10 text-[10px] font-semibold leading-none transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0077B6] dark:text-[#48CAE4]'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {name}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Safe area spacer for iPhone home indicator */}
        <div className="h-[env(safe-area-inset-bottom,0px)]" />
      </div>
    </nav>
  );
};
