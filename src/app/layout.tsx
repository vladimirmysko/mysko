import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
  weight: "variable",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Владимир Мысько — Fullstack разработчик",
  description:
    "React / Next.js интерфейсы. Производительность и доступность. Также Node.js, Bun, Python; Postgres/SQLite, Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-black dark:text-white"
    >
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
