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
          ? "bg-white/90 backdrop-blur-md border-b border-amber-100/80 shadow-sm shadow-amber-400/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <header className="mx-auto max-w-7xl px-4 md:px-10 flex h-16 items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-transform duration-300 active:scale-95"
        >
          <Image
            src={scrolled ? "/ANF-Eng-Horizontal-Black.png" : "/ANF-Eng-Horizontal-White.png"}
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
              ? "bg-stone-100 border-stone-200"
              : "bg-white/5 border-white/10"
          }`}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-5 py-2 text-[13px] font-bold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-black bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                      : scrolled
                      ? "text-stone-600 hover:text-amber-600 hover:bg-amber-50"
                      : "text-white/80 hover:text-amber-400 hover:bg-white/5"
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
            className={`hidden sm:flex w-10 h-10 items-center justify-center rounded-xl border transition-all duration-300 active:scale-90 ${
              scrolled
                ? "bg-stone-100 border-stone-200 text-stone-500 hover:text-amber-600 hover:border-amber-400/50 hover:bg-amber-50"
                : "bg-white/5 border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40"
            }`}
          >
            <FaRegUser size={15} />
          </Link>

          <Link
            href="/donate"
            className="bg-amber-400 text-black font-black px-7 py-2.5 rounded-xl text-sm hover:bg-amber-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(251,191,36,0.3)]"
          >
            Donate
          </Link>

          <div className={`lg:hidden ${scrolled ? "text-stone-800" : "text-white"}`}>
            <NavMenu scrolled={scrolled} />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;