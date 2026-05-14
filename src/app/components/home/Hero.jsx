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
  <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/40 text-yellow-700 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-full px-6 py-3 mb-8">
    <span className="w-2 h-2 rounded-full bg-yellow-500" />
    {children}
  </div>
);

/* ─────────────────────────────────────────────
   HERO SECTION  (keeps dark — hero is always impactful)
───────────────────────────────────────────── */
const HeroSection = () => (
  <section className="relative bg-[#FAFAFA] text-stone-800 overflow-hidden">

    {/* Logo watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
      <Image src="/ANF-logo-icon.png" width={520} height={520} alt="" aria-hidden />
    </div>

    {/* Soft Glow */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-yellow-200/20 blur-[140px] pointer-events-none" />

    {/* Geometric corner */}
    <div className="absolute top-0 right-0 w-80 h-80 text-yellow-500/[0.05] rotate-12 pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>

    <div className="relative min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center relative z-10 pt-32 pb-20">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 bg-black/5 border border-yellow-400/50 text-yellow-700 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase rounded-full px-6 py-3 mb-8 shadow-lg shadow-yellow-400/10">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            Non-Political · Non-Profit · Charitable
          </div>
        </motion.div>

        {/* Arabic verse */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-2xl md:text-4xl text-yellow-600 italic mb-8 leading-relaxed font-medium" dir="rtl">
          وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
        </motion.p>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="font-serif text-5xl md:text-8xl font-bold text-black leading-[1.05] mb-8 max-w-5xl mx-auto tracking-tight">
          For the Ummah,{" "}
          <span className="text-yellow-400 relative inline-block">
            For Humanity
            <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-yellow-400/30 rounded-full origin-left" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22, duration: 0.7 }}
          className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-14">
          An-Nujum Foundation is a tireless endeavor to spread the light of humanity,
          education, and Islamic values for the welfare of the underprivileged.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center">
          <Link href="/donate">
            <Button size="lg" className="bg-yellow-400 text-black font-bold px-10 h-14 rounded-full shadow-lg shadow-yellow-400/30 hover:bg-yellow-500 transition-all duration-300">
              <Icon icon="solar:hand-money-bold" className="text-xl" /> Donate Now
            </Button>
          </Link>
          <Link href="/activities">
            <Button size="lg" variant="bordered" className="border-2 border-black text-black h-14 px-10 rounded-full hover:bg-black hover:text-yellow-400 font-semibold transition-all duration-300">
              Explore Activities
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Hero Image Section */}
    <div className="container mx-auto px-4 relative z-10 -mt-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-12 gap-6 pb-20">

        <div className="col-span-12 md:col-span-8 rounded-[40px] overflow-hidden h-[300px] md:h-[500px] relative shadow-2xl shadow-stone-200 border border-white">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
            alt="An-Nujum Foundation work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-white font-bold text-2xl sm:text-3xl">Commitment to Humanity</p>
            <p className="text-yellow-300 text-sm mt-2 uppercase tracking-widest font-bold">Serving Since 2021</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
          <div className="bg-yellow-400 rounded-[36px] p-8 flex-1 flex flex-col justify-between text-black shadow-xl shadow-yellow-400/25">
            <Icon icon="solar:heart-bold" className="text-5xl text-black/80" />
            <div>
              <p className="font-serif text-6xl font-bold tracking-tighter">500+</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mt-3 opacity-90">Beneficiary Families</p>
            </div>
          </div>
          <div className="bg-black rounded-[36px] p-8 flex-1 flex flex-col justify-between shadow-xl shadow-black/25">
            <Icon icon="solar:book-bold" className="text-5xl text-yellow-400" />
            <div>
              <p className="font-serif text-6xl font-bold text-yellow-400 tracking-tighter">80+</p>
              <p className="text-xs sm:text-sm font-bold text-yellow-300 uppercase tracking-[0.15em] mt-3">Active Scholarships</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   QUICK STATS BAR  (yellow bar — transition)
───────────────────────────────────────────── */
const StatsBar = () => (
  <div className="relative bg-gradient-to-b from-white to-stone-50 border-y border-stone-100/80 overflow-hidden">
    {/* subtle background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-200/20 blur-3xl rounded-full" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200/60">

        {[
          {
            icon: "solar:users-group-rounded-bold",
            val: "100+",
            label: "Dedicated Volunteers",
          },
          {
            icon: "solar:buildings-bold",
            val: "5+",
            label: "Years of Excellence",
          },
          {
            icon: "solar:global-bold",
            val: "3+",
            label: "Operating Districts",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-center gap-6 px-10 py-14 hover:bg-white/70 transition-all duration-500"
          >
            {/* Icon container */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 border border-amber-200/40 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-500">
                <Icon
                  icon={s.icon}
                  className="text-3xl text-amber-700 group-hover:text-amber-800 transition-colors"
                />
              </div>

              {/* soft glow ring on hover */}
              <div className="absolute inset-0 rounded-2xl scale-0 group-hover:scale-110 bg-amber-300/10 blur-xl transition-transform duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="font-serif text-4xl font-bold text-stone-900 leading-none tracking-tight">
                {s.val}
              </p>

              <p className="text-[11px] sm:text-xs font-bold text-stone-500 uppercase tracking-[0.2em] mt-2 group-hover:text-stone-700 transition-colors">
                {s.label}
              </p>

              {/* underline accent */}
              <div className="mt-3 w-0 group-hover:w-10 h-[2px] bg-amber-400 transition-all duration-500 rounded-full" />
            </div>

            {/* subtle vertical highlight line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-300/0 via-amber-300/30 to-amber-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    <div className="absolute right-0 top-0 w-[500px] h-[500px] text-yellow-400/[0.06] pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <SectionLabel>Our Mission</SectionLabel>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-10">
            Rooted in Faith,<br />
            <span className="text-yellow-500">Driven by Service</span>
          </h2>
          <p className="text-stone-600 text-lg sm:text-xl leading-[1.9] mb-6">
            An-Nujum — meaning &quot;The Stars&quot; in Arabic — was born from a simple belief: that every soul deserves dignity, knowledge, and care. We work so that others may shine.
          </p>
          <p className="text-stone-600 text-lg sm:text-xl leading-[1.9] mb-10">
            Guided by the Quranic principle of cooperation in goodness, we serve communities across districts — providing relief, education, and spiritual upliftment to those in need.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Zakat Eligible", "Transparent Funds", "Community First"].map((tag) => (
              <span key={tag}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-yellow-700 border-2 border-yellow-400 rounded-full px-4 py-2.5 bg-yellow-100">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="relative rounded-[40px] overflow-hidden h-[460px] border-2 border-yellow-300 shadow-xl shadow-yellow-400/20">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop"
              alt="Community service" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          {/* Floating hadith card */}
          <div className="absolute -bottom-8 -left-6 bg-yellow-50 border-2 border-yellow-400 rounded-[24px] p-7 max-w-xs shadow-xl shadow-yellow-400/25">
            <p className="font-serif text-yellow-700 text-2xl italic mb-4 font-semibold" dir="rtl">خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ</p>
            <p className="text-black text-base leading-relaxed font-medium">&quot;The best of people are those most beneficial to others.&quot;</p>
            <p className="text-yellow-700 text-sm mt-4 uppercase tracking-widest font-bold">— Prophet Muhammad ﷺ</p>
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
  <section className="relative bg-stone-50 py-32 overflow-hidden">
    {/* ambient light */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-yellow-100/25 blur-[140px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">

      {/* HEADER */}
      <div className="text-center mb-24">
        <span className="text-xs tracking-[0.4em] uppercase text-stone-500 font-bold">
          Programs Overview
        </span>

        <h2 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 mt-6 leading-[1.05]">
          Impact through{" "}
          <span className="text-yellow-500 relative">
            structured care
            <span className="absolute -bottom-3 left-0 right-0 h-[3px] bg-yellow-300/40" />
          </span>
        </h2>
      </div>

      {/* EXHIBITION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {programs.map((p, i) => (
          <div
            key={i}
            className="group relative bg-white border border-stone-100 rounded-[34px] p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* side index bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400/20 group-hover:bg-yellow-400 transition-all duration-500" />

            {/* top row */}
            <div className="flex items-start gap-6">

              {/* icon */}
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition">
                <Icon icon={p.icon} className="text-3xl text-yellow-700" />
              </div>

              {/* text */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {p.title}
                </h3>

                <p className="text-stone-600 text-base leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* bottom meta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
                    {p.count}
                  </span>

                  <span className="text-yellow-500 text-sm font-medium">
                    {p.arabicWord} · {p.arabicMeaning}
                  </span>
                </div>
              </div>
            </div>

            {/* hover glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-yellow-50/40 to-transparent" />
          </div>
        ))}

      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   IMPACT  — stays yellow (brand moment)
───────────────────────────────────────────── */
const ImpactSection = () => (
  <section className="relative bg-gradient-to-b from-yellow-400 via-amber-300 to-yellow-400 py-32 overflow-hidden">

    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-black/10 blur-3xl rounded-full" />
    </div>

    {/* ornaments */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 text-black/10"
    >
      <IslamicStar className="w-full h-full" />
    </motion.div>

    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 text-black/10"
    >
      <IslamicStar className="w-full h-full" />
    </motion.div>

    <div className="container mx-auto px-4 relative z-10">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="font-serif text-4xl md:text-6xl font-bold text-black mb-4 leading-tight">
          Our Impact at a Glance
        </p>

        <div className="w-24 h-[3px] bg-black/40 mx-auto mb-6 rounded-full" />

        <p className="text-black/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Alhamdulillah, every act of giving creates real change in real lives.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

        {[
          { val: "500+", label: "Families Supported", icon: "solar:users-group-rounded-bold" },
          { val: "৳40L+", label: "Funds Disbursed", icon: "solar:wallet-money-bold" },
          { val: "80+", label: "Scholarships Given", icon: "solar:diploma-bold" },
          { val: "3+", label: "Districts Covered", icon: "solar:map-point-bold" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >

            {/* CARD */}
            <div className="
  relative h-full rounded-[28px]
  overflow-hidden isolate
  bg-white/15 backdrop-blur-2xl
  border border-white/25
  p-8 md:p-10 text-center
  transition-all duration-500
  hover:bg-white/20 hover:border-white/40
  hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
">

              {/* soft glow layer (no lines) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/25 to-transparent" />

              {/* ICON */}
              <div className="relative mb-6">
                <div className="
                  w-16 h-16 mx-auto rounded-2xl
                  bg-white/20 border border-white/30
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:scale-110 group-hover:bg-white/30
                ">
                  <Icon
                    icon={s.icon}
                    className="text-3xl text-black/80 group-hover:text-black transition-colors"
                  />
                </div>
              </div>

              {/* VALUE */}
              <p className="font-serif text-5xl md:text-6xl font-bold text-black leading-none tracking-tight">
                {s.val}
              </p>

              {/* LABEL (clean spacing instead of underline) */}
              <p className="text-[10px] md:text-xs font-bold text-black/80 uppercase tracking-[0.28em] mt-5">
                {s.label}
              </p>

            </div>

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
  <section className="bg-white text-stone-800 py-32 relative overflow-hidden">

    {/* soft background wash */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-100/40 blur-3xl rounded-full" />
    </div>

    <div className="container mx-auto px-4 relative z-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-10">
        <div>
          <SectionLabel>Recent Activities</SectionLabel>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-black leading-tight">
            Stories of{" "}
            <span className="text-yellow-600 relative">
              Impact
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-400/40 rounded-full" />
            </span>
          </h2>

          <p className="text-stone-500 mt-4 max-w-md leading-relaxed">
            Moments from our field activities that reflect real change and real lives.
          </p>
        </div>

        <Link href="/gallery">
          <Button
            variant="bordered"
            className="group border-2 border-yellow-500 text-yellow-700 rounded-full px-8 h-12 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 font-bold"
          >
            View Gallery
            <Icon
              icon="solar:arrow-right-bold"
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Button>
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {activities.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative rounded-[32px] overflow-hidden h-[340px] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* image */}
            <Image
              src={a.img}
              alt={a.title}
              fill
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* subtle hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-yellow-400/10" />

            {/* content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">

              {/* category badge */}
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300 bg-black/40 border border-yellow-400/40 rounded-full px-4 py-2 backdrop-blur-md mb-5">
                {a.category}
              </span>

              {/* title */}
              <p className="text-white font-serif font-bold text-xl md:text-2xl leading-snug mb-2 group-hover:text-yellow-100 transition-colors duration-300">
                {a.title}
              </p>

              {/* date */}
              <p className="text-white/50 text-sm tracking-wide">
                {a.date}
              </p>

              {/* bottom accent line */}
              <div className="mt-5 w-0 group-hover:w-16 h-[2px] bg-yellow-400 rounded-full transition-all duration-500" />
            </div>

            {/* corner highlight */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <IslamicStar className="w-[700px] h-[700px] text-yellow-400" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Support the Cause</SectionLabel>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-black mb-8">
            Your Sadaqah,<br />
            <span className="text-yellow-600">Their Tomorrow</span>
          </h2>
          <p className="text-stone-700 text-lg sm:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
            Every taka you give becomes a star in the lives of those in darkness. Choose an amount and make a difference today.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {donationTiers.map((t, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`rounded-[28px] p-8 border-2 transition-all duration-300 text-left group ${selected === i
                    ? "bg-yellow-400 border-yellow-400 shadow-xl shadow-yellow-400/30"
                    : "bg-white border-stone-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/15"
                  }`}>
                <Icon icon={t.icon} className={`text-5xl mb-5 ${selected === i ? "text-black/80" : "text-yellow-500 group-hover:text-yellow-600"}`} />
                <p className={`font-serif text-4xl font-bold mb-3 ${selected === i ? "text-black" : "text-black"}`}>{t.amount}</p>
                <p className={`text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug ${selected === i ? "text-black/70" : "text-stone-700"}`}>{t.label}</p>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-400 text-black font-bold px-16 h-16 rounded-full text-lg shadow-[0_16px_48px_rgba(250,204,21,0.35)] hover:bg-yellow-500 transition-all duration-300">
                <Icon icon="solar:hand-money-bold" className="text-2xl" /> Donate Now
              </Button>
            </Link>
            <Link href="/donate#recurring">
              <Button size="lg" variant="bordered" className="border-2 border-black text-black h-16 px-12 rounded-full hover:bg-black hover:text-yellow-400 transition-all duration-300 font-semibold">
                Set Up Monthly Giving
              </Button>
            </Link>
          </div>
          <p className="text-stone-600 text-base mt-10 font-medium">Zakat eligible · 100% transparent · Recognized charity</p>
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
      <div className="text-center mb-20">
        <SectionLabel>Their Stories</SectionLabel>
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-black">
          Words from the{" "}
          <span className="text-yellow-600">Community</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-stone-50 border-2 border-stone-200 rounded-[32px] p-10 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/15 transition-all duration-500 group relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute -right-4 -top-4 text-[100px] font-serif text-yellow-400 opacity-[0.15] font-bold leading-none select-none">&quot;</div>
            <Icon icon="solar:quote-up-bold" className="text-3xl text-yellow-500 mb-6 group-hover:text-yellow-600 transition-colors" />
            <p className="text-stone-700 text-lg leading-[1.85] mb-8 italic">&quot;{t.quote}&quot;</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center font-serif text-2xl text-yellow-700 font-bold flex-shrink-0">
                {t.initial}
              </div>
              <div>
                <p className="text-black font-bold text-base">{t.name}</p>
                <p className="text-stone-600 text-sm mt-1">{t.role}</p>
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
  <section className="bg-stone-50 text-stone-800 py-20 border-y border-yellow-300/50">
    <div className="container mx-auto px-4">
      <p className="text-center text-stone-600 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold mb-12">
        Trusted By Our Partners & Supporters
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {["Local Mosques", "District Administration", "Islamic Relief Network", "Zakaat Committee", "Community Trusts"].map((p) => (
          <span key={p} className="text-stone-700 text-base sm:text-lg font-semibold tracking-wide hover:text-yellow-600 hover:scale-105 transition-all duration-300">{p}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   JOIN / NEWSLETTER  — LIGHT
───────────────────────────────────────────── */
const JoinSection = () => (
  <section className="bg-white text-black py-32 relative overflow-hidden">
    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] text-yellow-400/[0.06] pointer-events-none">
      <GeometricPattern className="w-full h-full" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-stone-50 border-2 border-yellow-300 rounded-[40px] p-12 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-500">
          <Icon icon="solar:letter-bold" className="text-5xl text-yellow-500 mb-8" />
          <h3 className="font-serif text-4xl font-bold text-black mb-4">Stay Connected</h3>
          <p className="text-stone-700 text-lg leading-relaxed mb-10 font-medium">Receive updates on activities, impact reports, and donation drives directly in your inbox.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-white border-2 border-yellow-300 rounded-full px-6 py-4 text-black placeholder-stone-400 text-base focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all" />
            <Button className="bg-yellow-400 text-black font-bold px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 text-base">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Volunteer */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-yellow-400 rounded-[40px] p-12 flex flex-col justify-between relative overflow-hidden group hover:bg-yellow-500 transition-colors duration-500">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -bottom-8 w-52 h-52 text-black/10">
            <IslamicStar className="w-full h-full" />
          </motion.div>
          <Icon icon="solar:users-group-rounded-bold" className="text-6xl text-black/70 mb-auto" />
          <div className="mt-14">
            <h3 className="font-serif text-5xl font-bold text-black mb-4">Volunteer With Us</h3>
            <p className="text-black/75 text-lg leading-relaxed mb-10 font-medium">Join our growing family of 100+ dedicated volunteers and be the light in someone&apos;s darkness.</p>
            <Link href="/volunteer">
              <Button className="bg-black text-yellow-400 font-bold px-10 h-14 rounded-full hover:bg-stone-900 transition-all duration-300 text-base">
                <Icon icon="solar:hand-heart-bold" className="text-lg" /> Join as Volunteer
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
    <main className="bg-white selection:bg-yellow-400 selection:text-black">
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