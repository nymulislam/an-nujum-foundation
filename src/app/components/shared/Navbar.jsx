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
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all duration-300 ${
      scrolled ? "shadow-md py-1" : "shadow-sm py-0"
    }`}>
      <header className="mx-auto max-w-7xl px-4 md:px-10 flex h-18 items-center justify-between">
        
        {/* Brand Section */}
        <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 active:scale-95">
          <Image
            src="/ANF-Eng-Horizontal-Black.png"
            alt="An-Nujum Foundation"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "text-amber-500 bg-amber-50" 
                      : "text-slate-900 hover:text-amber-500 hover:bg-amber-50/50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
          </div>

          <Link
            href="/login"
            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl bg-amber-50 border border-amber-100 hover:bg-amber-100 transition-all duration-300 active:scale-90"
          >
            <FaRegUser className="text-amber-700" />
          </Link>

          <Link
            href="/donate"
            className="bg-amber-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl text-sm hover:bg-amber-500 active:scale-95 transition-all duration-300 shadow-sm shadow-amber-200 hover:shadow-md"
          >
            Donate
          </Link>

          <div className="lg:hidden">
            <NavMenu />
          </div>
        </div>

      </header>
    </nav>
  );
};

export default Navbar;