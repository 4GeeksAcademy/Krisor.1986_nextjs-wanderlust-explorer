import { FavoritesList } from "@/components/FavoritesList";

export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
          Favorites
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Saved for later.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Favorites are stored in React state for this session, as requested in
          the project scope.
        </p>
      </div>
      <FavoritesList />
    </main>
  );
}
