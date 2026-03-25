import { ImageResponse } from 'next/og';
import { hasLocale, type Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';

export const alt = 'Vladimir Mysko — developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (hasLocale(routing.locales, raw) ? raw : routing.defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: '#0a0a0a',
          color: '#fafafa',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          {t('name')}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: '#a3a3a3',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {t('metaTitle')}
        </div>
      </div>
    ),
    { ...size },
  );
}
