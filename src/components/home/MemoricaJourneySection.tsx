import Link from "next/link";
import React from "react";

export default function MemoricaJourneySection() {
  return (
    <div className="m-8 mx-auto max-w-7xl grid place-content-center place-items-center gap-8">
      <h1 className="text-3xl font-semibold text-center tracking-widest">
        Explore Memorica Journey of Creating Unforgettable Moments
      </h1>

      {/* Timeline */}
      <div className="relative w-full max-w-[500px] h-1 bg-gradient-to-l from-slate-300 to-transparent">
        {/* Timeline Points */}
        <div className="absolute top-[-25px] left-0 flex flex-col items-center">
          <span className="text-xs mb-1">2023</span>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
        <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs mb-1">2024</span>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
        <div className="absolute top-[-25px] -right-2 flex flex-col items-center">
          <span className="text-xs mb-1">2025</span>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
      </div>

      {/* Dummy Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center place-items-center">
        {/* Large Dummy Div */}
        <div className="w-72 h-96 rounded-lg bg-slate-400"></div>

        {/* Nested Dummy Divs */}
        <div className="gap-3 grid place-items-center place-content-center">
          <div className="w-72 h-60 rounded-lg bg-slate-400"></div>
          <div className="flex justify-between items-center gap-2 w-full">
            <div className="w-32 h-32 rounded-lg bg-slate-400"></div>
            <div className="w-32 h-32 rounded-lg bg-slate-400"></div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link
        href="/journey"
        className="p-3 bg-[#992ba8] text-white rounded-md hover:bg-[#7a2190] transition-all"
      >
        Explore Our Journey
      </Link>
    </div>
  );
}
