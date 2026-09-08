import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCopy, FiCheck, FiDownload, FiShare2, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  url?: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  url = typeof window !== 'undefined' ? window.location.origin : 'https://slvmarine.com'
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  React.useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener('open-slv-qr-modal', handleOpenEvent);
    return () => window.removeEventListener('open-slv-qr-modal', handleOpenEvent);
  }, []);

  const targetUrl = url || 'https://slvmarine.com';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const DOMURL = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = 3; // High resolution PNG
      canvas.width = (svg.clientWidth || 256) * scale;
      canvas.height = (svg.clientHeight || 256) * scale;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw white background for transparent QR
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const png = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = png;
        downloadLink.download = 'slv-marine-qr.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      DOMURL.revokeObjectURL(url);
    };
    image.src = url;
  };

  const handleShare = async () => {
    if ('share' in navigator) {
      try {
        await navigator.share({
          title: 'SLV Marine - Premium Seafood Exports',
          text: 'Explore premium seafood exports or open the SLV Marine App!',
          url: targetUrl
        });
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#023047]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative my-auto w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#0F172A] p-6 sm:p-8 text-center shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close QR Modal"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
            >
              <FiX size={22} />
            </button>

            {/* Header / Title */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#023047] text-white shadow-lg shadow-[#0077B6]/30">
              <FiSmartphone size={26} />
            </div>

            <h3 className="text-2xl font-extrabold text-[#023047] dark:text-white tracking-tight">
              Scan & Connect
            </h3>
            <p className="mt-1 mb-6 text-sm text-slate-500 dark:text-slate-400">
              Scan with any mobile camera to open the website or launch the app if installed.
            </p>

            {/* QR Code Canvas Frame */}
            <div className="relative mx-auto mb-6 flex items-center justify-center p-5 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/90 border border-slate-200/80 dark:border-white/10 shadow-inner max-w-[260px]">
              <div ref={qrRef} className="p-3 bg-white rounded-2xl shadow-md">
                <QRCodeSVG
                  value={targetUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: '/favicon.png',
                    x: undefined,
                    y: undefined,
                    height: 36,
                    width: 36,
                    excavate: true
                  }}
                />
              </div>
            </div>

            {/* Target URL Badge */}
            <div className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 py-2 px-3 text-xs font-medium text-slate-600 dark:text-slate-300">
              <FiGlobe className="text-[#0077B6] dark:text-[#48CAE4]" size={14} />
              <span className="truncate max-w-[240px] font-mono">{targetUrl}</span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-500" size={16} />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={16} />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadQR}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0077B6] py-3 text-sm font-bold text-white shadow-md shadow-[#0077B6]/20 hover:bg-[#005f91] transition-all active:scale-95"
              >
                <FiDownload size={16} />
                <span>Save QR</span>
              </button>
            </div>

            {'share' in navigator && (
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#0077B6]/40 dark:border-[#48CAE4]/40 py-2.5 text-xs font-semibold text-[#0077B6] dark:text-[#48CAE4] hover:bg-[#0077B6]/5 transition-all cursor-pointer"
              >
                <FiShare2 size={14} />
                <span>Share App Link</span>
              </button>
            )}

            {/* Help Hint */}
            <p className="mt-4 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
              💡 <span className="font-semibold text-slate-500 dark:text-slate-400">Pro tip:</span> Print this QR code on brochures or business cards to let clients quickly scan and view SLV Marine.
            </p>

            {/* Decorative ambient background glows */}
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#48CAE4]/10 blur-3xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#0077B6]/10 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
