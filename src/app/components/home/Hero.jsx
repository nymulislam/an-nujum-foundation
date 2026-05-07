"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Rotating Islamic geometric star
const IslamicStar = ({ className = "" }) => (
  <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
    {[0, 30, 60, 90, 120, 150].map((deg) => (
      <line
        key={deg}
        x1="200" y1="40" x2="200" y2="360"
        stroke="currentColor" strokeWidth="0.7"
        transform={`rotate(${deg} 200 200)`}
      />
    ))}
    {[55, 85, 115, 150].map((r) => (
      <circle key={r} cx="200" cy="200" r={r}
        stroke="currentColor" strokeWidth="0.6" fill="none" />
    ))}
    <polygon
      points="200,55 216,160 318,128 248,202 318,272 216,244 200,345 184,244 82,272 152,202 82,128 184,160"
      stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.07"
    />
  </svg>
);

const HeroVariantC = () => (
  <section className="relative bg-[#080808] overflow-hidden text-white">

    {/* Top — centered headline */}
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Giant Arabic letter watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.02 }}
      >
        <span className="font-serif text-[45vw] text-amber-400 leading-none font-bold italic">ن</span>
      </div>

      {/* Glow effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-amber-400/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/5 border border-amber-400/20 text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#FBBF24]" />
            Non-Political · Non-Profit · Charitable
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.08 }}
          className="font-serif text-2xl text-amber-400/30 italic mb-6" dir="rtl"
        >
          وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="font-serif text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 max-w-5xl mx-auto"
        >
          For the Ummah,{" "}
          <span className="text-amber-400 relative inline-block">
            For Humanity
            <motion.span
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-[4px] bg-amber-400/30 rounded-full origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.22 }}
          className="text-[17px] text-slate-400 max-w-2xl mx-auto leading-[1.9] mb-12"
        >
          An-Nujum Foundation is a tireless endeavor to spread the light of humanity, 
          education, and Islamic values for the welfare of the underprivileged.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-5 justify-center"
        >
          <Link href="/donate">
            <Button size="lg" className="bg-amber-400 text-black font-bold px-10 h-14 rounded-full shadow-[0_10px_40px_rgba(251,191,36,0.2)] hover:bg-white hover:text-black transition-all duration-300">
              <Icon icon="solar:hand-money-bold" className="text-xl" /> Donate Now
            </Button>
          </Link>
          <Link href="/activities">
            <Button size="lg" variant="bordered" className="border-amber-400/40 text-amber-400 h-14 px-10 rounded-full hover:bg-amber-400 hover:text-black font-semibold transition-all duration-300">
              Explore Activities
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Mosaic grid */}
    <div className="container mx-auto px-4 pb-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-12 gap-6"
      >
        {/* Main Image */}
        <div className="col-span-12 md:col-span-7 rounded-[48px] overflow-hidden h-80 md:h-[500px] relative group border border-white/5">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
            alt="Foundation work"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12">
            <p className="text-white font-bold text-2xl leading-snug">Commitment to Humanity</p>
            <p className="text-amber-400/70 text-sm mt-3 uppercase tracking-[0.25em] font-bold">Serving Since 2021</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
          <div className="bg-amber-400 rounded-[40px] p-10 flex flex-col justify-between shadow-2xl shadow-amber-400/10 hover:bg-white transition-colors duration-500 group">
            <Icon icon="solar:heart-bold" className="text-5xl text-black/80" />
            <div>
              <p className="font-serif text-6xl font-bold text-black tracking-tighter">500+</p>
              <p className="text-[10px] font-black text-black/50 uppercase tracking-[0.2em] mt-3">Beneficiary Families</p>
            </div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden hover:border-amber-400/40 transition-colors duration-500 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-12 -bottom-12 w-48 h-48 text-amber-400 opacity-[0.05]"
            >
              <IslamicStar className="w-full h-full" />
            </motion.div>
            <Icon icon="solar:book-bold" className="text-5xl text-amber-400/60 group-hover:text-amber-400 transition-colors" />
            <div>
              <p className="font-serif text-6xl font-bold text-amber-400 tracking-tighter">80+</p>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mt-3 group-hover:text-white/60 transition-colors">Active Scholarships</p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        {[
          { icon: "solar:users-group-bold", val: "100+", label: "Dedicated Volunteers" },
          { icon: "solar:buildings-bold", val: "5+", label: "Years of Excellence" },
          { icon: "solar:global-bold", val: "3+", label: "Operating Districts" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4 bg-[#111] border border-white/5 rounded-[32px] p-8 flex items-center gap-7 hover:bg-amber-400 group transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-black/10 transition-colors">
              <Icon icon={s.icon} className="text-3xl text-amber-400 group-hover:text-black" />
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-white group-hover:text-black leading-none transition-colors">{s.val}</p>
              <p className="text-[10px] font-bold text-slate-500 group-hover:text-black/60 uppercase tracking-[0.2em] mt-3 transition-colors">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

  </section>
);

export default HeroVariantC;