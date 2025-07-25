import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Administrative Roles", href: "/administrative-roles" },
  { name: "Teaching", href: "/teaching" },
  { name: "Outreach Activities", href: "/conferences" },
  { name: "News", href: "/news" },
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