import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "صندوق قرض الحسنه مهر",
  description: "صندوق قرض الحسنه مهر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
