import { motion } from 'framer-motion';
import { FiSmartphone, FiDownload, FiCheckCircle, FiWifi, FiPackage, FiShield, FiBell } from 'react-icons/fi';
import { FaAndroid, FaQrcode } from 'react-icons/fa';
import { checkIsNativeApp } from '../../utils/platform';
import { APK_DOWNLOAD_URL } from '../../config/appConfig';

const features = [
  { icon: FiPackage, text: 'Full Product Catalog' },
  { icon: FiShield, text: 'Verified Export Quality' },
  { icon: FiBell, text: 'Real-time Order Updates' },
  { icon: FiWifi, text: 'Fast & Light Offline Support' },
  { icon: FiDownload, text: 'Easy Catalog Downloads' },
  { icon: FiCheckCircle, text: 'Direct Inquiry Access' },
];

const steps = [
  { num: '01', title: 'Download the APK', desc: 'Tap the button below to download the SLV Marine app directly.' },
  { num: '02', title: 'Allow Installation', desc: 'Enable "Install from Unknown Sources" in your Android settings.' },
  { num: '03', title: 'Install & Explore', desc: 'Open the app, browse products, and send enquiries instantly.' },
];

const APKDownloadSection = () => {
  // Do not render download section when running inside native Android / iOS app
  if (checkIsNativeApp()) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F1FAFC] dark:from-[#0d1f3c] dark:to-[#023047] transition-colors duration-300 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#00B4D8] uppercase mb-3">Mobile App</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Take SLV Marine <span className="text-[#0077B6] dark:text-[#48CAE4]">everywhere</span> you go
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Our Android app puts your entire product catalog, quotes, and order status in your pocket.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-[#0077B6]/20 blur-[60px] rounded-full scale-75 translate-y-8" />

              {/* Phone frame */}
              <div className="relative w-52 sm:w-64 bg-[#023047] rounded-[2.5rem] border-4 border-slate-700 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#023047] rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="pt-8 pb-4 px-3 bg-gradient-to-b from-[#023047] to-[#0077B6]/60 min-h-[420px] sm:min-h-[520px]">
                  {/* App header */}
                  <div className="flex items-center gap-2 px-2 py-3 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center">
                      <span className="text-white font-black text-[9px]">SLV</span>
                    </div>
                    <span className="text-white text-xs font-bold">SLV Marine</span>
                  </div>

                  {/* Hero card in app */}
                  <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-4 mb-3 text-white">
                    <p className="text-[8px] opacity-70 mb-1 font-medium">TODAY'S FEATURED</p>
                    <p className="text-sm font-extrabold leading-tight">Premium Tiger Prawns</p>
                    <p className="text-[9px] opacity-80 mt-1">Export Grade A · IQF Frozen</p>
                    <div className="mt-3 bg-[#48CAE4] text-[#023047] text-[8px] font-bold px-2 py-1 rounded-full inline-block">
                      Get Quote →
                    </div>
                  </div>

                  {/* Mini product grid */}
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    {['🦐 Shrimp', '🐟 Fish', '🦀 Crab', '🦑 Squid'].map(p => (
                      <div key={p} className="bg-white/10 rounded-xl px-2 py-2 text-white text-[8px] font-semibold text-center">
                        {p}
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav in app */}
                  <div className="flex justify-around bg-white/10 rounded-2xl px-2 py-2 mt-auto">
                    {['🏠', '📦', '🖼️', '📞'].map((icon, i) => (
                      <div key={i} className={`text-sm ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>{icon}</div>
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-2 bg-[#023047]">
                  <div className="w-16 h-1 bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-12 sm:-right-8 bg-white dark:bg-[#0d1f3c] rounded-xl shadow-xl px-3 py-2 border border-slate-100 dark:border-white/10"
              >
                <div className="flex items-center gap-2">
                  <FaAndroid className="text-[#3ddc84] w-4 h-4" />
                  <span className="text-[10px] font-bold text-slate-700 dark:text-white">Android 6.0+</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-4 bottom-20 sm:-left-8 bg-[#48CAE4] rounded-xl shadow-xl px-3 py-2"
              >
                <div className="flex items-center gap-1.5">
                  <FiShield className="text-[#023047] w-3.5 h-3.5 fill-current" />
                  <span className="text-[10px] font-extrabold text-[#023047]">Official App</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="order-1 lg:order-2"
          >
            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-white dark:bg-[#0d1f3c] border border-slate-100 dark:border-white/6 rounded-xl px-4 py-3 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0077B6]/10 dark:bg-[#0077B6]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0077B6] dark:text-[#48CAE4]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-[10px] font-black text-white">{num}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-white">{title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download & QR buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={APK_DOWNLOAD_URL}
                download="SLV_Marine.apk"
                target={APK_DOWNLOAD_URL.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0077B6] hover:bg-[#005988] text-white font-bold py-4 px-6 rounded-2xl transition-all hover:shadow-[0_8px_28px_rgba(0,91,150,0.4)] hover:-translate-y-0.5 active:scale-95 text-sm"
              >
                <FaAndroid className="w-5 h-5 text-[#3ddc84]" />
                Download Direct APK
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-slv-qr-modal'))}
                className="flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 font-bold py-4 px-6 rounded-2xl transition-all text-sm cursor-pointer"
              >
                <FaQrcode className="w-4 h-4 text-[#0077B6] dark:text-[#48CAE4]" />
                Scan QR Code
              </button>
            </div>

            <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-600 flex items-center gap-1.5">
              <FiSmartphone className="w-3.5 h-3.5" />
              Free download · No subscription required · Android 6.0+
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default APKDownloadSection;
