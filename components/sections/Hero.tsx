import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-8 bg-white rounded-xl shadow-lg relative overflow-hidden">
      <div className="hidden md:block absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 to-purple-200 rounded-l-xl" />
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden shadow bg-gradient-to-tr from-purple-200 to-purple-100 border-4 border-white mx-6">
        <Image
          src="/images/profile.jpg"
          alt="Dr. Parag Thakur"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight">Dr. Parag Thakur</h1>
        <p className="text-lg font-medium mt-2 text-gray-800">Assistant Professor</p>
        <p className="text-md text-gray-600 mb-2">Sardar Vallabhbhai National Institute of Technology, Surat (INDIA)</p>
        <p className="italic text-purple-500 mb-2">Innovating at the intersection of nanotechnology, energy, and data science</p>
        <a href="https://orcid.org/0000-0003-2227-0143" className="text-purple-600 underline text-sm">ORCID: 0000-0003-2227-0143</a>
        <div className="mt-4 flex flex-col gap-1 text-sm">
          <span><b>Address:</b> 003, Chem. Engg. Dept., SVNIT, Surat-395 007, INDIA</span>
          <span><b>Contact:</b> (+91) 89992 54795</span>
          <span><b>Email:</b> paragthakur674@gmail.com, paragthakur@ched.svnit.ac.in</span>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Button asChild size="sm" variant="outline">
            <a href="https://www.linkedin.com/in/dr-parag-thakur-50255813b/" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="https://www.researchgate.net/profile/Parag_Thakur" target="_blank">ResearchGate</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="https://scholar.google.com/citations?user=RB2cw7oAAAAJ&hl=en" target="_blank">Google Scholar</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="https://www.webofscience.com/wos/author/record/AAC-8681-2021" target="_blank">Web of Science</a>
          </Button>
        </div>
      </div>
    </section>
  );
} 