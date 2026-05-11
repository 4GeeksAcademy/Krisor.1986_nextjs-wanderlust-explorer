"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";

export function FavoritesList() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id)
  );

  if (favoriteExperiences.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h1 className="text-3xl font-black">No favorites yet</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Save experiences from the explorer and they will appear here during
          this session.
        </p>
        <Link
          href="/experiences"
          className="mt-6 inline-flex rounded-full bg-emerald-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
        >
          Browse experiences
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {favoriteExperiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={isFavorite(experience.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
