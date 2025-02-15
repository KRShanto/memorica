"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Luxury Wedding Planning",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    imageUrl: "/events-journey/journey1.png",
    imageAlt: "Luxury wedding setup with pink lighting and decorations",
  },
  {
    id: 2,
    title: "Corporate Events",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    imageUrl: "/events-journey/journey2.jpg",
    imageAlt: "Indoor corporate venue setup",
  },
  {
    id: 3,
    title: "Charity Events",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    imageUrl: "/events-journey/journey3.jpg",
    imageAlt: "Charity event setup with volunteers",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg overflow-hidden">
      <div className="relative w-full md:w-1/3 aspect-square max-w-md">
        <Image
          src={event.imageUrl || "/placeholder.svg"}
          alt={event.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 p-6 space-y-4">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-antic text-[#1D1F7C]">
          {event.title}
        </h2>
        <p className="text-[#1D1F7C] font-inter text-base lg:text-lg xl:text-xl">
          {event.description}
        </p>
        <Button
          variant="secondary"
          className="bg-purple-600 text-white hover:bg-purple-700 text-sm lg:text-base xl:text-lg"
        >
          Explore More{" "}
          <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        </Button>
      </div>
    </div>
  );
}

export default function OurJourney() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      <div className="text-center space-y-6 mb-12 lg:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-antic text-[#1D1F7C] leading-tight">
          Our Journey: A Path to{" "}
          <span className="block">Unforgettable Celebrations</span>
        </h1>
        <p className="font-inter max-w-3xl mx-auto text-lg lg:text-xl xl:text-2xl text-[#1D1F7C]">
          From humble beginnings to crafting extraordinary events, our journey
          is driven by passion, creativity, and excellence. At Memorica, we walk
          the path of unforgettable celebrations.Transforming visions into
          lasting moments of joy, creating experiences that stay in hearts
          forever.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 lg:h-6 lg:w-6" />
          <Input
            type="search"
            placeholder="Search your specific events"
            className="pl-12 py-6 text-lg lg:text-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-12 lg:space-y-16 max-w-5xl mx-auto">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

        {filteredEvents.length === 0 && (
          <p className="text-center text-muted-foreground py-8 text-xl lg:text-2xl">
            No events found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
