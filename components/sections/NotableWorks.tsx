import { Button } from "@/components/ui/button";

const stats = [
  { label: "Journal Articles", value: 11 },
  { label: "Granted Patents", value: 3 },
  { label: "Book Chapters", value: 35 },
  { label: "Books", value: 2 },
  { label: "Conference Activities", value: 37 },
  { label: "Workshops / STTP", value: "40" },
  { label: "PhD Students", value: 6 },
];

export default function NotableWorks() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Research at a Glance</h2>
      <p className="text-gray-700 mb-4">A snapshot of Dr. Thakur&apos;s academic contributions and professional activities.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-lg border bg-purple-50 p-4 shadow text-center">
            <div className="text-3xl font-bold text-purple-700">{item.value}</div>
            <div className="text-sm text-gray-600 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
      <Button asChild variant="outline">
        <a href="/research">See all research</a>
      </Button>
    </section>
  );
}
