import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="py-8 bg-white rounded-xl shadow mb-4 px-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Introduction</h2>
      <p className="text-md text-gray-700 max-w-2xl mb-4">
        Dr. Parag Thakur is an Assistant Professor at Sardar Vallabhbhai National Institute of Technology, Surat (INDIA). His research focuses on intensification and sustainable biological processes, nanomaterials applications in process engineering, and data-driven sustainable processes and environmental engineering. He has published 11 journal articles, holds 3 granted patents, contributed to 35 book chapters, authored 2 books (CRC Press), and participated in 37 conference activities. Dr. Thakur is passionate about advancing chemical engineering education and research, and is actively involved in guiding students and organizing academic events.
      </p>
      <Button asChild variant="default">
        <a href="/Parag CV.pdf" download>Download CV</a>
      </Button>
    </section>
  );
}
