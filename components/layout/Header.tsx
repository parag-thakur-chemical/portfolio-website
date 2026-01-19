"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Administrative Roles", href: "/administrative-roles" },
  { name: "Teaching", href: "/teaching" },
  { name: "Outreach Activities", href: "/conferences" },
  { name: "News", href: "/news" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
              Dr. Parag Thakur
            </Link>
            <span className="hidden text-sm font-medium text-slate-500 sm:inline-flex">
              Assistant Professor · SVNIT Surat
            </span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-2 py-1 shadow-sm md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-700 hover:bg-white hover:text-slate-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/40 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3">
            <div className="rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg shadow-slate-900/5 backdrop-blur">
              <ul className="flex flex-col gap-1 text-sm font-medium text-slate-800">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-3 py-2 transition-colors ${
                          isActive
                            ? "bg-slate-900 text-white"
                            : "hover:bg-slate-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}