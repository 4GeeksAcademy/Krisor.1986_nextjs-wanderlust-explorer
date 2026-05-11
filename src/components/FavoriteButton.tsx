"use client";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  label?: string;
}

export function FavoriteButton({
  isFavorite,
  onToggle,
  label = "Toggle favorite",
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isFavorite}
      className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg shadow-sm transition ${
        isFavorite
          ? "border-rose-500 bg-rose-500 text-white"
          : "border-white/80 bg-white/95 text-slate-800 hover:border-rose-300 hover:text-rose-600"
      }`}
    >
      ♥
    </button>
  );
}
