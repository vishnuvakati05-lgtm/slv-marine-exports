// Application configuration
// In Cloudflare Pages, set VITE_APK_DOWNLOAD_URL under Environment Variables
// to your Cloudflare R2 bucket public URL (e.g. https://pub-xxxx.r2.dev/SLV_Marine.apk)
export const APK_DOWNLOAD_URL: string = 
  import.meta.env.VITE_APK_DOWNLOAD_URL || 
  'https://pub-0a8e13e663c74f94aea1999ef2b3d61c.r2.dev/SLV_Marine.apk';
