export const getSiteUrl = () => {
  // Prefer explicit env var; fallback to Vercel URL or localhost
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (envUrl) {
    // Ensure protocol present
    if (envUrl.startsWith('http://') || envUrl.startsWith('https://')) return envUrl.replace(/\/$/, '');
    return `https://${envUrl}`.replace(/\/$/, '');
  }
  return 'http://localhost:3000';
};

export const absoluteUrl = (path: string) => {
  const base = getSiteUrl();
  if (!path) return base;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const SITE_NAME = 'Muhammad Damar Kusumo';
export const SITE_TAGLINE = 'Google Certified Associate Cloud Engineer • Full-Stack Developer';
export const SITE_DESCRIPTION = 'Personal portfolio of Muhammad Damar Kusumo — Google Certified Associate Cloud Engineer and Full-Stack Developer. Projects, skills, and contact information.';