import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 items-center px-6 py-10 border-t-2 border-yellow-400 flex flex-col sm:flex-row justify-between gap-8">
    
    {/* Left Side: Logo & Copyright */}
    <aside className="flex items-center gap-4">
        {/* Brand Logo */}
        <div className="hover:opacity-80 transition-opacity duration-300">
            <Image 
                src="/ANF-Eng-Horizontal-White.png"
                alt="An-Nujum Foundation"
                width={150}
                height={38}
                className="object-contain"
            />
        </div>
        
        {/* Copyright Text */}
        <p className="text-sm border-l border-yellow-600/50 pl-4 ml-2 hidden sm:block">
            Copyright © {new Date().getFullYear()} - 
            <span className="text-yellow-400 font-bold ml-1">An-Nujum Foundation</span>
        </p>
    </aside>

    {/* Center Side: Arabic Dua */}
    <div className="flex-1 flex justify-center items-center">
        <p className="font-serif text-yellow-500/40 italic text-xl lg:text-2xl font-medium" dir="rtl">
            رَبَّنَا تَقَبَّلْ مِنَّا
        </p>
    </div>

    {/* Right Side: Social Icons */}
    <nav className="flex gap-8 items-center">
        <Link 
            href="#" 
            className="text-gray-500 hover:text-yellow-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Facebook"
        >
            <FaFacebook size={22} />
        </Link>
        <Link 
            href="#" 
            className="text-gray-500 hover:text-yellow-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Youtube"
        >
            <FaYoutube size={24} />
        </Link>
        <Link 
            href="#" 
            className="text-gray-500 hover:text-yellow-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Linkedin"
        >
            <FaLinkedin size={22} />
        </Link>
    </nav>
</footer>
    );
};

export default Footer;