import { Metadata } from 'next';
import { getI18n } from '@/locales/server';

import { LinksList } from '@/components/links-list';

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

  const contacts = [
    { label: t('home.tel_anton', { tel: '+7 (000) 000 00 00' }), href: 'tel:80000000000' },
    { label: t('home.email_anton', { email: '+7 (000) 000 00 00' }), href: 'mailto:80000000000' },
    { label: t('home.tel_vladimir', { tel: '+7 (708) 726 95 44' }), href: 'tel:87087269544' },
    {
      label: t('home.email_vladimir', { email: 'vladimir.mysko@gmail.com' }),
      href: 'mailto:vladimir.mysko@gmail.com',
    },
  ];

  const socials = [
    { label: 'Dribbble', href: 'https://dribbble.com/vladimirmysko' },
    { label: 'Twitter / X', href: 'https://twitter.com/vladimirmysko' },
  ];

  const works = [
    { label: t('home.online_testing'), href: 'works/online-testing-for-wkitu' },
    { label: t('home.plagiarism_search'), href: 'works/plagiarism-search-for-wkitu' },
  ];

  const technologies = [
    { label: 'Next.js', href: 'https://nextjs.org/' },
    { label: 'Python', href: 'https://www.python.org/' },
    { label: 'Figma', href: 'https://www.figma.com/' },
  ];

  const descriptionList: Description[] = [
    { term: 'MYSKO', data: t('home.web_development_design') },
    { term: t('home.information'), data: t('home.mysko_offers') },
    { term: t('home.works'), data: <LinksList items={works} /> },
    { term: t('home.contacts'), data: <LinksList items={contacts} /> },
    { term: t('home.socials'), data: <LinksList items={socials} /> },
    { term: t('home.technologies'), data: <LinksList items={technologies} /> },
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
