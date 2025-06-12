export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/80 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} Dr. Parag Thakur. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="mailto:paragthakur674@gmail.com" className="hover:text-purple-600">Email</a>
          <a href="https://www.linkedin.com/in/parag-Thakur-50255813b/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=RB2cw7oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">Google Scholar</a>
          <a href="https://www.researchgate.net/profile/Parag_Thakur" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">ResearchGate</a>
        </div>
      </div>
    </footer>
  );
} 