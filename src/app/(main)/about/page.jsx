"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useRef, useState } from "react";

/* ─── Decorative SVGs ─── */
const IslamicStar = ({ className = "" }) => (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
        {/* Background Lines */}
        {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="200" y1="40" x2="200" y2="360"
                stroke="currentColor" strokeWidth="0.7"
                transform={`rotate(${deg} 200 200)`} />
        ))}

        {/* Circles */}
        {[55, 85, 115, 150].map((r) => (
            <circle key={r} cx="200" cy="200" r={r}
                stroke="currentColor" strokeWidth="0.6" fill="none" />
        ))}

        {/* Polygon */}
        <polygon
            points="200,80 230,160 315,160 245,210 270,295 200,245 130,295 155,210 85,160 170,160"
            stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.07"
        />
    </svg>
);

const ArabicLattice = ({ className = "" }) => (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
                <g key={`${row}-${col}`} transform={`translate(${col * 50}, ${row * 50})`}>
                    <polygon points="25,3 47,14 47,36 25,47 3,36 3,14"
                        stroke="currentColor" strokeWidth="0.35" fill="none" />
                    <polygon points="25,10 40,18 40,32 25,40 10,32 10,18"
                        stroke="currentColor" strokeWidth="0.25" fill="none" />
                    <circle cx="25" cy="25" r="4" stroke="currentColor" strokeWidth="0.3" fill="none" />
                </g>
            ))
        )}
    </svg>
);

const MughalArch = ({ className = "" }) => (
    <svg viewBox="0 0 200 280" fill="none" className={className} aria-hidden="true">
        <path d="M10 280 L10 120 Q10 20 100 20 Q190 20 190 120 L190 280"
            stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
        <path d="M25 280 L25 125 Q25 40 100 40 Q175 40 175 125 L175 280"
            stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M40 280 L40 130 Q40 60 100 60 Q160 60 160 130 L160 280"
            stroke="currentColor" strokeWidth="0.3" fill="none" />
        {[70, 100, 130].map((y) => (
            <line key={y} x1="10" y1={y} x2="190" y2={y} stroke="currentColor" strokeWidth="0.2" />
        ))}
    </svg>
);

const SectionLabel = ({ children, light = false }) => (
    <div className={`inline-flex items-center gap-2 border text-[11px] font-bold tracking-[0.22em] uppercase rounded-full px-5 py-2 mb-6 ${light
        ? "bg-white/5 border-white/20 text-white/60"
        : "bg-amber-400/5 border-amber-400/20 text-amber-400"
        }`}>
        <span className={`w-1 h-1 rounded-full ${light ? "bg-white/40" : "bg-amber-400"}`} />
        {children}
    </div>
);

const GoldDivider = () => (
    <div className="flex items-center justify-center gap-5 my-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/20 to-amber-400/40" />
        {/* Big Star */}
        <svg viewBox="0 0 60 60" className="w-7 h-7 text-amber-400/50 flex-shrink-0" fill="currentColor">
            <polygon points="30,5 37,22 55,22 41,33 46,51 30,40 14,51 19,33 5,22 23,22" />
        </svg>

        {/* Small Star */}
        <svg viewBox="0 0 40 40" className="w-4 h-4 text-amber-400/30 flex-shrink-0" fill="currentColor">
            <polygon points="20,3 25,15 37,15 27,23 31,35 20,27 9,35 13,23 3,15 15,15" />
        </svg>

        {/* Big Star */}
        <svg viewBox="0 0 60 60" className="w-7 h-7 text-amber-400/50 flex-shrink-0" fill="currentColor">
            <polygon points="30,5 37,22 55,22 41,33 46,51 30,40 14,51 19,33 5,22 23,22" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/20 to-amber-400/40" />
    </div>
);

/* ═══════════════════════════════════════
   1. HERO — ABOUT PAGE
═══════════════════════════════════════ */
const AboutHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <section ref={ref} className="relative bg-[#060606] overflow-hidden text-white min-h-[80vh] flex items-center">
            {/* Parallax arch */}
            <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 flex items-end justify-center opacity-[0.04]">
                    <MughalArch className="text-amber-400 w-[500px] h-auto" />
                </div>
            </motion.div>

            {/* Giant Logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <div className="relative w-[70vw] h-[70vw] max-w-[400px] max-h-[400px] opacity-[0.025]">
                    <Image
                        src="/ANF-logo-icon.png"
                        alt="An-Nujum Logo Watermark"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-amber-400/5 blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-400/3 blur-[140px] pointer-events-none" />

            {/* Lattice corners */}
            <div className="absolute top-0 left-0 w-72 h-72 text-amber-400/[0.04]">
                <ArabicLattice className="w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-72 h-72 text-amber-400/[0.04] rotate-180">
                <ArabicLattice className="w-full h-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center py-40">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <SectionLabel>আমাদের সম্পর্কে · About Us</SectionLabel>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}
                    className="font-serif text-3xl md:text-4xl text-amber-400/25 italic mb-8 leading-relaxed" dir="rtl">
                    وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="font-serif text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 max-w-5xl mx-auto">
                    আলোর পথে,{" "}
                    <span className="text-amber-400 relative inline-block">
                        মানবতার সেবায়
                        <motion.span
                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute -bottom-2 left-0 right-0 h-[3px] bg-amber-400/30 rounded-full origin-left" />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.7 }}
                    className="text-slate-400 text-lg max-w-2xl mx-auto leading-[1.9]">
                    আন-নুজুম ফাউন্ডেশন — যার অর্থ "তারকারাজি" — সমাজের অন্ধকারে আলো ছড়ানোর এক নিরলস প্রচেষ্টা।
                    ইসলামী আদর্শ ও মানবিক মূল্যবোধের আলোকে আমরা কাজ করি প্রান্তিক মানুষের জীবন বদলাতে।
                </motion.p>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
                    className="mt-16 flex flex-col items-center gap-2">
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                        <Icon icon="solar:alt-arrow-down-bold" className="text-amber-400/30 text-2xl" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════
   2. NAME & ORIGIN STORY
