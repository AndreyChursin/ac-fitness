import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Train With Andrey — fitness mentoring without extremes",
  description: "Personal mentoring for sustainable training habits, consistency and nutrition fundamentals.",
};
export default function EnglishLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
