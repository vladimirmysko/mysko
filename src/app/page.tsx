import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center overflow-x-hidden overflow-y-auto px-4">
      <main className="grid w-full max-w-3xl grid-cols-1 gap-12 py-20">
        <h1 className="text-3xl font-semibold">Владимир Мысько.</h1>

        <div className="grid grid-cols-1 gap-4">
          <p>Привет! Я Software Engineer из Уральска.</p>
          <p>
            Я работаю в университете, где совмещаю разработку ПО с
            преподаванием. Мой основной стек включает React и Next.js, но я
            также занимаюсь бэкендом на Node.js, Bun и Python.
          </p>
          <p>
            Я фанат веб-технологий. Меня вдохновляет возможность создавать
            приложения и игры, доступные пользователю мгновенно, без установки.
            В коде я ценю чистую архитектуру, производительность и доступность
            (a11y).
          </p>
          <p>
            Меня можно найти в <Link href="https://x.com/vladimirmysko">X</Link>
            , <Link href="https://github.com/vladimirmysko">GitHub</Link> и{" "}
            <Link href="https://t.me/vladimirmysko">Telegram</Link>. Или
            напишите мне на{" "}
            <Link href="mailto:vladimir.mysko@gmail.com">
              vladimir.mysko@gmail.com
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-semibold">Проекты</h2>
          <ul className="list-inside list-disc"></ul>
        </div>
      </main>

      <footer className="flex w-full max-w-3xl flex-row items-center justify-between py-12">
        <p>Владимир Мысько</p>
        <Link href="https://github.com/vladimirmysko/mysko">Исходный код</Link>
      </footer>
    </div>
  );
}
