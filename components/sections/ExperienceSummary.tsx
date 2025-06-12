import { Button } from "@/components/ui/button";

export default function ExperienceSummary() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Experience</h2>
      <p className="text-gray-700 mb-4">Currently serving as Assistant Professor at SVNIT, Surat, with prior experience as Post-Doc Fellow at Chonnam National University (South Korea), Ad-hoc Faculty at NIT Warangal, and Research Fellow at VNIT Nagpur.</p>
      <div className="rounded-lg border bg-purple-50 p-4 shadow mb-4">
        <div className="font-semibold">Assistant Professor</div>
        <div className="text-sm text-gray-700">Sardar Vallabhbhai National Institute of Technology, Surat</div>
        <div className="text-xs text-gray-500">Oct 2023 – Present</div>
      </div>
      <Button asChild variant="outline">
        <a href="/(routes)/experience">See all experience</a>
      </Button>
    </section>
  );
} 