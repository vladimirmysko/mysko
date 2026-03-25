import Link from 'next/link';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const linkClassName =
  'underline decoration-neutral-300 underline-offset-2 transition-all duration-100 hover:decoration-neutral-400';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'HomePage',
  });

  return (
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
                <Link
                  href="https://wkitu.kz"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <p className="text-sm">{t('mysko')}</p>
          <p className="text-sm">{t('philosophy')}</p>
          <p className="text-sm">
            {t.rich('contact', {
              email: (chunks) => (
                <Link href="mailto:vladimir.mysko@gmail.com" className={linkClassName}>
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </article>
    </main>
  );
}
