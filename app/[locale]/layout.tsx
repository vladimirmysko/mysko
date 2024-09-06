import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getI18n } from '@/locales/server';
import { cn } from '@/utils';

import { I18nProviderClient } from '@/locales/client';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
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
      className={cn(geistSans.variable, geistMono.variable, 'scroll-smooth')}
      style={{ textRendering: 'optimizeLegibility' }}
    >
      <body className="font-sans antialiased">
        <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
