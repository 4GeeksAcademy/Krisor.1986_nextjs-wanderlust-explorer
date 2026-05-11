"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

export function ExperienceExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isFavorite, toggleFavorite } = useFavorites();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const filteredExperiences = useExperienceFilters(experiences, {
    search,
    category,
    destination,
  });

  function updateUrl(nextValues: {
    search?: string;
    category?: string;
    destination?: string;
  }) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextValues).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  function handleSearchChange(value: string) {
    updateUrl({ search: value });
  }

  function handleCategoryChange(value: string) {
    updateUrl({ category: value });
  }

  function handleDestinationChange(value: string) {
    updateUrl({ destination: value });
  }

  function clearFilters() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
          Explore
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Find your next unforgettable experience.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Search 100 curated travel experiences by title, category, and
          destination. Share the URL to preserve any active filters.
        </p>
      </div>

      <div className="mb-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <SearchBar value={search} onChange={handleSearchChange} />
        <FilterBar
          category={category}
          destination={destination}
          onCategoryChange={handleCategoryChange}
          onDestinationChange={handleDestinationChange}
          onClear={clearFilters}
        />
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-600">
          {filteredExperiences.length} experiences found
        </p>
      </div>

      {filteredExperiences.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-black">No se encontraron resultados</h2>
          <p className="mt-3 text-slate-600">
            Try another search term, category, or destination.
          </p>
        </div>
      )}
    </section>
  );
}
