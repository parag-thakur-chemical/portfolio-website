import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Introduction</h2>
      <p className="text-md text-gray-700 max-w-2xl mb-4">
        Dr. Parag Thakur is an Assistant Professor at Sardar Vallabhbhai National Institute of Technology, Surat (INDIA). His research focuses on nanotechnology, biotechnology, waste to energy, renewable energy conservation and effective utilization, and data science. He has published 10 journal articles, holds 3 patents, contributed to 35 book chapters, authored 2 books, and presented at 34 conferences. Dr. Thakur is passionate about advancing chemical engineering education and research, and is actively involved in guiding students and organizing academic events.
      </p>
      <Button asChild variant="default">
        <a href="/cv.pdf" download>Download CV</a>
      </Button>
    </section>
  );
} 