import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile UI",
  description: "Ajargh Kreation Assigiment - Section A (Mobile-UI)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
