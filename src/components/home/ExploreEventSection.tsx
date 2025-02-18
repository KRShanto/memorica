import Slider from "@/components/Carrossel/BackgroundSlider";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExploreEventSection() {
  return (
    <div className="h-[500px] sm:h-[700px] grid place-items-center bg-[#47164e] relative overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Slider />
      </div>

      {/* Glassmorphic Popup */}
      <div className="relative flex items-center justify-center z-50 font-jakarta w-full px-2 sm:px-4">
        <div className="relative grid place-content-center place-items-center gap-y-2 sm:gap-y-4 md:gap-y-6 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[600px] bg-gray-500/10 backdrop-blur-xl rounded-2xl shadow-lg border border-[#B338C5] px-3 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-wider font-antic">
            Explore Event Highlights
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed max-w-[95%] sm:max-w-[90%]">
            Step into a world of unforgettable moments, where every detail
            shines and every celebration becomes a masterpiece. Discover the
            highlights that make your event truly extraordinary with Memorica.
          </p>
          <div className="mt-2 sm:mt-4">
            <Link href="/services">
              <Button
                variant="default"
                size="sm"
                className="bg-white hover:bg-white/90 text-[#1D1F7C] hover:text-[#1D1F7C]/90 rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base"
              >
                Explore All Services
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
