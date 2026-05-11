import type { Metadata } from "next";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover, filter, and save unique travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-stone-50 text-slate-950">
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
