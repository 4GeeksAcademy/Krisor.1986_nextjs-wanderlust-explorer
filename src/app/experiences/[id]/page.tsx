import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceDetailClient } from "@/components/ExperienceDetailClient";
import { experiences } from "@/data/experiences";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <Link
        href="/experiences"
        className="text-sm font-bold text-emerald-800 hover:text-emerald-950"
      >
        Back to experiences
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-200">
          <Image
            src={experience.imageUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-700">
              {experience.category}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {experience.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {experience.description}
            </p>
          </div>

          <ExperienceDetailClient experience={experience} />

          <dl className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="text-sm font-bold text-slate-500">Destination</dt>
              <dd className="mt-2 font-black">{experience.destination}</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="text-sm font-bold text-slate-500">Price</dt>
              <dd className="mt-2 font-black">${experience.price}</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="text-sm font-bold text-slate-500">Rating</dt>
              <dd className="mt-2 font-black">★ {experience.rating}</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <dt className="text-sm font-bold text-slate-500">Duration</dt>
              <dd className="mt-2 font-black">{experience.duration}</dd>
            </div>
          </dl>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-black">Highlights</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
