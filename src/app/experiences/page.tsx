import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";

export default function ExperiencesPage() {
  return (
    <main>
      <Suspense fallback={<div className="p-10">Loading experiences...</div>}>
        <ExperienceExplorer />
      </Suspense>
    </main>
  );
}
