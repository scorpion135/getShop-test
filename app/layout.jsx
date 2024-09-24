import { Onest } from "next/font/google";
import "./globals.css";

import Menu from "../shared/components/Menu";

const onest = Onest({
  subsets: ["cyrillic"],
  variable: "--font-onest",
});

export const metadata = {
  title: "getShop test",
  description: "Test task for getShop.ru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`bg-primary ${onest.className}`}>{children}</body>
    </html>
  );
}
