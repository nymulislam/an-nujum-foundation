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
    <nav className={`fixed top-0 inset-x-0 z-[100] w-full transition-all duration-500 ${
      scrolled 
        ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-2" 
        : "bg-transparent py-4"
    }`}>
      <header className="mx-auto max-w-7xl px-4 md:px-10 flex h-16 items-center justify-between">
        
        {/* Brand Section */}
        <Link href="/" className="flex items-center shrink-0 transition-transform duration-300 active:scale-95">
          <Image
            src="/ANF-Eng-Horizontal-White.png" // ডার্ক মোডের জন্য সাদা লোগো ব্যবহার করা ভালো
            alt="An-Nujum Foundation"
            width={160}
            height={40}
            className="brightness-110"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2 list-none bg-white/5 px-2 py-1.5 rounded-2xl border border-white/5">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-5 py-2 text-[13px] font-bold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "text-black bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
                      : "text-slate-300 hover:text-amber-400 hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* User Profile */}
          <Link
            href="/login"
            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 active:scale-90"
          >
            <FaRegUser />
          </Link>

          {/* Donate Button - Amber-400 */}
          <Link
            href="/donate"
            className="bg-amber-400 text-black font-black px-7 py-2.5 rounded-xl text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_5px_20px_rgba(251,191,36,0.2)]"
          >
            Donate
          </Link>

          {/* Mobile Menu Icon Color adjustment */}
          <div className="lg:hidden text-white">
            <NavMenu />
          </div>
        </div>

      </header>
    </nav>
  );
};

export default Navbar;