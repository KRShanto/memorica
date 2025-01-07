import React from "react";
import Slider from "@/components/Carrossel/BackgroundSlider";

export default function ExploreEventSection() {
  return (
    <div className="h-[500px] grid place-items-center place-content-center bg-[#47164e] relative">
      {/* Blur overlay */}
      <div className="absolute inset-0 h-full w-full filter backdrop-blur-sm z-10"></div>

      {/* Background Slider */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Slider />
      </div>

      {/* Glassmorphic Popup */}
      <div className="relative flex items-center justify-center z-50">
        <div className="relative grid place-content-center place-items-center gap-5 max-w-lg h-[300px] bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <h1 className="text-xl font-bold text-white tracking-widest">
            Explore Event Highlights
          </h1>
          <p className="mt-2 text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo
            culpa iusto quae mollitia expedita, odio pariatur necessitatibus et
            quasi ipsum, cupiditate natus aperiam quo dicta magni amet similique
            doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}
