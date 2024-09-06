import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getI18n } from '@/locales/server';
import { cn } from '@/utils';

import { I18nProviderClient } from '@/locales/client';

const interDisplay = localFont({
  src: [
    {
      path: '../fonts/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/InterDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter-display',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('seo.title'),
    description: t('seo.description'),
  };
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  return (
    <html
      lang={params.locale}
      className={cn(
        interDisplay.variable,
        'scroll-smooth',
        'selection:text-gray-1000 selection:bg-gray-300'
      )}
      style={{ textRendering: 'optimizeLegibility' }}
    >
      <body className="font-sans antialiased">
        <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
