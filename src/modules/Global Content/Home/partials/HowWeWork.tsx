"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiActivity, 
  FiTool, 
  FiSearch, 
  FiTrash2, 
  FiScissors, 
  FiDroplet, 
  FiAlertTriangle, 
  FiRefreshCw 
} from "react-icons/fi";
import { how_we_work } from "../config/constants";

// Mapping icons to your steps (since icons.treesRoot etc. were variables)
const stepIcons: { [key: number]: any } = {
  1: <FiActivity className="text-green-600" />,
  2: <FiTool className="text-green-600" />,
  3: <FiSearch className="text-green-600" />,
  4: <FiTrash2 className="text-green-600" />,
  6: <FiScissors className="text-green-600" />,
  7: <FiDroplet className="text-green-600" />,
  8: <FiAlertTriangle className="text-red-500" />,
  9: <FiRefreshCw className="text-green-600" />,
};

const HowWeWork = () => {
   const data = how_we_work;
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  const toggleOpen = (id: number) => {
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section: Two-Column Bento Style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
        <div>
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
            Comprehensive Care for Your <span className="text-green-600">Urban Forest.</span>
          </h2>
        </div>
        <div className="border-l-4 border-green-500 pl-6">
          <p className="text-slate-600 text-lg leading-relaxed italic">
            {data?.description}
          </p>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.steps?.map((step: any) => {
          if (step.id === 5) {
            return (
              <div key={step.id} className="hidden lg:flex items-center justify-center p-8 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <div className="text-center space-y-4">
                    <p className="text-slate-400 font-semibold uppercase text-xs tracking-tighter">Certified Network</p>
                    <div className="relative w-32 h-32 mx-auto grayscale opacity-50">
                        <Image src="/logo.png" alt="Brand Logo" fill className="object-contain" />
                    </div>
                </div>
              </div>
            );
          }

          const isExpanded = isOpen[step.id];
          const description = step.description || "";

          return (
            <div 
              key={step.id} 
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl p-4 bg-slate-50 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {stepIcons[step.id]}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
              </div>

              {/* Content */}
              <div className="relative">
                <p className={`text-slate-500 leading-relaxed transition-all ${!isExpanded ? 'line-clamp-3' : ''}`}>
                  {description}
                </p>
                
                {description.length > 120 && (
                  <button 
                    onClick={() => toggleOpen(step.id)}
                    className="mt-4 flex items-center gap-1 text-green-600 font-bold text-sm hover:text-green-700 transition-colors"
                  >
                    {isExpanded ? (
                      <>Read Less <FiChevronUp /></>
                    ) : (
                      <>Read More <FiChevronDown /></>
                    )}
                  </button>
                )}
              </div>

              {/* Decorative Number */}
              <span className="absolute top-4 right-8 text-5xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{step.id}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowWeWork;