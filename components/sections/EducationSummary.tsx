import { Button } from "@/components/ui/button";

export default function EducationSummary() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Education</h2>
      <p className="text-gray-700 mb-4">Ph.D. in Chemical Engineering from VNIT, Nagpur, with a strong foundation in research and academic excellence.</p>
      <div className="rounded-lg border bg-purple-50 p-4 shadow mb-4">
        <div className="font-semibold">Ph.D. in Chemical Engineering</div>
        <div className="text-sm text-gray-700">VNIT, Nagpur</div>
        <div className="text-xs text-gray-500">2019 – 2022</div>
      </div>
      <Button asChild variant="outline">
        <a href="/(routes)/education">See all education</a>
      </Button>
    </section>
  );
} 