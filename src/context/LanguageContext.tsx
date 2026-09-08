import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te' | 'hi' | 'ne' | 'ta';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', flag: '🇳🇵' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    services: 'Services',
    quality: 'Quality',
    markets: 'Markets',
    certifications: 'Certifications',
    gallery: 'Gallery',
    contact: 'Contact',
    downloadApp: 'Download App',
    startConversation: 'Start a conversation',
    requestQuote: 'Request Quote',
    downloadSpecSheet: 'Download Spec Sheet',
    orderOnWhatsApp: 'Order via WhatsApp',
    contactUs: 'Contact Us',
    selectLanguage: 'Select Language',
    allProducts: 'All Products',
    tagline: 'Premium Quality Frozen Seafood Exporter Across India & Nepal',
    heroBadge: 'ISO & HACCP CERTIFIED SEAFOOD EXPORTER',
    heroTitle: 'Ocean Freshness,',
    heroHighlight: 'Delivered Globally',
    heroSubtitle: 'Connecting India\'s finest seafood across the nation and delivering directly to Nepal.',
    exploreCatalog: 'Explore Catalog',
    ourLegacy: 'Our Legacy',
    legacyTitle: 'Delivering Excellence Across India & Nepal',
    whyChooseUs: 'Why Choose Us',
    coldChain: 'Unbroken Cold Chain',
    qualityControl: 'Multi-Point Quality Control',
    customPackaging: 'Custom & OEM Packaging',
    fastDelivery: 'Fast & Secure Delivery',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved.',
  },
  te: {
    home: 'హోమ్',
    about: 'మా గురించి',
    products: 'ఉత్పత్తులు',
    services: 'సేవలు',
    quality: 'నాణ్యత',
    markets: 'మార్కెట్లు',
    certifications: 'సర్టిఫికెట్లు',
    gallery: 'గ్యాలరీ',
    contact: 'సంప్రదించండి',
    downloadApp: 'యాప్ డౌన్‌లోడ్',
    startConversation: 'సంభాషణ ప్రారంభించండి',
    requestQuote: 'కోట్ అడగండి',
    downloadSpecSheet: 'స్పెసిఫికేషన్ షీట్',
    orderOnWhatsApp: 'వాట్సాప్ ద్వారా ఆర్డర్ చేయండి',
    contactUs: 'మమ్మల్ని సంప్రదించండి',
    selectLanguage: 'భాషను ఎంచుకోండి',
    allProducts: 'అన్ని ఉత్పత్తులు',
    tagline: 'భారతదేశం మరియు నేపాల్‌ వ్యాప్తంగా ప్రీమియం సీఫుడ్ ఎగుమతిదారులు',
    heroBadge: 'ISO & HACCP ధృవీకరించబడిన సీఫుడ్ ఎగుమతిదారు',
    heroTitle: 'సముద్రపు తాజాదనం,',
    heroHighlight: 'నేరుగా మీ వద్దకు',
    heroSubtitle: 'భారతదేశంలోని అత్యుత్తమ సీఫుడ్‌ను దేశమంతటా మరియు నేపాల్‌కు అందజేస్తున్నాము.',
    exploreCatalog: 'కాటలాగ్ చూడండి',
    ourLegacy: 'మా వారసత్వం',
    legacyTitle: 'భారతదేశం & నేపాల్ వ్యాప్తంగా శ్రేష్ఠమైన సేవలు',
    whyChooseUs: 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి',
    coldChain: 'నిరంతర కోల్డ్ చైన్',
    qualityControl: 'కఠినమైన నాణ్యత తనిఖీ',
    customPackaging: 'కస్టమ్ ప్యాకేజింగ్ సేవలు',
    fastDelivery: 'వేగవంతమైన మరియు సురక్షితమైన డెలివరీ',
    privacyPolicy: 'గోప్యతా విధానం',
    termsOfService: 'సేవా నిబంధనలు',
    allRightsReserved: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    products: 'उत्पाद',
    services: 'सेवाएं',
    quality: 'गुणवत्ता',
    markets: 'बाजार',
    certifications: 'प्रमाणपत्र',
    gallery: 'गैलरी',
    contact: 'संपर्क करें',
    downloadApp: 'ऐप डाउनलोड',
    startConversation: 'बातचीत शुरू करें',
    requestQuote: 'कोटेशन मांगें',
    downloadSpecSheet: 'स्पेसिफिकेशन शीट',
    orderOnWhatsApp: 'व्हाट्सएप से ऑर्डर करें',
    contactUs: 'संपर्क करें',
    selectLanguage: 'भाषा चुनें',
    allProducts: 'सभी उत्पाद',
    tagline: 'भारत और नेपाल में प्रीमियम फ्रोजन सीफूड निर्यातक',
    heroBadge: 'ISO और HACCP प्रमाणित सीफूड निर्यातक',
    heroTitle: 'समुद्र की ताजगी,',
    heroHighlight: 'आपके द्वार तक',
    heroSubtitle: 'भारत के सर्वश्रेष्ठ सीफूड को पूरे देश और नेपाल में पहुंचाना।',
    exploreCatalog: 'कैटलॉग देखें',
    ourLegacy: 'हमारी विरासत',
    legacyTitle: 'भारत और नेपाल में उत्कृष्टता की डिलीवरी',
    whyChooseUs: 'हमें क्यों चुनें',
    coldChain: 'अनटच्ड कोल्ड चेन',
    qualityControl: 'सख्त गुणवत्ता नियंत्रण',
    customPackaging: 'कस्टम पैकेजिंग',
    fastDelivery: 'तेज और सुरक्षित डिलीवरी',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
  },
  ne: {
    home: 'गृहपृष्ठ',
    about: 'हाम्रो बारेमा',
    products: 'उत्पादनहरू',
    services: 'सेवाहरू',
    quality: 'गुणस्तर',
    markets: 'बजारहरू',
    certifications: 'प्रमाणपत्रहरू',
    gallery: 'ग्यालरी',
    contact: 'सम्पर्क',
    downloadApp: 'एप डाउनलोड',
    startConversation: 'कुराकानी सुरु गर्नुहोस्',
    requestQuote: 'कोटेसन माग्नुहोस्',
    downloadSpecSheet: 'विवरण पत्र डाउनलोड',
    orderOnWhatsApp: 'व्हाट्सएपबाट अर्डर गर्नुहोस्',
    contactUs: 'हामीलाई सम्पर्क गर्नुहोस्',
    selectLanguage: 'भाषा छान्नुहोस्',
    allProducts: 'सबै उत्पादनहरू',
    tagline: 'भारत र नेपालभरि प्रिमियम फ्रोजन सीफूड निर्यातकर्ता',
    heroBadge: 'ISO र HACCP प्रमाणित सीफूड निर्यातकर्ता',
    heroTitle: 'समुद्रको ताजगी,',
    heroHighlight: 'सिधै तपाईंको नजिक',
    heroSubtitle: 'भारतको उत्कृष्ट सीफूड नेपाल र भारतभरि सुरक्षित रूपमा पुर्‍याउँदै।',
    exploreCatalog: 'क्याटलग हेर्नुहोस्',
    ourLegacy: 'हाम्रो विरासत',
    legacyTitle: 'भारत र नेपालभरि उत्कृष्ट सेवा',
    whyChooseUs: 'हामीलाई किन छान्ने',
    coldChain: 'निरन्तर कोल्ड चेन',
    qualityControl: 'कडा गुणस्तर नियन्त्रण',
    customPackaging: 'कस्टम प्याकेजिङ',
    fastDelivery: 'छिटो र सुरक्षित डेलिभरी',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवाका शर्तहरू',
    allRightsReserved: 'सबै अधिकार सुरक्षित।',
  },
  ta: {
    home: 'முகப்பு',
    about: 'எங்களைப் பற்றி',
    products: 'தயாரிப்புகள்',
    services: 'சேவைகள்',
    quality: 'தரம்',
    markets: 'சந்தைகள்',
    certifications: 'சான்றிதழ்கள்',
    gallery: 'கேலரி',
    contact: 'தொடர்புகொள்ள',
    downloadApp: 'செயலி பதிவிறக்கம்',
    startConversation: 'உரையாடலைத் தொடங்குங்கள்',
    requestQuote: 'விலைப்புள்ளி கேட்க',
    downloadSpecSheet: 'விவரக்குறிப்பு தாள்',
    orderOnWhatsApp: 'வாட்ஸ்அப் மூலம் ஆர்டர் செய்யுங்கள்',
    contactUs: 'எங்களைத் தொடர்பு கொள்ளவும்',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    allProducts: 'அனைத்து தயாரிப்புகள்',
    tagline: 'இந்தியா மற்றும் நேபாளம் முழுவதும் பிரீமியம் கடல் உணவு ஏற்றுமதியாளர்',
    heroBadge: 'ISO & HACCP சான்றளிக்கப்பட்ட கடல் உணவு ஏற்றுமதியாளர்',
    heroTitle: 'கடல் புத்துணர்ச்சி,',
    heroHighlight: 'நேரடியாக உங்களிடம்',
    heroSubtitle: 'இந்தியாவின் மிகச்சிறந்த கடல் உணவுகளை இந்தியா மற்றும் நேபாளம் முழுவதும் விநியோகிக்கிறோம்.',
    exploreCatalog: 'பட்டியலைப் பார்க்கவும்',
    ourLegacy: 'எங்கள் பாரம்பரியம்',
    legacyTitle: 'இந்தியா & நேபாளம் முழுவதும் சிறந்த சேவை',
    whyChooseUs: 'ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்',
    coldChain: 'தொடர்ச்சியான கோல்ட் செயின்',
    qualityControl: 'கடுமையான தரக் கட்டுப்பாடு',
    customPackaging: 'வாடிக்கையாளர் பேக்கேஜிங்',
    fastDelivery: 'வேகமான மற்றும் பாதுகாப்பான விநியோகம்',
    privacyPolicy: 'தனியுரிமைக் கொள்கை',
    termsOfService: 'சேவை நிபந்தனைகள்',
    allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currentLangObj: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const triggerGoogleTranslate = (lang: Language) => {
  try {
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang}; path=/;`;

    // Update select element if present
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = lang;
      selectElem.dispatchEvent(new Event('change'));
    }
  } catch (err) {
    console.error('Translation error:', err);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('slv_language');
    if (saved && ['en', 'te', 'hi', 'ne', 'ta'].includes(saved)) {
      return saved as Language;
    }
    return 'en';
  });

  useEffect(() => {
    if (language !== 'en') {
      triggerGoogleTranslate(language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('slv_language', lang);
    triggerGoogleTranslate(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentLangObj }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
