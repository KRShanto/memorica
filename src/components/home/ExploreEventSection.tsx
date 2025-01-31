import React from "react";
import Slider from "@/components/Carrossel/BackgroundSlider";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="relative grid place-content-center place-items-center gap-y-8 max-w-[600px] bg-gray-500/30 backdrop-blur-lg rounded-lg  shadow-lg border-2 border-[#B338C5] font-antic px-24 py-12">
          <h1 className="text-3xl  text-white tracking-widest">
            Explore Event Highlights
          </h1>
          <p className="mt-2 text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo
            culpa iusto quae mollitia expedita, odio pariatur necessitatibus et
            quasi ipsum, cupiditate natus aperiam quo dicta magni amet similique
            doloribus.
          </p>
          <div>
            {" "}
            <Button
              variant="default"
              size="lg"
              className="bg-white text-[#1D1F7C] hover:bg-white hover:text-black  rounded-full px-8"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
