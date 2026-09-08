# 🌊 SLV Marine Exports — Web & Mobile Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

The official web platform and Android application for **SLV Marine Exports**, a premier seafood processing and export enterprise based in Andhra Pradesh, India, serving domestic and international seafood markets across India, Nepal, and worldwide.

---

## 🚀 Key Features

* **🌐 Cross-Platform Architecture**: Unified codebase powering both the high-performance web portal and native Android application using Capacitor.
* **🦐 Interactive Product Catalog**: Comprehensive seafood portfolio (Shrimp, Black Tiger Prawns, Lobster, Crab, Pomfret, Squid, Octopus, and Breaded Value-Added products) with downloadable specs.
* **💬 Smart Quote & WhatsApp Order System**: Integrated Quote Assistant and one-tap WhatsApp order inquiry directly connected to the sales team.
* **🌍 Multi-Language Support**: Built-in localization support for international and regional clients (English, Telugu, Hindi, Tamil, and Nepali).
* **🌓 Dark & Light Theme**: Seamless theme switcher with persistent user preference and system color-scheme detection.
* **📱 Android APK Distribution**: Dedicated in-app download center and QR-code modal for scanning and downloading the native Android APK.
* **⚡ Ultra-Fast Edge Delivery**: Pre-configured for deployment on Cloudflare Pages and Workers Static Assets with client-side SPA routing support.
* **🔍 Search Engine Optimized**: Built-in OpenGraph metadata, Schema.org JSON-LD structured data, dynamic titles via `react-helmet-async`, `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 8](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Mobile Runtime**: [@capacitor/core](https://capacitorjs.com/) & [@capacitor/android](https://capacitorjs.com/)
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
* **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📂 Project Structure

```
├── android/               # Native Android Capacitor project
├── app-release/           # Android APK builds (Git LFS)
├── public/                # Static public assets (robots, sitemap, certificates, icons)
│   ├── certificates/      # Company export and LEI certifications
│   ├── products/          # High-resolution product imagery
│   └── _redirects         # Cloudflare Pages SPA redirection rules
├── src/
│   ├── assets/            # App media, brand assets, and video walk-throughs
│   ├── components/        # Reusable UI components (layout, modals, smart bot)
│   ├── config/            # Application environment configuration
│   ├── context/           # Theme and Language context providers
│   ├── data/              # Product catalog data and country codes
│   ├── pages/             # Route views (Home, Products, Gallery, Contact, App Download)
│   ├── utils/             # Platform detection utilities (Web vs. Native)
│   ├── App.tsx            # Main router and application setup
│   └── main.tsx           # React entrypoint
├── capacitor.config.ts    # Capacitor mobile configuration
├── vite.config.ts         # Vite build configuration
└── wrangler.json          # Cloudflare deployment configuration
```

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 20 or higher recommended)
* `npm` (version 9 or higher)
* [Android Studio](https://developer.android.com/studio) *(optional, for native Android development)*

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishnuvakati05-lgtm/slv-version3.git
   cd slv-version3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

* `npm run dev` — Starts the local Vite development server with Hot Module Replacement (HMR).
* `npm run build` — Type-checks TypeScript code and compiles production assets into `dist/`.
* `npm run preview` — Previews the production build locally.
* `npm run deploy` — Builds and deploys directly to Cloudflare via Wrangler.

---

## 📱 Mobile (Android) Build

To sync web assets and build the native Android application:

```bash
# 1. Build web production bundle
npm run build

# 2. Sync web assets into Android project
npx cap sync android

# 3. Open project in Android Studio to build APK or run on a device
npx cap open android
```

---

## ☁️ Deployment

### Cloudflare Pages (Recommended)
This repository is configured for automated CI/CD with Cloudflare Pages:
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Root Directory**: `/`

### Wrangler CLI
You can also deploy manually to Cloudflare using the included `wrangler.jsonc`:
```bash
npm run deploy
```

---

## 📄 License & Contact

Copyright © 2026 **SLV Marine Exports**. All rights reserved.

* **Headquarters**: Kodavalur, Gandavaram, Nellore, Andhra Pradesh - 524366, India
* **Website**: [slvmarineexports.com](https://slvmarineexports.com)
* **Phone / WhatsApp**: +91 8977770455
