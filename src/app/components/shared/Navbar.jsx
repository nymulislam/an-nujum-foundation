"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "../UI/NavMenu";
import { FaRegUser } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

function LanguageToggle() {
  const [lang, setLang] = useState("EN");

  return (
    <div className="flex items-center rounded-xl overflow-hidden border border-gray-200 bg-gray-50 text-sm font-semibold select-none">
      <button
        onClick={() => setLang("BN")}
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === "BN"
            ? "bg-[#F5A623] text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => setLang("EN")}
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === "EN"
            ? "bg-[#D4EDDA] text-[#1A7A3C]"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function AsSunnahNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <header className="mx-auto max-w-350 px-4 md:px-6 lg:px-10 flex h-18 items-center justify-between">

        {/* Brand / Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-40 h-10">
            <Image
              src="/ANF-Eng-Horizontal-Black.png"
              alt="An-Nujum Foundation"
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links (lg+) */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "text-[#1A7A3C] font-semibold"
                      : "text-gray-700 hover:text-[#1A7A3C] hover:bg-green-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Language Toggle — hidden on mobile */}
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          {/* Account Icon — hidden on mobile */}
          <Link
            href="/account"
            aria-label="My Account"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl bg-[#FFF8E7] border border-[#F5A623]/30 hover:bg-[#F5A623]/20 transition-colors duration-150"
          >
            <FaRegUser color="#B8860B" />
          </Link>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="bg-[#1A7A3C] text-white font-semibold px-5 py-2 rounded-xl text-sm hover:bg-[#155F30] active:scale-95 transition-all duration-150 shadow-sm"
          >
            Donate
          </Link>

          {/* Hamburger — HeroUI Drawer (below lg only) */}
         <div className="lg:hidden">
           <NavMenu/>
         </div>
        </div>
      </header>
    </nav>
  );
}
