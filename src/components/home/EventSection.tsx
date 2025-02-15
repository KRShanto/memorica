"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const eventCategories = [
  {
    title: "Wedding",
    image: "/events/wedding.png",
    tags: [
      "Engagement",
      "Mehendi",
      "Honeymoon",
      "Wedding Ceremony",
      "Reception",
    ],
  },
  {
    title: "Corporate Events",
    image: "/events/corporate.png",
    tags: [
      "Seminar",
      "Product Launches",
      "Promotion",
      "Trade Show",
      "Executive Meetings",
      "Award Ceremony",
    ],
  },
  {
    title: "Festive",
    image: "/events/festive.png",
    tags: ["Stage Show", "Cultural Event", "Comedy Show", "Sports Event"],
  },
  {
    title: "Academic Events",
    image: "/events/academic.png",
    tags: ["Workshop", "College Fair", "Orientation", "Rag Day", "Flash Mob"],
  },
  {
    title: "Charity Events",
    image: "/events/charity.png",
    tags: [
      "Fundraising",
      "Carity Auction",
      "Awareness Campaigns",
      "Community Event",
    ],
  },
  {
    title: "Government Events",
    image: "/events/government.png",
    tags: [
      "Expos Fests",
      "Charity Auction",
      "Awareness Campaigns",
      "Community Event",
    ],
  },
  {
    title: "Private Events",
    image: "/events/private.png",
    tags: [
      "Birthday Party",
      "Anniversary",
      "House Warming",
      "Baby Shower",
      "Bachelor Party",
    ],
  },
  {
    title: "Virtual Events",
    image: "/events/virtual.png",
    tags: [
      "Webinar",
      "Virtual Conference",
      "Online Workshop",
      "Virtual Trade Show",
    ],
  },
];

export default function EventsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? eventCategories
    : eventCategories.slice(0, 3);

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] mb-4">
          Events We Cover for You
        </h2>
        <p className="text-[#1E1B4B]/70 max-w-3xl mx-auto">
          From intimate gatherings to grand celebrations, we bring your vision
          to life with seamless execution. At Memorica, every event is designed
          to be extraordinary and unforgettable.
        </p>
      </div>

      <div className="relative">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {visibleCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E1B4B] mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#ede5fa] text-[#6D28D9] rounded-full hover:bg-[#6D28D9] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <div className="flex justify-center">
        <Button
          variant="default"
          size="lg"
          className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "See More Events"}
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>
    </section>
  );
}
