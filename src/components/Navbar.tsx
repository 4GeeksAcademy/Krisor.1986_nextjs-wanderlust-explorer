"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/components/FavoritesProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const { favoriteCount } = useFavorites();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-stone-50/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight">
          Wanderlust Explorer
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-950 text-white"
                    : "text-slate-700 hover:bg-white hover:text-slate-950"
                }`}
              >
                {link.label}
                {link.href === "/favorites" && favoriteCount > 0
                  ? ` (${favoriteCount})`
                  : ""}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
