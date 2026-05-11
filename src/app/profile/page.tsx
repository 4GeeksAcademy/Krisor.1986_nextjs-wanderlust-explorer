import { ProfileSummary } from "@/components/ProfileSummary";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-3xl bg-emerald-950 p-8 text-white">
          <div className="h-24 w-24 rounded-full bg-emerald-200 text-center text-5xl leading-[6rem] text-emerald-950">
            L
          </div>
          <h1 className="mt-6 text-4xl font-black">Lea Moreau</h1>
          <p className="mt-3 text-emerald-100">
            Product-minded traveler collecting food, culture, and coastal
            adventures for upcoming research trips.
          </p>
        </div>
        <div className="space-y-6">
          <ProfileSummary />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Travel preferences</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Lea prefers small-group experiences, thoughtful hosts, clear
              cancellation policies, and itineraries that balance discovery with
              enough unstructured time to wander.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
