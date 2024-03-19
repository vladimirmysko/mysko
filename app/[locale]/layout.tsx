import type { Metadata } from 'next';
import { getI18n } from '@/locales/server';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Providers } from './providers';

const interDisplay = localFont({
  src: [
    {
      path: '../../fonts/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter-display',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={params.locale}>
      <body
        className={cn(
          interDisplay.variable,
          'bg-white font-sans text-base text-black antialiased selection:bg-black selection:text-white dark:bg-black dark:text-white'
        )}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <Providers locale={params.locale}>{children}</Providers>
      </body>
    </html>
  );
}
