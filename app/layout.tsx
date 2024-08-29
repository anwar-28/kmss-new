import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Outfit } from "next/font/google";

const inter = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kawempe Muslim Seconadary School",
  description: "School Motto: Go Higher",
  icons: {
    icon: "kawempe.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
