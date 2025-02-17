import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Timeline() {
  const years = [
    { year: "2023", size: "small", position: "left-[20%]" },
    { year: "2024", size: "large", position: "left-1/2" },
    { year: "2025", size: "small", position: "right-[20%]" },
  ] as const;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] mb-4">
        Explore Memorica Journey of Creating Unforgettable Moments
      </h2>

      <div className="relative">
        {/* Timeline line with smooth opacity gradient */}
        <div
          className="absolute h-[2px] top-1/2 left-0 right-0 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(100,57,154,0) 0%, rgba(100,57,154,0.2) 25%, rgba(100,57,154,0.2) 75%, rgba(100,57,154,0) 100%)",
          }}
        />

        {/* Timeline points */}
        <div className="relative h-20">
          {years.map((item) => (
            <div
              key={item.year}
              className={cn("absolute top-1/2 -translate-y-1/2", item.position)}
            >
              <div className="relative">
                <div
                  className={cn(
                    "rounded-full transition-all duration-200",
                    "hover:scale-110 cursor-pointer",
                    item.size === "large"
                      ? "w-8 h-8 bg-[#64399A]"
                      : "w-3 h-3 bg-[#64399A]"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap",
                    "font-medium text-[#64399A]",
                    item.size === "large" ? "text-base" : "text-xs"
                  )}
                >
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-12 mt-16">
        <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:row-span-2">
          <Image
            src="/journey-images/journey1.png"
            alt="Elegant table setting with balloons and flowers"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[4/3]">
          <Image
            src="/journey-images/journey2.png"
            alt="Speaker presenting to audience"
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden aspect-square">
            <Image
              src="/journey-images/journey3.png"
              alt="Business person at conference"
              width={300}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square">
            <Image
              src="/journey-images/journey4.png"
              alt="Person celebrating with confetti"
              width={300}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8"
        >
          Explore Our Journeys
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
