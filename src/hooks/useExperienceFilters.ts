import { useMemo } from "react";
import type { Experience } from "@/types/experience";

interface FilterOptions {
  search?: string;
  category?: string;
  destination?: string;
}

export function useExperienceFilters(
  experiences: Experience[],
  { search = "", category = "", destination = "" }: FilterOptions
) {
  return useMemo(() => {
    const trimmedSearch = search.trim();
    const titleMatcher = trimmedSearch ? new RegExp(trimmedSearch, "i") : null;

    return experiences.filter((experience) => {
      const matchesSearch = titleMatcher
        ? titleMatcher.test(experience.title)
        : true;
      const matchesCategory = category
        ? experience.category === category
        : true;
      const matchesDestination = destination
        ? experience.destination === destination
        : true;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [experiences, search, category, destination]);
}
