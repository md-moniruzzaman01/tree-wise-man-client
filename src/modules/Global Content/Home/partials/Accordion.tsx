"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";
import { home_data } from "../config/constants";

const MyAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first one open
  const [isMore, setIsMore] = useState(5);
  const { frequently_asked_questions } = home_data;

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-widest">
            <FiHelpCircle />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: VISUAL SIDE */}
          <div className="w-full lg:w-2/5 sticky top-24">
            <div className="relative group">
              {/* Background Decorative Box */}
              <div className="absolute -inset-4 bg-green-600/10 rounded-3xl rotate-3 group-hover:rotate-1 transition-transform" />
              
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dvpnbsehd/image/upload/v1727698746/aboout_us_icbr5b.jpg"
                  alt="Professional Tree Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-bold">Need immediate help?</p>
                  <p className="text-sm opacity-80">Our certified arborists are available 24/7 for emergency removals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ACCORDION SIDE */}
          <div className="w-full lg:w-3/5 space-y-4">
            {frequently_asked_questions?.slice(0, isMore)?.map((data: any) => {
              const isOpen = openId === data.id;

              return (
                <div 
                  key={data.id} 
                  className={`group border rounded-2xl transition-all duration-300 ${
                    isOpen 
                    ? "bg-white border-green-200 shadow-lg shadow-green-900/5" 
                    : "bg-white/50 border-slate-200 hover:border-green-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(data.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-green-700" : "text-slate-800"
                    }`}>
                      {data.question}
                    </span>
                    <div className={`shrink-0 ml-4 p-2 rounded-full transition-all ${
                      isOpen ? "bg-green-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}>
                      {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </div>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {data?.answer && Array.isArray(data.answer) ? (
                        <div className="space-y-3">
                          {data?.detailsHeader && (
                            <p className="font-bold text-slate-800">{data.detailsHeader}</p>
                          )}
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {data?.answer.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                <span className="text-green-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                {item.replace("•", "").trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-sm md:text-base">{data.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* See All Button */}
            {frequently_asked_questions?.length > isMore && (
              <div className="flex justify-start pt-6">
                <button
                  onClick={() => setIsMore(frequently_asked_questions?.length)}
                  className="group flex items-center gap-2 font-bold text-green-600 hover:text-green-700 transition-all"
                >
                  View all questions 
                  <span className="w-8 h-[2px] bg-green-600 group-hover:w-12 transition-all" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccordion;