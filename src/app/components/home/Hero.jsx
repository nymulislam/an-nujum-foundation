"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// অ্যানিমেশন ভেরিয়েন্টকে আলাদা করে নেওয়া হয়েছে যাতে কোড ক্লিন থাকে
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-end pb-12 md:pb-20 overflow-hidden bg-[#FAF9F6]">
      
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="An-Nujum Foundation"
          fill
          priority
          className="object-cover opacity-20 grayscale-[0.3]"
        />
        {/* Amber Gradient Overlay: নিচের দিকে হালকা অন্ধকার যাতে কন্টেন্ট ফুটে ওঠে */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent opacity-90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          
          {/* ── Left Content: Headline ── */}
          <div className="lg:col-span-7 xl:col-span-8 mb-8 lg:mb-0">
            <motion.div {...fadeUp(0.1)}>
              <h1 className="text-5xl md:text-8xl xl:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                LIGHT <br /> 
                <span className="text-amber-500 inline-flex items-center gap-4">
                  FOR THE
                  <span className="hidden md:block h-2 w-24 bg-amber-500 rounded-full" />
                </span> 
                <br /> UNKNOWN.
              </h1>
            </motion.div>
          </div>

          {/* ── Right Content: Stats/CTA Card ── */}
          <div className="lg:col-span-5 xl:col-span-4">
            <motion.div 
              {...fadeUp(0.3)}
              className="bg-amber-500 p-8 md:p-10 rounded-3xl md:rounded-t-[60px] md:rounded-b-none shadow-2xl shadow-amber-500/20 text-white"
            >
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                  <Icon icon="solar:heart-bold" className="text-2xl" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    Making Impact <br /> Since 2021
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    An-Nujum Foundation has reached over 500 families this year alone. Your small contribution can change a life.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button 
                    className="bg-white text-amber-600 font-bold h-12 rounded-xl hover:bg-slate-100 transition-colors"
                    startContent={<Icon icon="solar:hand-money-bold" fontSize={20} />}
                  >
                    Donate
                  </Button>
                  <Button 
                    variant="bordered" 
                    className="border-white text-white font-bold h-12 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Volunteer
                  </Button>
                </div>

                {/* শশ্প ছোট একটি ট্রাস্ট সিগন্যাল */}
                <div className="pt-4 border-t border-white/20 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-amber-500 bg-amber-100 overflow-hidden">
                        <div className="w-full h-full bg-amber-200" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[12px] font-medium opacity-80 uppercase tracking-wider">
                    +100 active members
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* স্লাইড ইলিউশন (নিচে স্ক্রল করার জন্য ছোট্ট ইন্ডিকেটর) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block"
      >
        <Icon icon="solar:mouse-minimalistic-linear" fontSize={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;