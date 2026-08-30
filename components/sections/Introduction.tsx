import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Introduction</h2>
      <p className="text-md text-gray-700 max-w-2xl mb-4">
        Dr. Parag Thakur is an Assistant Professor at Sardar Vallabhbhai National Institute of Technology, Surat (INDIA). His research focuses on nanotechnology, biotechnology, waste-to-energy systems, sustainable process intensification, and data-driven chemical engineering. He has published 11 journal articles, holds 3 granted patents, contributed 35 book chapters, authored 2 books, and led broad teaching, mentoring, outreach, and administrative initiatives at institute and department levels.
      </p>
      <Button asChild variant="default">
        <a href="/Parag CV.pdf" download>Download CV</a>
      </Button>
    </section>
  );
} 