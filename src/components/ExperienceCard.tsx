import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "@/components/FavoriteButton";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={experience.imageUrl}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-emerald-950">
          {experience.category}
        </div>
        <div className="absolute right-3 top-3">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(experience.id)}
            label={`Toggle ${experience.title} favorite`}
          />
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {experience.destination}
          </p>
          <Link href={`/experiences/${experience.id}`}>
            <h2 className="mt-1 line-clamp-2 text-lg font-black leading-tight text-slate-950 hover:text-emerald-800">
              {experience.title}
            </h2>
          </Link>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {experience.description}
        </p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="font-bold text-slate-950">${experience.price}</span>
          <span className="font-semibold text-amber-700">
            ★ {experience.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
