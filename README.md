# Wanderlust Explorer

An interactive travel discovery app built with Next.js, React, TypeScript, and Tailwind CSS. Users can browse 100 local experiences, search by title, filter by category and destination, open detail pages, and save favorites for the current session.

## Design References

- [Airbnb search filters](https://www.airbnb.com/help/article/479): inspired the clean filter-first discovery pattern and the idea that filters should help users narrow a large catalog without feeling heavy.
- [Viator travel activities](https://www.viator.com/): inspired the travel marketplace card structure with destination, rating, pricing, and browsable experience categories.
- [Airbnb experience search guidance](https://www.airbnb.com/help/article/2493): informed the focus on destination-led discovery and shareable exploration flows.

## Features

- Home page with a full-viewport hero and CTA to `/experiences`.
- Experiences explorer with 100 cards from a local TypeScript dataset.
- Search by title using a case-insensitive regex.
- Category and destination filters that combine with search.
- Query parameters for shareable filtered URLs, for example `/experiences?search=sailing&category=Adventure&destination=Dubrovnik%2C+Croatia`.
- Detail route for every experience at `/experiences/[id]`.
- Session favorites managed with native React `useState`.
- Favorites and profile pages that read the shared favorite state.
- Responsive layout and active navbar styles.

## Project Structure

```text
src/app
  page.tsx
  experiences/page.tsx
  experiences/[id]/page.tsx
  favorites/page.tsx
  profile/page.tsx
src/components
  ExperienceCard.tsx
  ExperienceExplorer.tsx
  FilterBar.tsx
  Navbar.tsx
  SearchBar.tsx
src/data
  experiences.ts
src/hooks
  useDocumentTitle.ts
  useExperienceFilters.ts
src/types
  experience.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run build
```

The production build prerenders the home page, explorer, favorites, profile, and all 100 experience detail routes.
