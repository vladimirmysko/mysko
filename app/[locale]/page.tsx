import Link from 'next/link';
import { getI18n } from '@/locales/server';
import { LocaleSwitcher } from './locale-switcher';

export default async function HomePage() {
  const t = await getI18n();

  return (
    <main className="min-h-svh">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-stretch gap-12 px-8 py-8 sm:py-20">
        <div className="flex flex-col items-stretch gap-2">
          <p className="font-semibold tracking-[-0.01em]">{t('vladimir_mysko')}</p>
          <p className="">{t('design_engineer')}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <p className="w-full max-w-40 font-semibold tracking-[-0.01em]">{t('about')}</p>
          <ul className="flex list-disc flex-col">
            <li>{t('born_in_kazakhstan')}</li>
            <li>{t('founder_of_mysko')}</li>
            <li>
              {t('developed_an_online_tester')}
              <Link className="underline" href="https://wkitu.kz/en/main-page/" target="_blank">
                {t('wkitu')}
              </Link>
            </li>
            <li>
              {t('masters_student_at')}
              <Link className="underline" href="https://wkau.edu.kz/en/" target="_blank">
                {t('wkau')}
              </Link>
            </li>
            <li>{t('specializes_in_innovation')}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <p className="w-full max-w-40 font-semibold tracking-[-0.01em]">{t('tech_stack')}</p>
          <ul className="flex list-disc flex-col">
            <li>JavaScript</li>
            <li>
              <Link className="underline" href="https://www.typescriptlang.org/" target="_blank">
                TypeScript
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://react.dev/" target="_blank">
                React.js
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://nextjs.org/" target="_blank">
                Next.js
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://tailwindcss.com/" target="_blank">
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://www.prisma.io/" target="_blank">
                Prisma ORM
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <p className="w-full max-w-40 font-semibold tracking-[-0.01em]">{t('links')}</p>
          <ul className="flex list-disc flex-col">
            <li>
              <Link className="underline" href="https://github.com/vladimirmysko" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://www.cosmos.so/vldmr" target="_blank">
                Cosmos
              </Link>
            </li>
            <li>
              <Link
                className="underline"
                href="https://www.instagram.com/iamvladimirmysko/"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link className="underline" href="https://twitter.com/vladimirmysko" target="_blank">
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <p className="w-full max-w-40 font-semibold tracking-[-0.01em]">{t('contacts')}</p>
          <ul className="flex list-disc flex-col">
            <li>
              <Link className="underline" href="mailto:vladimir.mysko@gmail.com" target="_blank">
                vladimir.mysko@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        <LocaleSwitcher />
      </div>
    </main>
  );
}
