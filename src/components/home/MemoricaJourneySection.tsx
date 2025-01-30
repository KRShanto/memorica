import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JourneySection() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] max-w-4xl mx-auto leading-tight">
          Explore Memorica Journey of
          <br />
          Creating Unforgettable Moments
        </h2>

        {/* Timeline */}
        <div className="mt-8 flex items-center justify-center gap-1">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-[#6D28D9]" />
            <div className="h-[1px] w-16 bg-[#6D28D9]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-[#6D28D9]" />
            <span className="text-sm font-medium">2023</span>
          </div>
          <div className="flex items-center">
            <div className="h-[1px] w-16 bg-[#6D28D9]" />
            <div className="h-4 w-4 rounded-full bg-[#6D28D9]" />
            <div className="h-[1px] w-16 bg-[#6D28D9]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-[#6D28D9]" />
            <span className="text-sm font-medium">2024</span>
          </div>
          <div className="flex items-center">
            <div className="h-[1px] w-16 bg-[#6D28D9]" />
            <div className="h-2 w-2 rounded-full bg-[#6D28D9]" />
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:row-span-2">
          <Image
            src="/events-page/wedding-4.png"
            alt="Elegant table setting with balloons and flowers"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[4/3]">
          <Image
            src="/events-page/wedding-4.png"
            alt="Speaker presenting to audience"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden aspect-square">
            <Image
              src="/events-page/wedding-4.png"
              alt="Business person at conference"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square">
            <Image
              src="/events-page/wedding-4.png"
              alt="Person celebrating with confetti"
              width={300}
              height={300}
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
    </section>
  );
}
