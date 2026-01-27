"use client";
import React from "react";
import { home_data } from "../config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const { testimonials } = home_data;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-sm">
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              What Our Clients <br /> <span className="text-green-600">Are Saying.</span>
            </h2>
          </div>
          <div className="flex gap-2 text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            <span className="text-slate-900 font-bold ml-2 text-lg">4.9/5</span>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative pt-4 pb-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14" // Space for pagination
          >
            {testimonials?.map((data: any) => (
              <SwiperSlide key={data.id}>
                <div className="group h-full flex flex-col bg-slate-50 p-8 rounded-[2.5rem] border border-transparent hover:border-green-200 hover:bg-white hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 relative">

                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-slate-200 group-hover:text-green-100 transition-colors">
                    {/* <FiQuoteRight size={48} /> */}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                    &quot;{data.description}&quot;
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                        {data.name}
                      </h5>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {data.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles for Swiper Pagination to match your Green theme */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #16a34a !important;
          width: 24px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;