import type { MetadataRoute } from 'next';

import { routing } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date('2026-03-25');

  return routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
