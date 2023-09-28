import "./globals.css";
import type { Metadata } from "next";
import CartProvider from "@/context/CartProvider";

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
      <body className="max-w-md mx-auto bg-gray-500">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
