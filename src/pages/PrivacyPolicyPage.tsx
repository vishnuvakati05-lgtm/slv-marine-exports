import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Privacy Policy | SLV Marine Exports</title>
        <meta name="description" content="Privacy Policy for SLV Marine Exports. Learn how we handle your data and protect your privacy." />
      </Helmet>

      <PageHero
        badge="Legal"
        title="Privacy Policy &"
        highlight="Terms"
        subtitle="Your trust matters to us. Here's how we protect your information."
      />

      <section className="py-12 sm:py-20 px-5 sm:px-8 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm p-8 sm:p-12 space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When you use our website or contact form, we may collect:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Your name and company name</li>
              <li>Email address and phone number</li>
              <li>Country of origin</li>
              <li>Product inquiries and messages you send us</li>
              <li>Basic browser/device information for website functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The information we collect is used solely for:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Responding to your product inquiries and quote requests</li>
              <li>Providing customer support and after-sales communication</li>
              <li>Sending relevant product updates (only if you subscribe to our newsletter)</li>
              <li>Improving our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Data Sharing</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We do <strong className="text-slate-800 dark:text-white">not</strong> sell, trade, or rent your personal information to third parties. We may share your data only with trusted service providers who assist us in operating our business (e.g., email services), and they are obligated to keep your information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Cookies</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our website uses local storage to save your theme preference (light/dark mode). We do not use tracking cookies or third-party analytics cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Terms of Service</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              By using this website, you agree to use it for lawful purposes only. All product images, descriptions, and content are the property of SLV Marine Exports Pvt. Ltd. and may not be reproduced without permission. Product availability, pricing, and specifications are subject to change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please{' '}
              <Link to="/contact" className="text-[#0077B6] dark:text-[#48CAE4] font-semibold hover:underline">
                contact us
              </Link>.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-white/10">
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Last updated: August 2026 · SLV Marine Exports Pvt. Ltd., Kodavalur, Gandavaram, Andhra Pradesh 524366, India
            </p>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default PrivacyPolicyPage;
