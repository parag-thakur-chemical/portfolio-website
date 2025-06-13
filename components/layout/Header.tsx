import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Teaching", href: "/teaching" },
  { name: "Conferences", href: "/conferences" },
  { name: "Workshops", href: "/workshops" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold text-purple-700">Dr. Parag Thakur</Link>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-purple-600 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 