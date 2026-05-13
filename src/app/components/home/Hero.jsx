"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

/* ─── Decorative Components ─── */

const IslamicStar = ({ className = "" }) => (
  <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
    {[0, 30, 60, 90, 120, 150].map((deg) => (
      <line key={deg} x1="200" y1="40" x2="200" y2="360"
        stroke="currentColor" strokeWidth="0.7"
        transform={`rotate(${deg} 200 200)`} />
    ))}
    {[55, 85, 115, 150].map((r) => (
      <circle key={r} cx="200" cy="200" r={r}
        stroke="currentColor" strokeWidth="0.6" fill="none" />
    ))}
    <polygon
      points="200,80 230,160 315,160 245,210 270,295 200,245 130,295 155,210 85,160 170,160"
      stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.07" />
  </svg>
);

const GeometricPattern = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <g key={`${row}-${col}`} transform={`translate(${col * 40}, ${row * 40})`}>
          <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"
            stroke="currentColor" strokeWidth="0.4" fill="none" />
          <polygon points="20,8 32,14 32,26 20,32 8,26 8,14"
            stroke="currentColor" strokeWidth="0.3" fill="none" />
        </g>
      ))
    )}
  </svg>
);

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-700 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full px-5 py-2 mb-6">
    <span className="w-1 h-1 rounded-full bg-amber-500" />
    {children}
  </div>
);

/* ─────────────────────────────────────────────
   HERO SECTION  (keeps dark — hero is always impactful)
───────────────────────────────────────────── */
const HeroSection = () => (
  <section className="relative bg-white text-stone-800 overflow-hidden">

    {/* Logo watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
      <Image src="/ANF-logo-icon.png" width={520} height={520} alt="" aria-hidden />
    </div>

    {/* Glow */}
    <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-amber-400/6 blur-[160px] pointer-events-none" />

    {/* Geometric corner */}
    <div className="absolute top-0 right-0 w-80 h-80 text-amber-400/[0.04] rotate-12 pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>

    <div className="relative min-h-[88vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center relative z-10 pt-36 pb-24">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/8 border border-amber-400/20 text-amber-400 text-[11px] font-bold tracking-[0.22em] uppercase rounded-full px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#FBBF24]" />
            Non-Political · Non-Profit · Charitable
          </div>
        </motion.div>

        {/* Arabic verse */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.7 }}
          className="font-serif text-2xl text-amber-400/25 italic mb-6 leading-relaxed" dir="rtl">
          وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
        </motion.p>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="font-serif text-5xl md:text-8xl font-bold text-white leading-[1.05] mb-8 max-w-5xl mx-auto">
          For the Ummah,{" "}
          <span className="text-amber-400 relative inline-block">
            For Humanity
            <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-amber-400/30 rounded-full origin-left" />
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22, duration: 0.7 }}
          className="text-[17px] text-slate-400 max-w-2xl mx-auto leading-[1.9] mb-12">
          An-Nujum Foundation is a tireless endeavor to spread the light of humanity,
          education, and Islamic values for the welfare of the underprivileged.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center">
          <Link href="/donate">
            <Button size="lg" className="bg-amber-400 text-black font-bold px-10 h-14 rounded-full shadow-[0_10px_40px_rgba(251,191,36,0.25)] hover:bg-amber-300 transition-all duration-300">
              <Icon icon="solar:hand-money-bold" className="text-xl" /> Donate Now
            </Button>
          </Link>
          <Link href="/activities">
            <Button size="lg" variant="bordered" className="border-white/20 text-white h-14 px-10 rounded-full hover:bg-white/8 hover:border-white/40 font-semibold transition-all duration-300">
              Explore Activities
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Stats mosaic — transitional dark-to-light feel */}
    <div className="container mx-auto px-4 pb-0 relative z-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-12 gap-5">

        {/* Hero photo */}
        <div className="col-span-12 md:col-span-7 rounded-t-[40px] overflow-hidden h-72 md:h-[440px] relative group border-x border-t border-white/5">
          <Image
            src="/nujum-01.jpg"
            alt="An-Nujum Foundation work"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/10 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white font-bold text-2xl leading-snug drop-shadow">Commitment to Humanity</p>
            <p className="text-amber-400/80 text-xs mt-2 uppercase tracking-[0.3em] font-bold">Serving Since 2021</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-5">
          <div className="bg-amber-400 rounded-t-[36px] md:rounded-[36px] p-10 flex flex-col justify-between shadow-xl shadow-amber-400/15 hover:bg-amber-300 transition-colors duration-500 group">
            <Icon icon="solar:heart-bold" className="text-5xl text-black/70" />
            <div>
              <p className="font-serif text-6xl font-bold text-black tracking-tighter">500+</p>
              <p className="text-[10px] font-black text-black/50 uppercase tracking-[0.2em] mt-2">Beneficiary Families</p>
            </div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-[36px] p-10 flex flex-col justify-between relative overflow-hidden hover:border-amber-400/30 transition-colors duration-500 group">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -bottom-10 w-44 h-44 text-amber-400 opacity-[0.06]">
              <IslamicStar className="w-full h-full" />
            </motion.div>
            <Icon icon="solar:book-bold" className="text-5xl text-amber-400/50 group-hover:text-amber-400 transition-colors" />
            <div>
              <p className="font-serif text-6xl font-bold text-amber-400 tracking-tighter">80+</p>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mt-2 group-hover:text-white/50 transition-colors">Active Scholarships</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   QUICK STATS BAR  (amber strip — transition)
