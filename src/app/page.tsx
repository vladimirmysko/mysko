import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center overflow-x-hidden overflow-y-auto px-4">
      <main className="grid w-full max-w-3xl grid-cols-1 gap-12 py-20">
        <h1 className="text-3xl font-semibold">Владимир Мысько.</h1>

        <div className="grid grid-cols-1 gap-4">
          <p>Работаю fullstack-разработчиком и преподаю в университете.</p>
          <p>
            Делаю интерфейсы на React / Next.js и стараюсь, чтобы они были
            понятными, быстрыми и доступными.
          </p>
          <p>
            Когда нужно - подключаюсь к серверной части: Next.js (RSC), Node.js
            / Bun, Python, базы Postgres / SQLite, ORM Prisma.
          </p>
          <p>
            Предпочитаю спокойные решения: меньше сложностей, больше
            предсказуемости. Этот сайт собран на Next.js со статической сборкой
            и минимумом клиентской логики.
          </p>
          <p>Сейчас ищу вторую работу или подработку (part-time / проектно).</p>
          <p>
            Вы можете найти меня в{" "}
            <Link href="https://x.com/vladimirmysko">X</Link>,{" "}
            <Link href="https://github.com/vladimirmysko">GitHub</Link> и{" "}
            <Link href="https://t.me/vladimirmysko">Telegram</Link>. Также вы
            можете написать мне по электронной почте:{" "}
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
        <p>Copyright © mysko</p>
        <Link href="https://github.com/vladimirmysko/mysko">Исходный код</Link>
      </footer>
    </div>
  );
}
