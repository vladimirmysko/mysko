import { Metadata } from 'next';
import { getI18n } from '@/locales/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('home.set_title'),
    description: t('home.seo_description'),
  };
}

export default async function HomePage() {
  const t = await getI18n();

  return <main className="flex min-h-svh flex-col items-stretch"></main>;
}
