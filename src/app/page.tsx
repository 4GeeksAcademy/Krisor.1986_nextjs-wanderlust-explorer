import Image from "next/image";
import Link from "next/link";
import { categoriesList, experiences } from "@/data/experiences";

export default function Home() {
  const featuredExperiences = experiences.slice(0, 3);

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

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
              Browse by mood
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Five ways to find a trip worth remembering.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {categoriesList.map((category) => (
              <Link
                key={category}
                href={`/experiences?category=${category}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-700 hover:text-emerald-900"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
                Featured
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Start with these local-led experiences.
              </h2>
            </div>
            <Link
              href="/experiences"
              className="inline-flex rounded-full bg-emerald-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              View all 100
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredExperiences.map((experience) => (
              <article
                key={experience.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-stone-50 shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={experience.imageUrl}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-emerald-700">
                    {experience.destination}
                  </p>
                  <h3 className="mt-2 text-xl font-black">
                    {experience.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 lg:grid-cols-3 lg:px-8">
        {[
          ["Search", "Find matching titles with shareable URL parameters."],
          ["Filter", "Combine category and destination without reloading."],
          ["Save", "Mark favorites and review them during your session."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
