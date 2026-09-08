import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  /** Short label above the heading (e.g. "About Us") */
  badge?: string;
  /** Main h1 heading */
  title: string;
  /** Optional highlighted span inside the title */
  highlight?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Optional Unsplash image URL — if omitted falls back to ocean gradient */
  image?: string;
  /** Accent colour for the badge dot and highlight (default: #48CAE4) */
  accent?: string;
}

/**
 * Reusable full-width hero banner for interior pages.
 * - Handles the fixed header offset (pt-20 sm:pt-24)
 * - Adds a mobile bottom-nav spacer comment — pages that are short should also add pb-24 md:pb-0
 * - Dark mode compatible
 */
const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  image,
  accent = '#48CAE4',
}) => {
  return (
    <section className="relative overflow-hidden bg-[#023047] pt-20 sm:pt-24 pb-14 sm:pb-20">
      {/* Background image */}
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#023047]/95 to-[#023047]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/80 to-transparent" />
        </>
      )}

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-0 w-80 h-80 rounded-full bg-[#0077B6]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#00B4D8]/10 blur-[80px]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {badge && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-4 text-[0.65rem] font-bold tracking-[0.18em] uppercase"
            style={{ color: accent }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            {badge}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          {highlight ? (
            <>
              {title}{' '}
              <span style={{ color: accent }}>{highlight}</span>
            </>
          ) : title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 mx-auto h-1 w-16 rounded-full"
          style={{ background: `linear-gradient(90deg, #0077B6, ${accent})` }}
        />
      </div>
    </section>
  );
};

export default PageHero;
