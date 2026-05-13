"use client";

import { FavoriteButton } from "@/components/FavoriteButton";
import { useFavorites } from "@/context/favorites-context";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { Experience } from "@/types/experience";

export function ExperienceDetailClient({
  experience,
}: {
  experience: Experience;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentTitle(`${experience.title} | Wanderlust Explorer`);

  return (
    <div className="flex items-center gap-3">
      <FavoriteButton
        isFavorite={isFavorite(experience.id)}
        onToggle={() => toggleFavorite(experience.id)}
        label={`Toggle ${experience.title} favorite`}
      />
      <span className="text-sm font-bold text-slate-600">
        {isFavorite(experience.id) ? "Saved to favorites" : "Save experience"}
      </span>
    </div>
  );
}
