/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (no trailing slash), e.g. https://example.com
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? 'http://localhost:3000';
  return raw.replace(/\/+$/, '');
}

export function getMetadataBase(): URL {
  const origin = getSiteUrl();
  return new URL(origin.endsWith('/') ? origin : `${origin}/`);
}
