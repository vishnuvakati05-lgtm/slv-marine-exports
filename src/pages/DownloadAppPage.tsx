import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaAndroid, FaGooglePlay, FaBookOpen, FaImages, FaPhoneAlt, FaBell, FaTruck, FaNewspaper, FaDownload, FaQrcode, FaCheckCircle } from 'react-icons/fa';
import { checkIsNativeApp } from '../utils/platform';
import { APK_DOWNLOAD_URL } from '../config/appConfig';
import { Link } from 'react-router-dom';

const features = [
  { icon: <FaBookOpen />, title: 'Product Catalog', desc: 'Browse our complete range of premium seafood with detailed specifications.' },
  { icon: <FaImages />, title: 'Photo Gallery', desc: 'View high-quality images of our products, facilities, and processing.' },
  { icon: <FaTruck />, title: 'Order Tracking', desc: 'Monitor your shipment status in real-time.' },
  { icon: <FaBell />, title: 'Notifications', desc: 'Get instant updates on new arrivals and catalog updates.' },
  { icon: <FaNewspaper />, title: 'Company Updates', desc: 'Stay informed with our latest news and certifications.' },
  { icon: <FaPhoneAlt />, title: 'Quick Contact', desc: 'Reach our sales team directly with a single tap.' },
];

const DownloadAppPage: React.FC = () => {
  const isNative = checkIsNativeApp();

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen pt-20 pb-0 font-sans overflow-hidden transition-colors duration-300">
      <Helmet>
        <title>Download App | SLV Marine Exports</title>
        <meta name="description" content="Download the official SLV Marine Exports Android app to browse products, request quotes, and stay connected on the go." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#023047] via-[#0077B6] to-[#00B4D8] text-white py-16 px-4 md:px-8 lg:px-16 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
          
          {/* Content (Left) */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-semibold tracking-wider mb-6 border border-white/30 backdrop-blur-sm">
              {isNative ? 'OFFICIAL NATIVE APPLICATION' : 'NOW AVAILABLE FOR ANDROID'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isNative ? 'Welcome to SLV Marine Mobile' : 'SLV Marine Exports In Your Pocket'}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
              {isNative 
                ? 'You are currently using the official SLV Marine Exports Android application. Enjoy seamless product browsing, quote requests, and order updates.'
                : 'Experience seamless seafood sourcing. Browse catalogs, request quotes, and track your shipments across India & Nepal on the go with our official mobile application.'
              }
            </p>

            {!isNative ? (
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={APK_DOWNLOAD_URL} 
                  download="SLV_Marine.apk"
                  target={APK_DOWNLOAD_URL.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bg-[#48CAE4] hover:bg-[#3ab8d2] text-[#023047] font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl"
                >
                  <FaAndroid className="text-2xl text-[#023047]" />
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold uppercase">Download Direct APK</div>
                    <div className="text-sm font-bold">Android Application</div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-slv-qr-modal'))}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <FaQrcode className="text-2xl text-[#48CAE4]" />
                  <div className="text-left leading-tight">
                    <div className="text-xs font-semibold uppercase">Scan QR Code</div>
                    <div className="text-xs text-white/80">Open on Phone</div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 mb-12">
                <Link 
                  to="/products"
                  className="bg-[#48CAE4] hover:bg-[#3ab8d2] text-[#023047] font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl"
                >
                  <FaBookOpen /> Browse Catalog
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm transition-colors"
                >
                  <FaPhoneAlt /> Contact Support
                </Link>
              </div>
            )}

            <div className="flex items-center gap-6 text-sm opacity-80 border-t border-white/20 pt-6 max-w-md">
              <div><span className="font-bold block">Version</span> 3.0.0</div>
              <div><span className="font-bold block">Status</span> {isNative ? 'Installed & Active' : 'Ready to Install'}</div>
              <div><span className="font-bold block">Requires</span> Android 6.0+</div>
            </div>
          </motion.div>

          {/* Phone Mockup (Right) */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#48CAE4] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
            
            {/* CSS Phone Frame */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col ring-4 ring-gray-900/50">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-2xl w-32 mx-auto z-20"></div>
              
              {/* App UI Placeholder */}
              <div className="flex-1 bg-gray-50 relative flex flex-col">
                <div className="bg-[#0077B6] pt-10 pb-4 px-4 text-white">
                  <h3 className="font-bold text-lg">SLV Marine Exports</h3>
                  <p className="text-xs opacity-80">Premium Seafood Partner</p>
                </div>
                
                <div className="p-4 flex-1">
                  <div className="bg-white rounded-xl shadow-sm p-3 mb-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0077B6]"><FaBookOpen/></div>
                    <div><div className="font-bold text-sm">Product Catalog</div><div className="text-[10px] text-gray-500">Browse categories</div></div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-3 mb-3 border border-gray-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#00B4D8]"><FaTruck/></div>
                    <div><div className="font-bold text-sm">Track Order</div><div className="text-[10px] text-gray-500">Live shipment updates</div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center text-gray-400 flex-col"><FaImages className="mb-2"/> <span className="text-xs">Gallery</span></div>
                    <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center text-gray-400 flex-col"><FaPhoneAlt className="mb-2"/> <span className="text-xs">Contact</span></div>
                  </div>
                </div>
                
                {/* Bottom Nav */}
                <div className="bg-white border-t p-3 flex justify-around text-gray-400 text-xl">
                  <div className="text-[#0077B6]"><FaBookOpen/></div>
                  <div><FaImages/></div>
                  <div><FaBell/></div>
                  <div><FaPhoneAlt/></div>
                </div>
              </div>
            </div>
            
            {/* Status Card */}
            <motion.div 
              className="absolute -left-10 bottom-20 bg-white dark:bg-[#1E293B] p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0077B6]/10 text-[#0077B6] dark:text-[#48CAE4] rounded-xl flex items-center justify-center text-xl">
                  {isNative ? <FaCheckCircle className="text-emerald-500" /> : <FaQrcode />}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">{isNative ? 'App Installed' : 'Direct Installation'}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{isNative ? 'Running v3.0.0' : 'Android 6.0+ Supported'}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#023047] dark:text-white mb-4">App Features</h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to manage your seafood sourcing efficiently, right at your fingertips.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-[#e6f0f7] dark:bg-white/10 text-[#0077B6] dark:text-[#48CAE4] rounded-xl flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Installation Guide (Only shown on website, hidden in native app) */}
      {!isNative && (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#0d1f3c] border-t border-gray-100 dark:border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#023047] dark:text-white mb-4">How to Install (APK)</h2>
              <p className="text-gray-600 dark:text-slate-400">Follow these simple steps to install the app directly on your Android device.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-slate-700 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-50 dark:bg-[#0077B6]/20 text-[#0077B6] dark:text-[#48CAE4] rounded-full flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-[#0d1f3c] shadow-md mb-6"><FaDownload/></div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">1. Download APK</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm">Click the download button above to save the .apk file to your device.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-50 dark:bg-yellow-500/20 text-[#48CAE4] rounded-full flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-[#0d1f3c] shadow-md mb-6">⚙️</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">2. Allow Unknown Sources</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm">Go to Settings &gt; Security and enable "Install from Unknown Sources".</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-green-50 dark:bg-green-500/20 text-[#00B4D8] rounded-full flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-[#0d1f3c] shadow-md mb-6">✅</div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">3. Install & Open</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm">Open the downloaded file, tap Install, and launch the app.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default DownloadAppPage;
