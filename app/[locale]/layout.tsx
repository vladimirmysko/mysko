import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getScopedI18n } from '@/locales/server';
import { cn } from '@/utils/cn';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: 'variable',
  axes: ['opsz'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('seo');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className={cn('scroll-smooth antialiased')}>
      <body
        className={cn(inter.variable, 'font-sans')}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        {children}
      </body>
    </html>
  );
}
