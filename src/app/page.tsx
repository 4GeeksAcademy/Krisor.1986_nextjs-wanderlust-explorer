import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://picsum.photos/id/1011/1800/1100"
            alt=""
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl content-center px-4 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">
              Wanderlust Labs
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
              Discover travel experiences worth planning around.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
              Browse curated tours, rituals, food walks, nature escapes, and
              local-led adventures with shareable filters and session favorites.
            </p>
            <Link
              href="/experiences"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-emerald-950 transition hover:bg-emerald-100"
            >
              Explore experiences
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
