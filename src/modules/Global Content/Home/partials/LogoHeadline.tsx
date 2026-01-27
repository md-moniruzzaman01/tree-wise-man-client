"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
// import { FiCheckBadge } from "react-icons/fi"; // Matching your icon set

// Static data for your tree cutting companies
const COMPANY_DATA = [
  {
    id: 1,
    title: "EcoTree Experts",
    state: "California",
    zipCode: "90210",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "SafeCut Arborists",
    state: "Oregon",
    zipCode: "97201",
    image: "https://images.unsplash.com/photo-1639763832833-242273ded085?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Timberline Pros",
    state: "Washington",
    zipCode: "98101",
    image: "https://images.unsplash.com/photo-1765242033671-97dbdcbb15bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "GreenLeaf Services",
    state: "Texas",
    zipCode: "73301",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop"
  }
];

const LogoHeadline = () => {
  return (
    <section className="bg-white px-5 md:px-0 py-12 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center pb-8 md:pb-12 space-y-3">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
            Top Rated
            <span className="bg-green-600 px-4 py-1.5 uppercase rounded-tl-2xl rounded-br-2xl text-white text-sm md:text-xl tracking-wider">
              Service Partners
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-medium">
            We confidently recommend these certified companies for their safety record 
            and exceptional tree care performance.
          </p>
        </div>

        {/* Marquee Section */}
        <Marquee 
          gradient={true} 
          gradientWidth={100} 
          speed={40} 
          pauseOnHover={true}
          className="py-4"
        >
          {COMPANY_DATA.map((company) => (
            <Link
              href={`/services?searchTerm=${company.title}`}
              key={company.id}
              className="group flex items-center gap-4 px-8 md:px-12 border-r border-slate-100 hover:opacity-80 transition-all"
            >
              {/* Logo Container */}
              <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] relative shrink-0">
                <Image
                  fill
                  sizes="80px"
                  src={company.image}
                  alt={company.title}
                  className="rounded-2xl object-cover border-2 border-slate-50 shadow-sm group-hover:border-green-500 transition-colors"
                />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-lg border-2 border-white">
                    {/* <FiCheckBadge size={14} /> */}
                </div>
              </div>

              {/* Company Info */}
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                  {company.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                   <span className="uppercase">{company.state}</span>
                   <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                   <span>{company.zipCode}</span>
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoHeadline;