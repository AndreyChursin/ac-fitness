import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Train With Andrey — тренировки без крайностей",
  description: "Личное наставничество по тренировочным привычкам, дисциплине и основам питания.",
};
export default function RussianLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="ru"><body>{children}<Analytics /></body></html>;
}
