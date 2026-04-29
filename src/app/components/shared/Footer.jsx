import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-zinc-900 text-zinc-300 items-center p-6 border-t border-zinc-800">
            <aside className="grid-flow-col items-center gap-4">

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
                <p className="text-sm border-l border-zinc-700 pl-4 ml-2 hidden sm:block">
                    Copyright © {new Date().getFullYear()} - 
                    <span className="text-amber-400 font-medium ml-1">An-Nujum Foundation</span>
                </p>
            </aside>

            {/* Social Icon & Transition */}
            <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
                <Link 
                    href="#" 
                    className="text-zinc-400 hover:text-amber-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    aria-label="Facebook"
                >
                    <FaFacebook size={22} />
                </Link>
                <Link 
                    href="#" 
                    className="text-zinc-400 hover:text-amber-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    aria-label="Youtube"
                >
                    <FaYoutube size={24} />
                </Link>
                <Link 
                    href="#" 
                    className="text-zinc-400 hover:text-amber-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    aria-label="Linkedin"
                >
                    <FaLinkedin size={22} />
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;