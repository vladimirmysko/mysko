import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { getMetadataBase, getSiteUrl } from '@/lib/site-url';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
  weight: 'variable',
  axes: ['opsz'],
});

const ogLocaleByLocale: Record<string, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  kk: 'kk_KZ',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps<'/[locale]'>, 'children'>) {
  const { locale } = await props.params;
  const loc = locale as Locale;

  const t = await getTranslations({
    locale: loc,
    namespace: 'LocaleLayout',
  });

  const siteUrl = getSiteUrl();
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${siteUrl}/${l}`]),
  );
  languages['x-default'] = `${siteUrl}/${routing.defaultLocale}`;

  const alternateLocales = routing.locales.filter((l) => l !== locale).map((l) => ogLocaleByLocale[l]);

  return {
    metadataBase: getMetadataBase(),
    title: {
      default: t('title'),
      template: '%s | Mysko',
    },
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Mysko',
      locale: ogLocaleByLocale[locale],
      alternateLocale: alternateLocales,
    },
    twitter: {
      card: 'summary_large_image',
    },
  } satisfies Metadata;
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-normal">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
