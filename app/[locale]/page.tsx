import type { Metadata } from 'next';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/components/link';
import { getSiteUrl } from '@/lib/site-url';

const CONTACT_EMAIL = 'vladimir.mysko@gmail.com';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'HomePage',
  });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `/${locale}`,
    },
    twitter: {
      title: t('metaTitle'),
      description: t('metaDescription'),
    },
  };
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'HomePage',
  });

  const pageUrl = `${getSiteUrl()}/${locale}`;
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t('name'),
    url: pageUrl,
    email: CONTACT_EMAIL,
    jobTitle: t('jsonLdJobTitle'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: t('jsonLdAddressLocality'),
      addressCountry: t('jsonLdAddressCountry'),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-auto">
        <article className="w-full max-w-xl px-4 pt-20 pb-10">
          <header className="flex flex-col gap-1">
            <h1 className="text-sm">{t('name')}</h1>
            <time className="text-sm text-neutral-500">{t('updated')}</time>
          </header>
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-sm">{t('intro')}</p>
            <p className="text-sm">{t('specialization')}</p>
            <p className="text-sm">
              {t.rich('currentWork', {
                org: (chunks) => (
                  <Link href="https://wkitu.kz" target="_blank" rel="noreferrer">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <p className="text-sm">{t('mysko')}</p>
            <p className="text-sm">{t('philosophy')}</p>
            <p className="text-sm">
              {t.rich('contact', {
                email: (chunks) => <Link href={`mailto:${CONTACT_EMAIL}`}>{chunks}</Link>,
              })}
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