═══════════════════════════════════════ */
const NameStorySection = () => (
    <section className="bg-[#080808] text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left: Arabic name showcase */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-sm mx-auto">
                        {/* Outer ring */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 text-amber-400/10">
                            <IslamicStar className="w-full h-full" />
                        </motion.div>
                        {/* Inner content */}
                        <div className="relative z-10 flex flex-col items-center justify-center py-24 px-8 text-center">
                            <p className="font-serif text-[120px] text-amber-400 leading-none mb-4 font-bold"
                                style={{ textShadow: "0 0 80px rgba(251,191,36,0.15)" }} dir="rtl">
                                النجوم
                            </p>
                            <div className="w-24 h-px bg-amber-400/30 my-4" />
                            <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-bold">An-Nujum</p>
                            <p className="text-amber-400/50 text-xs mt-2 italic">"The Stars"</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Story */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                    <SectionLabel>নামের পেছনে</SectionLabel>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-8">
                        কেন <span className="text-amber-400">আন-নুজুম?</span>
                    </h2>
                    <p className="text-slate-400 text-[17px] leading-[1.95] mb-6">
                        আরবি শব্দ <span className="text-amber-400 font-serif italic">النجوم</span> মানে "তারকারাজি"। তারকারা যেমন অন্ধকার রাতে পথিককে পথ দেখায়, আন-নুজুম ফাউন্ডেশন তেমনি সমাজের অন্ধকারে আলোকবর্তিকা হয়ে পথ দেখাতে চায়।
                    </p>
                    <p className="text-slate-400 text-[17px] leading-[1.95] mb-8">
                        ২০২১ সালে প্রতিষ্ঠিত এই ফাউন্ডেশন অরাজনৈতিক, অলাভজনক এবং সম্পূর্ণ জনকল্যাণমুখী। ইসলামের সৌন্দর্য প্রচার করা ও মানবতার সেবা করা — এই দুটি স্তম্ভের উপর আমাদের যাত্রা শুরু হয়েছে।
                    </p>
                    {/* Key dates */}
                    <div className="flex gap-8">
                        {[
                            { year: "২০২১", label: "প্রতিষ্ঠার বছর" },
                            { year: "৫+", label: "বছরের অভিজ্ঞতা" },
                            { year: "৩+", label: "জেলায় কার্যক্রম" },
                        ].map((d, i) => (
                            <div key={i} className="text-center">
                                <p className="font-serif text-3xl font-bold text-amber-400">{d.year}</p>
                                <p className="text-slate-500 text-[11px] uppercase tracking-[0.15em] mt-1">{d.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   3. CORE VALUES (3 PILLARS)
═══════════════════════════════════════ */
const pillars = [
    {
        arabic: "إيمان",
        transliteration: "Iman",
        bangla: "ঈমান",
        desc: "ইসলামী বিশ্বাস ও আদর্শের উপর ভিত্তি করে প্রতিটি কাজ পরিচালিত হয়। আল্লাহর সন্তুষ্টিই আমাদের প্রধান লক্ষ্য।",
        icon: "solar:star-bold",
    },
    {
        arabic: "إحسان",
        transliteration: "Ihsan",
        bangla: "ইহসান",
        desc: "শ্রেষ্ঠত্বের সাথে সেবা করা—যেন আল্লাহ দেখছেন। প্রতিটি সাহায্যে আন্তরিকতা ও মানবিক মর্যাদার প্রতিফলন।",
        icon: "solar:heart-bold",
    },
    {
        arabic: "أمانة",
        transliteration: "Amanah",
        bangla: "আমানত",
        desc: "দাতাদের বিশ্বাস ও সুবিধাভোগীদের হক রক্ষায় সম্পূর্ণ স্বচ্ছতা ও জবাবদিহিতা আমাদের মূলনীতি।",
        icon: "solar:shield-check-bold",
    },
];

const ValuesSection = () => (
    <section className="bg-[#050505] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <IslamicStar className="w-[900px] h-[900px] text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
                <SectionLabel>আমাদের মূলনীতি</SectionLabel>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                    তিনটি <span className="text-amber-400">স্তম্ভ</span>
                </h2>
                <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">যে তিনটি মূল্যবোধ আন-নুজুম ফাউন্ডেশনের প্রতিটি পদক্ষেপ পরিচালিত করে</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((p, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative group">
                        {/* Card */}
                        <div className="bg-[#0d0d0d] border border-white/5 rounded-[40px] p-10 hover:border-amber-400/25 hover:bg-[#131313] transition-all duration-700 overflow-hidden h-full">
                            {/* Arabic background */}
                            <div className="absolute -right-3 -top-6 font-serif text-[100px] text-amber-400 opacity-[0.05] font-bold leading-none select-none group-hover:opacity-[0.09] transition-opacity duration-700" dir="rtl">
                                {p.arabic}
                            </div>
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-amber-400/8 border border-amber-400/15 flex items-center justify-center mb-8 group-hover:bg-amber-400 transition-all duration-500">
                                <Icon icon={p.icon} className="text-2xl text-amber-400 group-hover:text-black transition-colors duration-500" />
                            </div>
                            {/* Arabic name */}
                            <p className="font-serif text-5xl text-amber-400/80 mb-1 leading-none" dir="rtl">{p.arabic}</p>
                            <p className="text-white/25 text-xs uppercase tracking-[0.3em] mb-2">{p.transliteration}</p>
                            <p className="text-white font-bold text-2xl font-serif mb-5">{p.bangla}</p>
                            <p className="text-slate-500 text-[15px] leading-[1.9]">{p.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   4. OBJECTIVES — MAIN SECTION
═══════════════════════════════════════ */
const objectives = [
    {
        number: "০১",
        arabicNum: "١",
        icon: "solar:book-bold",
        title: "ইসলামী শিক্ষা ও মূল্যবোধ প্রচার",
        bangla: "ইসলামের মৌলিক শিক্ষা, আদর্শ ও চারিত্রিক মূল্যবোধ সমাজে প্রচার ও প্রসার করা।",
        arabic: "نَشْرُ الْعِلْمِ",
        arabicMeaning: "Knowledge Spreading",
        color: "amber",
        tag: "দাওয়াহ",
    },
    {
        number: "০২",
        arabicNum: "٢",
        icon: "material-symbols:shield-with-heart",
        title: "নৈতিক অবক্ষয় রোধ ও বিশুদ্ধ চরিত্র গঠন",
        bangla: "সামাজিক অবক্ষয় রোধ করে ঈমান, আমল ও নৈতিকতা বিকাশে কার্যকর ভূমিকা পালন করা।",
        arabic: "تَزْكِيَةُ النَّفْس",
        arabicMeaning: "Soul Purification",
        color: "amber",
        tag: "চরিত্র",
    },
    {
        number: "০৩",
        arabicNum: "٣",
        icon: "solar:users-group-rounded-bold",
        title: "প্রান্তিক জনগোষ্ঠীর জীবনমান উন্নয়ন",
        bangla: "সমাজের প্রান্তিক, অবহেলিত ও সুবিধাবঞ্চিত জনগোষ্ঠীর জীবনমান উন্নয়নে সহায়তা প্রদান।",
        arabic: "رَفْعُ الْمَظْلُوم",
        arabicMeaning: "Lifting the Oppressed",
        color: "amber",
        tag: "সমাজসেবা",
    },
    {
        number: "০৪",
        arabicNum: "٤",
        icon: "solar:diploma-bold",
        title: "শিক্ষা বিস্তার ও দক্ষতা উন্নয়ন",
        bangla: "সাধারণ ও ধর্মীয় উভয় জ্ঞান অর্জনে সহায়তা এবং কর্মমুখী ও ব্যবহারিক দক্ষতা বৃদ্ধির লক্ষ্যে প্রশিক্ষণ কার্যক্রম পরিচালনা।",
        arabic: "طَلَبُ الْعِلْم",
        arabicMeaning: "Seeking Knowledge",
        color: "amber",
        tag: "শিক্ষা",
    },
    {
        number: "০৫",
        arabicNum: "٥",
        icon: "solar:hand-heart-bold",
        title: "মানবিক ত্রাণ ও কল্যাণমূলক কার্যক্রম",
        bangla: "খাদ্য, চিকিৎসা, বস্ত্র, আশ্রয় ও জরুরি ত্রাণ বিতরণসহ ব্যাপক কল্যাণমূলক সামাজিক কার্যক্রম বাস্তবায়ন করা।",
        arabic: "الْإِغَاثَة",
        arabicMeaning: "Humanitarian Aid",
        color: "amber",
        tag: "ত্রাণ",
    },
    {
        number: "০৬",
        arabicNum: "٦",
        icon: "solar:flag-bold",
        title: "সামাজিক শান্তি ও সচেতনতামূলক কর্মসূচি",
        bangla: "জাতীয় স্বার্থ ও সমাজের শান্তি-শৃঙ্খলা রক্ষায় ধর্মীয় ও নৈতিক দৃষ্টিভঙ্গি থেকে সচেতনতামূলক কর্মসূচি গ্রহণ করা।",
        arabic: "الصُّلْح",
        arabicMeaning: "Peace & Harmony",
        color: "amber",
        tag: "সচেতনতা",
    },
    {
        number: "০৭",
        arabicNum: "٧",
        icon: "solar:star-shine-bold",
        title: "যুব ও শিশু-কিশোর সমাজ গঠন",
        bangla: "শিশু-কিশোর ও যুব সমাজকে আদর্শ, সৎ ও সচেতন নাগরিক হিসেবে গড়ে তোলার লক্ষ্যে ইসলামী পরিবেশে দীক্ষা ও দাওয়াতি কর্মসূচি পরিচালনা করা।",
        arabic: "تَرْبِيَةُ الشَّبَاب",
        arabicMeaning: "Youth Formation",
        color: "amber",
        tag: "যুব উন্নয়ন",
    },
    {
        number: "০৮",
        arabicNum: "٨",
        icon: "solar:women-bold",
        title: "নারীর ক্ষমতায়ন ও পরিবার উন্নয়ন",
        bangla: "ইসলামী মূল্যবোধের আলোকে নারীদের শিক্ষা, স্বাস্থ্য ও জীবিকার সুযোগ সম্প্রসারণ করে সুস্থ ও মজবুত পারিবারিক কাঠামো গড়ে তোলা।",
        arabic: "تَمْكِينُ الْمَرْأَة",
        arabicMeaning: "Women Empowerment",
        color: "amber",
        tag: "নারী উন্নয়ন",
    },
    {
        number: "০৯",
        arabicNum: "٩",
        icon: "solar:leaf-bold",
        title: "পরিবেশ সচেতনতা ও টেকসই উন্নয়ন",
        bangla: "ইসলামের খেলাফত তখা শাসনব্যবস্থার ধারণা থেকে পরিবেশ সংরক্ষণে সচেতনতা তৈরি করা এবং টেকসই জীবনযাপনে অনুপ্রাণিত করা।",
        arabic: "حِفْظُ الْبِيئَة",
        arabicMeaning: "Environmental Stewardship",
        color: "amber",
        tag: "পরিবেশ",
    },
];

const ObjectivesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="bg-[#080808] text-white py-32 relative overflow-hidden">
            {/* Top decorative strip */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <SectionLabel>উদ্দেশ্য ও লক্ষ্যসমূহ</SectionLabel>
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                        আমাদের{" "}
                        <span className="text-amber-400 relative inline-block">
                            লক্ষ্য
                            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-amber-400/25 rounded-full" />
                        </span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        আন-নুজুম ফাউন্ডেশন যে উদ্দেশ্য ও লক্ষ্যসমূহ বাস্তবায়নের লক্ষ্যে নিরলসভাবে কাজ করে যাচ্ছে
                    </p>
                </div>

                {/* Objectives — alternating layout */}
                <div className="space-y-5">
                    {objectives.map((obj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`group relative rounded-[28px] border transition-all duration-500 cursor-default overflow-hidden ${hovered === i
                                ? "bg-[#141414] border-amber-400/30 shadow-[0_0_60px_rgba(251,191,36,0.05)]"
                                : "bg-[#0c0c0c] border-white/5"
                                }`}>
                            {/* Arabic number watermark */}
                            <div className={`absolute right-8 top-1/2 -translate-y-1/2 font-serif font-bold text-[100px] leading-none select-none transition-opacity duration-500 ${hovered === i ? "opacity-[0.06]" : "opacity-[0.03]"
                                } text-amber-400`} dir="rtl">
                                {obj.arabicNum}
                            </div>

                            <div className="relative z-10 flex items-start gap-6 md:gap-10 p-7 md:p-9">
                                {/* Number */}
                                <div className="flex-shrink-0 hidden md:flex flex-col items-center gap-2">
                                    <span className="font-serif text-4xl font-bold text-amber-400/20 group-hover:text-amber-400/50 transition-colors duration-500 leading-none">
                                        {obj.number}
                                    </span>
                                    <div className="w-px h-8 bg-amber-400/10 group-hover:bg-amber-400/30 transition-colors duration-500" />
                                </div>

                                {/* Icon */}
                                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${hovered === i ? "bg-amber-400" : "bg-amber-400/8 border border-amber-400/15"
                                    }`}>
                                    <Icon icon={obj.icon} className={`text-2xl transition-colors duration-500 ${hovered === i ? "text-black" : "text-amber-400/60"
                                        }`} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <h3 className="font-bold text-white text-xl md:text-2xl font-serif group-hover:text-amber-400 transition-colors duration-400">
                                            {obj.title}
                                        </h3>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/60 bg-amber-400/5 border border-amber-400/15 rounded-full px-3 py-1">
                                                {obj.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-[15px] leading-[1.9] mb-4">
                                        {obj.bangla}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-lg text-amber-400/30 italic" dir="rtl">{obj.arabic}</span>
                                        <span className="text-white/15 text-xs">·</span>
                                        <span className="text-white/20 text-xs tracking-wider">{obj.arabicMeaning}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════
   5. QURANIC VERSE BANNER
═══════════════════════════════════════ */
const VerseBanner = () => (
    <section className="bg-amber-400 py-24 relative overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-72 h-72 text-black/5">
            <IslamicStar className="w-full h-full" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 text-black/5">
            <IslamicStar className="w-full h-full" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="font-serif text-3xl md:text-5xl text-black/80 font-bold italic leading-relaxed mb-6" dir="rtl">
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ
            </motion.p>
            <p className="text-black/50 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                &quot;তোমরা পুণ্য ও তাকওয়ার কাজে একে অপরকে সহায়তা করো, পাপ ও সীমালঙ্ঘনের কাজে সহায়তা করো না।&quot;
            </p>
            <p className="text-black/35 text-xs mt-4 uppercase tracking-[0.3em]">— সূরা আল-মায়িদাহ, আয়াত ২</p>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   6. LEADERSHIP / TEAM PREVIEW
═══════════════════════════════════════ */
const team = [
    { name: "প্রতিষ্ঠাতা ও সভাপতি", nameEn: "Founder & President", initial: "م", desc: "ইসলামী দর্শন ও সমাজসেবায় গভীর অভিজ্ঞতাসম্পন্ন নেতৃত্ব।" },
    { name: "নির্বাহী পরিচালক", nameEn: "Executive Director", initial: "ع", desc: "প্রশাসনিক দক্ষতা ও কমিউনিটি উন্নয়নে বিশেষজ্ঞ।" },
    { name: "প্রোগ্রাম কো-অর্ডিনেটর", nameEn: "Program Coordinator", initial: "ف", desc: "মাঠ পর্যায়ে কার্যক্রম পরিচালনায় দক্ষ ও নিবেদিত।" },
];

const LeadershipSection = () => (
    <section className="bg-[#060606] text-white py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] text-amber-400/[0.025]">
            <ArabicLattice className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <SectionLabel>নেতৃত্ব</SectionLabel>
                <h2 className="font-serif text-5xl font-bold text-white">
                    আমাদের <span className="text-amber-400">পরিচালনা পরিষদ</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {team.map((t, i) => (
                    <motion.div key={i}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="bg-[#0e0e0e] border border-white/5 rounded-[32px] p-8 text-center hover:border-amber-400/25 transition-all duration-500 group">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center font-serif text-4xl text-amber-400 font-bold mx-auto mb-6 group-hover:bg-amber-400/20 transition-colors">
                            {t.initial}
                        </div>
                        <p className="text-white font-bold text-xl font-serif mb-1">{t.name}</p>
                        <p className="text-amber-400/50 text-xs uppercase tracking-[0.2em] mb-4">{t.nameEn}</p>
                        <p className="text-slate-500 text-[14px] leading-relaxed">{t.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   7. TRANSPARENCY / HOW WE WORK
═══════════════════════════════════════ */
const processSteps = [
    { icon: "solar:hand-money-bold", title: "অনুদান সংগ্রহ", desc: "যাকাত, সাদাকাহ ও দান সংগ্রহ — সম্পূর্ণ হিসাব রক্ষণাবেক্ষণ সহ।" },
    { icon: "solar:eye-bold", title: "যাচাই ও নির্বাচন", desc: "মাঠ পর্যায়ে সরাসরি যাচাই করে সত্যিকারের সুবিধাভোগী চিহ্নিত করা।" },
    { icon: "solar:transfer-horizontal-bold", title: "সরাসরি বিতরণ", desc: "মধ্যস্থতা ছাড়াই সুবিধাভোগীর কাছে সহায়তা পৌঁছে দেওয়া।" },
    { icon: "solar:document-text-bold", title: "প্রতিবেদন প্রকাশ", desc: "নিয়মিত কার্যক্রম প্রতিবেদন ও আর্থিক স্বচ্ছতা নিশ্চিত করা।" },
];

const TransparencySection = () => (
    <section className="bg-[#080808] text-white py-32">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionLabel>আমাদের প্রক্রিয়া</SectionLabel>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6">
                        সম্পূর্ণ{" "}
                        <span className="text-amber-400">স্বচ্ছতায়</span><br />
                        আমরা কাজ করি
                    </h2>
                    <p className="text-slate-400 text-[17px] leading-[1.9] mb-8">
                        দাতাদের প্রতিটি টাকা সঠিক হাতে পৌঁছায় — এটি নিশ্চিত করতে আমরা চার ধাপের একটি স্বচ্ছ প্রক্রিয়া অনুসরণ করি।
                    </p>
                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-3">
                        {["যাকাত যোগ্য", "অডিটেড ফান্ড", "সরকার নিবন্ধিত", "১০০% হালাল"].map((b) => (
                            <span key={b} className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 border border-amber-400/25 bg-amber-400/5 rounded-full px-4 py-2">
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-7 top-10 bottom-10 w-px bg-amber-400/10" />
                    <div className="space-y-6">
                        {processSteps.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0e0e0e] border border-white/5 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-400 relative z-10">
                                    <Icon icon={step.icon} className="text-xl text-amber-400/60 group-hover:text-black transition-colors duration-400" />
                                </div>
                                <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-5 flex-1 group-hover:border-amber-400/20 transition-colors duration-400">
                                    <p className="text-white font-bold mb-1">{step.title}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   8. CALL TO ACTION
═══════════════════════════════════════ */
const AboutCTA = () => (
    <section className="bg-[#050505] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <IslamicStar className="w-[700px] h-[700px] text-amber-400" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <p className="font-serif text-2xl text-amber-400/30 italic mb-6" dir="rtl">
                    مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ
                </p>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                    আমাদের সাথে<br />
                    <span className="text-amber-400">যোগ দিন</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                    &quot;যে ব্যক্তি তার ভাইয়ের প্রয়োজন পূরণে সাহায্য করে, আল্লাহ তার প্রয়োজন পূরণ করেন।&quot;<br />
                    <span className="text-amber-400/50 text-sm">— বুখারি</span>
                </p>
                <div className="flex flex-wrap gap-5 justify-center">
                    <Link href="/donate">
                        <Button size="lg" className="bg-amber-400 text-black font-bold px-12 h-14 rounded-full shadow-[0_16px_48px_rgba(251,191,36,0.2)] hover:bg-white transition-all duration-300">
                            <Icon icon="solar:hand-money-bold" className="text-xl" /> এখনই দান করুন
                        </Button>
                    </Link>
                    <Link href="/volunteer">
                        <Button size="lg" variant="bordered" className="border-amber-400/40 text-amber-400 h-14 px-10 rounded-full hover:bg-amber-400 hover:text-black font-semibold transition-all duration-300">
                            স্বেচ্ছাসেবী হন
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

/* ═══════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════ */
export default function AboutPage() {
    return (
        <main className="bg-[#080808]">
            <AboutHero />
            <NameStorySection />
            <ValuesSection />
            <GoldDivider />
            <ObjectivesSection />
            <VerseBanner />
            <LeadershipSection />
            <TransparencySection />
            <AboutCTA />
        </main>
    );
}