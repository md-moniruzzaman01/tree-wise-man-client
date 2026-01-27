"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../style/hero.module.css";
import { FiMapPin, FiSearch, FiCheckCircle } from "react-icons/fi";
import { GiTreeBranch, GiStumpRegrowth, GiAxeInLog } from "react-icons/gi";

const Hero = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    searchText: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.searchText.trim()) {
      router.push(`/services?searchTerm=${encodeURIComponent(formData.searchText)}`);
    }
  };

  return (
    <div className={`${styles.heroContainer} relative overflow-hidden bg-white`}>
      
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-green-200 rounded-full blur-[120px] opacity-30 z-0" />

      <div className={`${styles.contentWrapper} relative z-10`}>
        
        {/* LEFT: TEXT & SEARCH */}
        <div className="z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/80 backdrop-blur-sm border border-green-200 text-green-800 text-sm font-bold mb-8 shadow-sm">
            <FiCheckCircle className="animate-pulse" />
            <span>5,000+ Local Arborists Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            The Smart Way <br />
            To Care For <span className="text-green-600 relative inline-block">
              Your Trees.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
            Instant quotes, certified professionals, and zero hassle. Find trusted tree cutting services in your neighborhood today.
          </p>

          {/* INTEGRATED SEARCH BAR WITH GLASS EFFECT */}
          <form 
            onSubmit={handleSubmit}
            className="mt-10 p-3 bg-white/70 backdrop-blur-md rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white flex flex-col md:flex-row items-center gap-3 max-w-2xl hover:shadow-[0_20px_60px_rgba(22,163,74,0.15)] transition-all duration-500"
          >
            <div className="relative flex-1 w-full group">
              <FiMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600 group-hover:scale-110 transition-transform" size={20} />
              <input 
                type="text" 
                name="searchText"
                value={formData.searchText}
                onChange={handleChange}
                placeholder="Enter your street or ZIP..." 
                className="w-full pl-14 pr-4 py-5 rounded-2xl bg-slate-100/50 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
              />
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-200 active:scale-95"
            >
              <FiSearch size={22} />
              Find Experts
            </button>
          </form>

          {/* SERVICE TAGS */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { icon: GiTreeBranch, label: "Pruning" },
              { icon: GiAxeInLog, label: "Removal" },
              { icon: GiStumpRegrowth, label: "Stump Grinding" }
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-600 font-semibold group cursor-default">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-green-100 transition-colors">
                   <service.icon className="text-green-600" size={24} />
                </div>
                <span className="group-hover:text-slate-900 transition-colors">{service.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: FLOATING IMAGE GRID WITH DEPTH */}
        <div className={`${styles.imageGrid} animate-in fade-in zoom-in duration-1000`}>
          {/* Main Large Image */}
          <div className={`${styles.mainImg} rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white/50 group`}>
            <Image 
          src="https://images.unsplash.com/photo-1764421175587-f1fe472c411d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt="Pruning"
              width={400} 
              height={600} 
              className="object-cover h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Sub Image 1 */}
          <div className={`${styles.subImg} rounded-3xl overflow-hidden shadow-xl ring-4 ring-white group`}>
            <Image 
              src="https://images.unsplash.com/photo-1657730390984-13ab529bb175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt="Wood Chipper"
              width={300} 
              height={250} 
              className="object-cover h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Sub Image 2 */}
          <div className={`${styles.subImg} rounded-3xl overflow-hidden shadow-xl ring-4 ring-white group`}>
            <Image 
           src="https://images.unsplash.com/photo-1637531347055-4fa8aa80c111?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt="Tree Professional"
              width={300} 
              height={250} 
              className="object-cover h-full group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* FLOATING STATS CARD */}
          <div className={`${styles.statsCard} bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300`}>
            <div className="bg-green-600 p-3 rounded-2xl text-white shadow-lg shadow-green-200">
              <FiCheckCircle size={28} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.2em] mb-0.5">Avg. Response</p>
              <p className="text-xl font-black text-slate-900 tracking-tight">15 Minutes</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;