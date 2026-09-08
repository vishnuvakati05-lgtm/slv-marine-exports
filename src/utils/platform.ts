import { Capacitor } from '@capacitor/core';

/**
 * Robust check to determine if the app is running as a native mobile application (Android/iOS via Capacitor)
 * vs running in a standard web browser.
 */
export const checkIsNativeApp = (): boolean => {
  if (typeof window === 'undefined') return false;

  // 1. Capacitor API checks
  try {
    if (Capacitor.isNativePlatform()) return true;
    const platform = Capacitor.getPlatform();
    if (platform === 'android' || platform === 'ios') return true;
  } catch (e) {
    // Fallback if Capacitor API throws
  }

  // 2. Window object checks
  const win = window as any;
  if (win.Capacitor?.isNativePlatform?.()) return true;
  if (win.Capacitor?.getPlatform?.() && win.Capacitor.getPlatform() !== 'web') return true;

  // 3. Native Android WebView / Capacitor user agent checks
  const ua = window.navigator.userAgent || '';
  if (/Capacitor/i.test(ua) || (window.location.protocol === 'capacitor:')) {
    return true;
  }

  return false;
};
