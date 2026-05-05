"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroLayoutThree = () => {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-left">
            <div className="bg-[#1A1B22] text-white text-[10px] font-black px-4 py-1 rounded-full inline-block mb-6 uppercase tracking-widest">
              Est. 2026
            </div>
            <h1 className="text-[#1A1B22] text-4xl md:text-5xl font-black mb-6">
              Empowering Communities with <span className="text-[#FFB800]">Islamic Values</span>
            </h1>
            <ul className="space-y-4 mb-10">
              {["Education for underprivileged", "Medical support for the needy", "Disaster relief & aid"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full" /> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
               <button className="bg-[#FFB800] text-[#1A1B22] px-8 py-4 rounded-2xl font-black shadow-lg">Donate Now</button>
               <button className="p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </button>
            </div>
          </div>

          <div className="flex-1 w-full h-[400px] bg-gray-200 rounded-3xl relative group overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Community Support"
             />
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-bold text-[#1A1B22]">
                HELPING 89+ FAMILIES
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default HeroLayoutThree;