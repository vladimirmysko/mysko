'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {}

export function LocaleSwitcher({ className, ...props }: LocaleSwitcherProps) {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const locales: { value: 'en' | 'ru' | 'kk'; label: string }[] = [
    { value: 'kk', label: 'Қазақ' },
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
  ];

  return (
    <ul className={cn('flex flex-row justify-end gap-6 py-6', className)} {...props}>
      {locales.map((locale) => (
        <li key={locale.value}>
          <button className="underline" onClick={() => changeLocale(locale.value)}>
            {locale.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
