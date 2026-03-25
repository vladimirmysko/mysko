import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-auto">
      <article className="w-full max-w-xl px-4 pt-20 pb-10">
        <header className="flex flex-col gap-1">
          <h1 className="text-sm">Владимир Мысько</h1>
          <time className="text-sm text-neutral-500">Обновлено 25 марта 2026 года</time>
        </header>
        <div className="mt-5 flex flex-col gap-4">
          <p className="text-sm">
            Я родился и живу в Уральске, Казахстан. Fullstack-разработчик с 6+ годами коммерческого
            опыта.
          </p>
          <p className="text-sm">
            Специализируюсь на создании масштабируемых веб-приложений в экосистеме React, Next.js и
            TypeScript. Работал с автомобильным бизнесом, образовательными учреждениями и
            собственными проектами: от CRM-систем до AI-сервисов проверки на плагиат.
          </p>
          <p className="text-sm">
            Сейчас работаю в{' '}
            <Link
              href="https://wkitu.kz"
              target="_blank"
              className="underline decoration-neutral-300 underline-offset-2 transition-all duration-100 hover:decoration-neutral-400"
            >
              Западно-Казахстанском инновационно-технологическом университете
            </Link>
            , где разрабатываю образовательные платформы: систему дистанционного тестирования,
            AI-проверку текстов и управление расписанием.
          </p>
          <p className="text-sm">
            Параллельно веду собственную практику под брендом Mysko. Делаю корпоративные сайты и
            CRM-решения для бизнеса.
          </p>
          <p className="text-sm">
            Считаю себя инженером, который умеет не просто писать код, а проектировать архитектуру и
            доводить продукт до результата, измеримого в цифрах.
          </p>
          <p className="text-sm">
            Связаться со мной:{' '}
            <Link
              href="mailto:vladimir.mysko@gmail.com"
              className="underline decoration-neutral-300 underline-offset-2 transition-all duration-100 hover:decoration-neutral-400"
            >
              vladimir.mysko@gmail.com
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
