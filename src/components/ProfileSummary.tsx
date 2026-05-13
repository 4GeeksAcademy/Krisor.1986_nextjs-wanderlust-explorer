"use client";

import { useFavorites } from "@/context/favorites-context";

export function ProfileSummary() {
  const { favoriteCount } = useFavorites();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Saved favorites</p>
        <p className="mt-2 text-4xl font-black">{favoriteCount}</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Travel style</p>
        <p className="mt-2 text-2xl font-black">Curious comfort</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Next wishlist</p>
        <p className="mt-2 text-2xl font-black">Croatia</p>
      </div>
    </div>
  );
}
