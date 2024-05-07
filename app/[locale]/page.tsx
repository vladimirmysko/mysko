import { Metadata } from 'next';
import { getI18n } from '@/locales/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('home.set_title'),
    description: t('home.seo_description'),
  };
}

interface Description {
  term: string;
  data: string | React.ReactElement;
}

export default async function HomePage() {
  const t = await getI18n();

  const descriptionList: Description[] = [
    { term: 'MYSKO', data: t('home.web_development_design') },
    { term: t('home.information'), data: t('home.web_development_design') },
    { term: t('home.contacts'), data: t('home.web_development_design') },
    { term: t('home.works'), data: t('home.web_development_design') },
    { term: t('home.technologies'), data: t('home.web_development_design') },
  ];

  return (
    <main className="flex min-h-svh flex-col items-stretch">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-stretch gap-10 p-5">
        <dl className="flex flex-col items-stretch gap-10">
          {descriptionList.map((description) => (
            <div key={description.term} className="flex flex-row gap-5">
              <dt className="flex-1 text-right font-semibold tracking-tight">{description.term}</dt>
              <dd className="flex-1">{description.data}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
