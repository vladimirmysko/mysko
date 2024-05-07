import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Providers } from '@/app/[locale]/providers';

const interDisplay = localFont({
  src: [
    {
      path: '../../fonts/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter-display',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={cn(
          interDisplay.variable,
          'font-sans text-base antialiased',
          'bg-white text-black selection:bg-black selection:text-white',
          'dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black'
        )}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          locale={params.locale}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
