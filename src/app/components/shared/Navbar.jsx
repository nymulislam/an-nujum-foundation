"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa6";
import { NavMenu } from "../UI/NavMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm py-2"
          : "bg-transparent py-5"
      }`}
    >
      <header className="mx-auto max-w-7xl px-4 md:px-10 flex h-16 items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-transform duration-300 active:scale-95"
        >
          {/* Light Theme Logic: Always using Black logo because Hero is now Light */}
          <Image
            src="/ANF-Eng-Horizontal-Black.png"
            alt="An-Nujum Foundation"
            width={160}
            height={40}
            className="object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex items-center gap-1 list-none px-2 py-1.5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-stone-50/50 border-stone-200"
              : "bg-black/5 border-black/5 backdrop-blur-sm"
          }`}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-5 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-black bg-yellow-400 shadow-lg shadow-yellow-400/30"
                      : scrolled
                      ? "text-stone-700 hover:text-yellow-600 hover:bg-yellow-50"
                      : "text-black hover:text-yellow-600 hover:bg-yellow-50/50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className={`hidden sm:flex w-11 h-11 items-center justify-center rounded-xl border transition-all duration-300 active:scale-90 ${
              scrolled
                ? "bg-stone-50 border-yellow-300 text-stone-700 hover:text-yellow-700 hover:border-yellow-400 hover:bg-yellow-50"
                : "bg-white border-yellow-300 text-stone-800 hover:text-yellow-700 hover:shadow-md hover:shadow-yellow-400/20"
            }`}
          >
            <FaRegUser size={16} />
          </Link>

          <Link
            href="/donate"
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl text-sm hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-400/40 active:scale-95 transition-all duration-300"
          >
            Donate
          </Link>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <NavMenu scrolled={scrolled} />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;