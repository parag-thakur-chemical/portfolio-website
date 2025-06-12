import { Button } from "@/components/ui/button";

const interests = [
  "Nanotechnology",
  "Bio-technology",
  "Waste to energy",
  "Renewable energy conservation",
  "Data Science and analytics",
];

export default function ResearchInterestsSummary() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Research Interests</h2>
      <p className="text-gray-700 mb-4">Exploring innovative solutions in chemical engineering, energy, and data science.</p>
      <div className="rounded-lg border bg-purple-50 p-4 shadow mb-4">
        <ul className="list-disc pl-5 text-gray-700">
          {interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Button asChild variant="outline">
        <a href="/(routes)/research">See all research interests</a>
      </Button>
    </section>
  );
} 