───────────────────────────────────────────── */
const StatsBar = () => (
  <div className="bg-stone-900 border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 divide-x divide-white/5">
        {[
          { icon: "solar:users-group-rounded-bold", val: "100+", label: "Dedicated Volunteers" },
          { icon: "solar:buildings-bold", val: "5+", label: "Years of Excellence" },
          { icon: "solar:global-bold", val: "3+", label: "Operating Districts" },
        ].map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-5 px-8 py-7 group hover:bg-white/3 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
              <Icon icon={s.icon} className="text-2xl text-amber-400" />
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-amber-400 leading-none">{s.val}</p>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.18em] mt-1.5">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   MISSION / ABOUT  — LIGHT
───────────────────────────────────────────── */
const MissionSection = () => (
  <section className="bg-white text-stone-800 py-32 relative overflow-hidden">
    {/* Subtle pattern */}
    <div className="absolute right-0 top-0 w-[500px] h-[500px] text-amber-400/[0.06] pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <SectionLabel>Our Mission</SectionLabel>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 leading-[1.1] mb-8">
            Rooted in Faith,<br />
            <span className="text-amber-500">Driven by Service</span>
          </h2>
          <p className="text-stone-500 text-[17px] leading-[1.9] mb-5">
            An-Nujum — meaning &quot;The Stars&quot; in Arabic — was born from a simple belief: that every soul deserves dignity, knowledge, and care. We work so that others may shine.
          </p>
          <p className="text-stone-500 text-[17px] leading-[1.9] mb-10">
            Guided by the Quranic principle of cooperation in goodness, we serve communities across districts — providing relief, education, and spiritual upliftment to those in need.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Zakat Eligible", "Transparent Funds", "Community First"].map((tag) => (
              <span key={tag}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700 border border-amber-300 rounded-full px-4 py-2 bg-amber-50">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="relative rounded-[40px] overflow-hidden h-[460px] border border-stone-100 shadow-xl shadow-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop"
              alt="Community service" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          </div>
          {/* Floating hadith card */}
          <div className="absolute -bottom-8 -left-6 bg-white border border-amber-200 rounded-[24px] p-6 max-w-xs shadow-xl shadow-amber-400/10">
            <p className="font-serif text-amber-500/70 text-xl italic mb-3" dir="rtl">خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ</p>
            <p className="text-stone-500 text-sm leading-relaxed">&quot;The best of people are those most beneficial to others.&quot;</p>
            <p className="text-amber-500/60 text-xs mt-3 uppercase tracking-widest">— Prophet Muhammad ﷺ</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PROGRAMS  — LIGHT
───────────────────────────────────────────── */
const programs = [
  { icon: "solar:diploma-bold", title: "Education & Scholarships", desc: "Empowering deserving students with scholarships, school supplies, and mentorship to break the cycle of poverty.", count: "80+ Scholars", arabicWord: "علم", arabicMeaning: "Knowledge" },
  { icon: "tabler:bowl-spoon-filled", title: "Food & Livelihood Relief", desc: "Monthly grocery distributions, Ramadan food baskets, and emergency aid to vulnerable families across districts.", count: "500+ Families", arabicWord: "رحمة", arabicMeaning: "Mercy" },
  { icon: "solar:hospital-bold", title: "Healthcare Support", desc: "Medical camp assistance, medicine donations, and hospital fund support for those who cannot afford treatment.", count: "200+ Patients", arabicWord: "شفاء", arabicMeaning: "Healing" },
  { icon: "solar:book-2-bold", title: "Islamic Education", desc: "Quran circles, Islamic studies programs, and madrasah support fostering spiritual growth in communities.", count: "150+ Students", arabicWord: "هدى", arabicMeaning: "Guidance" },
  { icon: "solar:home-2-bold", title: "Orphan Welfare", desc: "Comprehensive care for orphaned children including education, nutrition, clothing, and psychosocial support.", count: "60+ Orphans", arabicWord: "يتيم", arabicMeaning: "Orphan Care" },
  { icon: "solar:hand-shake-bold", title: "Community Empowerment", desc: "Skills training, women's livelihood programs, and microfinance support to foster self-reliance.", count: "90+ Trainees", arabicWord: "تمكين", arabicMeaning: "Empowerment" },
];

const ProgramsSection = () => (
  <section className="bg-stone-50 text-stone-800 py-32 relative overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-400/[0.06] blur-[200px] pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-20">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">
          Our Programs &{" "}
          <span className="text-amber-500">Initiatives</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-white border border-stone-100 rounded-[28px] p-8 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-400/8 transition-all duration-500 relative overflow-hidden cursor-pointer">
            {/* Arabic watermark */}
            <div className="absolute -right-1 -top-3 text-[78px] font-serif text-amber-400 opacity-[0.06] font-bold leading-none select-none group-hover:opacity-[0.12] transition-opacity duration-500" dir="rtl">
              {p.arabicWord}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-500">
              <Icon icon={p.icon} className="text-2xl text-amber-500 group-hover:text-black transition-colors duration-500" />
            </div>
            <h3 className="font-bold text-stone-800 text-xl mb-3 group-hover:text-amber-700 transition-colors duration-300">{p.title}</h3>
            <p className="text-stone-400 text-[15px] leading-[1.85] mb-6">{p.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5">
                {p.count}
              </span>
              <span className="text-xs text-stone-300 group-hover:text-amber-400/60 transition-colors font-serif italic">{p.arabicMeaning}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link href="/activities">
          <Button size="lg" variant="bordered"
            className="border-amber-400 text-amber-700 h-14 px-12 rounded-full hover:bg-amber-400 hover:text-black font-semibold transition-all duration-300">
            View All Activities <Icon icon="solar:arrow-right-bold" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   IMPACT  — stays amber (brand moment)
───────────────────────────────────────────── */
const ImpactSection = () => (
  <section className="bg-amber-400 py-24 relative overflow-hidden">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute -left-16 top-1/2 -translate-y-1/2 w-72 h-72 text-black/5">
      <IslamicStar className="w-full h-full" />
    </motion.div>
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 text-black/5">
      <IslamicStar className="w-full h-full" />
    </motion.div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14">
        <p className="font-serif text-4xl md:text-5xl font-bold text-black mb-3">Our Impact at a Glance</p>
        <p className="text-black/60 text-lg">Alhamdulillah, every act of giving leaves a lasting mark.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { val: "500+", label: "Families Supported", icon: "solar:users-group-rounded-bold" },
          { val: "৳40L+", label: "Funds Disbursed", icon: "solar:wallet-money-bold" },
          { val: "80+", label: "Scholarships Given", icon: "solar:diploma-bold" },
          { val: "3+", label: "Districts Covered", icon: "solar:map-point-bold" },
        ].map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-black/10 rounded-[24px] p-7 text-center hover:bg-black/20 transition-colors duration-300 group">
            <Icon icon={s.icon} className="text-3xl text-black/50 mb-4 mx-auto group-hover:text-black/70 transition-colors" />
            <p className="font-serif text-5xl font-bold text-black tracking-tight mb-2">{s.val}</p>
            <p className="text-black/60 text-[10px] uppercase tracking-[0.2em] font-bold">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   ACTIVITIES  — LIGHT
───────────────────────────────────────────── */
const activities = [
  { img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop", title: "Ramadan Food Distribution 2024", category: "Relief", date: "Mar 2024" },
  { img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop", title: "Annual Scholarship Award Night", category: "Education", date: "Dec 2023" },
  { img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop", title: "Winter Relief Camp", category: "Relief", date: "Jan 2024" },
  { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", title: "Quran Learning Circle", category: "Education", date: "Feb 2024" },
];

const ActivitiesSection = () => (
  <section className="bg-white text-stone-800 py-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <SectionLabel>Recent Activities</SectionLabel>
          <h2 className="font-serif text-5xl font-bold text-stone-900">
            Stories of{" "}
            <span className="text-amber-500">Impact</span>
          </h2>
        </div>
        <Link href="/gallery">
          <Button variant="bordered" className="border-amber-400 text-amber-700 rounded-full px-8 h-12 hover:bg-amber-400 hover:text-black transition-all duration-300">
            View Gallery <Icon icon="solar:arrow-right-bold" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {activities.map((a, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[28px] overflow-hidden h-72 border border-stone-100 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-stone-200 transition-shadow duration-500">
            <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-108 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 bg-black/30 border border-amber-400/30 rounded-full px-3 py-1 mb-3 inline-block backdrop-blur-sm">
                {a.category}
              </span>
              <p className="text-white font-bold text-lg leading-snug">{a.title}</p>
              <p className="text-white/50 text-sm mt-1">{a.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   DONATE  — warm light
───────────────────────────────────────────── */
const donationTiers = [
  { amount: "৳500", label: "Feeds a Family for a Day", icon: "tabler:bowl-spoon-filled" },
  { amount: "৳2,000", label: "Monthly Ration for One Family", icon: "solar:box-bold" },
  { amount: "৳5,000", label: "A Child's School Supplies", icon: "solar:backpack-bold" },
  { amount: "৳10,000", label: "Half a Scholarship Month", icon: "solar:diploma-bold" },
];

const DonateSection = () => {
  const [selected, setSelected] = useState(1);
  return (
    <section className="bg-stone-50 text-stone-800 py-32 relative overflow-hidden">
      {/* Faint star bg */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <IslamicStar className="w-[700px] h-[700px] text-amber-500" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Support the Cause</SectionLabel>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 mb-6">
            Your Sadaqah,<br />
            <span className="text-amber-500">Their Tomorrow</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
            Every taka you give becomes a star in the lives of those in darkness. Choose an amount and make a difference today.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {donationTiers.map((t, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`rounded-[20px] p-6 border transition-all duration-300 text-left group ${
                  selected === i
                    ? "bg-amber-400 border-amber-400 shadow-lg shadow-amber-400/20"
                    : "bg-white border-stone-200 hover:border-amber-300 hover:shadow-md hover:shadow-amber-400/8"
                }`}>
                <Icon icon={t.icon} className={`text-3xl mb-4 ${selected === i ? "text-black" : "text-amber-400 group-hover:text-amber-500"}`} />
                <p className={`font-serif text-3xl font-bold mb-2 ${selected === i ? "text-black" : "text-stone-800"}`}>{t.amount}</p>
                <p className={`text-[11px] font-bold uppercase tracking-wide leading-tight ${selected === i ? "text-black/60" : "text-stone-400"}`}>{t.label}</p>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-amber-400 text-black font-bold px-14 h-16 rounded-full text-lg shadow-[0_16px_48px_rgba(251,191,36,0.25)] hover:bg-amber-500 transition-all duration-300">
                <Icon icon="solar:hand-money-bold" className="text-xl" /> Donate Now
              </Button>
            </Link>
            <Link href="/donate#recurring">
              <Button size="lg" variant="bordered" className="border-stone-300 text-stone-500 h-16 px-10 rounded-full hover:border-amber-400 hover:text-amber-700 transition-all duration-300">
                Set Up Monthly Giving
              </Button>
            </Link>
          </div>
          <p className="text-stone-300 text-sm mt-8">Zakat eligible · 100% transparent · Recognized charity</p>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   TESTIMONIALS  — LIGHT
───────────────────────────────────────────── */
const testimonials = [
  { name: "Fatima Begum", role: "Scholarship Recipient's Mother", quote: "My son's dream of becoming a doctor seemed impossible after my husband passed away. An-Nujum gave him not just a scholarship, but hope and dignity.", initial: "ف" },
  { name: "Abdul Karim", role: "Volunteer, 3 Years", quote: "Working with An-Nujum changed my perspective entirely. I found the true meaning of brotherhood and service to Allah through this foundation.", initial: "ع" },
  { name: "Shahida Rahman", role: "Food Aid Recipient", quote: "During Ramadan when we had nothing, they came to our door with bags full of groceries. I made dua for them with every tear in my eyes.", initial: "ش" },
];

const TestimonialsSection = () => (
  <section className="bg-white text-stone-800 py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <SectionLabel>Their Stories</SectionLabel>
        <h2 className="font-serif text-5xl font-bold text-stone-900">
          Words from the{" "}
          <span className="text-amber-500">Community</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-stone-50 border border-stone-100 rounded-[28px] p-8 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-400/8 transition-all duration-500 group relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute -right-3 -top-3 text-[80px] font-serif text-amber-400 opacity-[0.08] font-bold leading-none select-none">&quot;</div>
            <Icon icon="solar:quote-up-bold" className="text-2xl text-amber-300 mb-5 group-hover:text-amber-400 transition-colors" />
            <p className="text-stone-500 text-[15px] leading-[1.9] mb-7 italic">&quot;{t.quote}&quot;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center font-serif text-xl text-amber-500 font-bold flex-shrink-0">
                {t.initial}
              </div>
              <div>
                <p className="text-stone-800 font-bold text-sm">{t.name}</p>
                <p className="text-stone-400 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PARTNERS  — LIGHT
───────────────────────────────────────────── */
const PartnersSection = () => (
  <section className="bg-stone-50 text-stone-800 py-16 border-y border-stone-100">
    <div className="container mx-auto px-4">
      <p className="text-center text-stone-300 text-[11px] uppercase tracking-[0.3em] font-bold mb-10">
        Trusted By Our Partners & Supporters
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {["Local Mosques", "District Administration", "Islamic Relief Network", "Zakaat Committee", "Community Trusts"].map((p) => (
          <span key={p} className="text-stone-300 text-sm font-semibold tracking-wide hover:text-amber-500 transition-colors">{p}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   JOIN / NEWSLETTER  — LIGHT
───────────────────────────────────────────── */
const JoinSection = () => (
  <section className="bg-white text-stone-800 py-32 relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] text-amber-400/[0.05] pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-stone-50 border border-stone-100 rounded-[36px] p-10 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-400/8 transition-all duration-500">
          <Icon icon="solar:letter-bold" className="text-4xl text-amber-400 mb-6" />
          <h3 className="font-serif text-3xl font-bold text-stone-900 mb-3">Stay Connected</h3>
          <p className="text-stone-400 text-[15px] leading-relaxed mb-8">Receive updates on activities, impact reports, and donation drives directly in your inbox.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-white border border-stone-200 rounded-full px-5 py-3.5 text-stone-700 placeholder-stone-300 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            <Button className="bg-amber-400 text-black font-bold px-7 rounded-full hover:bg-amber-500 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Volunteer */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-amber-400 rounded-[36px] p-10 flex flex-col justify-between relative overflow-hidden group hover:bg-amber-500 transition-colors duration-500">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -bottom-8 w-52 h-52 text-black/5">
            <IslamicStar className="w-full h-full" />
          </motion.div>
          <Icon icon="solar:users-group-rounded-bold" className="text-5xl text-black/60 mb-auto" />
          <div className="mt-12">
            <h3 className="font-serif text-4xl font-bold text-black mb-3">Volunteer With Us</h3>
            <p className="text-black/60 text-[15px] leading-relaxed mb-8">Join our growing family of 100+ dedicated volunteers and be the light in someone&apos;s darkness.</p>
            <Link href="/volunteer">
              <Button className="bg-black text-amber-400 font-bold px-8 h-12 rounded-full hover:bg-stone-900 transition-all duration-300">
                <Icon icon="solar:hand-heart-bold" /> Join as Volunteer
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   ROOT PAGE
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="bg-white selection:bg-amber-400 selection:text-black">
      <HeroSection />
      <StatsBar />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <ActivitiesSection />
      <DonateSection />
      <TestimonialsSection />
      <PartnersSection />
      <JoinSection />
    </main>
  );
}