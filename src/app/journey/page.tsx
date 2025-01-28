import { MoveUpRight, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { people as events } from "@/components/Dummy-Data/people";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey",
};

export default function page() {
  return (
    <div className="grid place-content-center place-items-center gap-10 mt-12 mb-12">
      <div className="grid place-content-center place-items-center gap-2 w-10/12 md:w-3/5 text-center">
        <h1 className="text-3xl md:text-6xl tracking-wider">
          Our Journey: A Path to Unforgettable Celebrations
        </h1>
        <p className="text-base text-gray-600 w-2/3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          rerum, sit vitae dolore odio ipsum accusamus ipsa delectus
          necessitatibus soluta exercitationem sed nisi.
        </p>
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {/* Icon */}
        <div className="px-3 text-gray-500">
          <Search className="h-5 w-5" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Your Specific Event"
          className="w-full px-3 py-2 text-gray-700 focus:outline-none"
        />
      </div>

      {/*Cards*/}
      <div className="md:w-3/6 w-10/12 grid place-content-center place-items-center mt-10 gap-12">
        {events.splice(2).map((event, index) => {
          return (
            <div
              key={index}
              className="grid place-content-center place-items-center md:grid-cols-2 md:gap-5"
            >
              <Image
                src={event.image}
                alt="Memorica"
                width={500}
                height={500}
                className="md:w-[350px] md:h-[370px] object-cover rounded-lg"
              />
              <div className="grid place-content-center place-items-center gap-5 p-7">
                <h1 className="text-3xl place-self-start">{event.name}</h1>
                <p className="text-sm text-gray-700 text-justify">
                  {event.description +
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
                </p>
                <Link
                  href={`/events/${event.name}`}
                  className="text-sm bg-[#ad42c9] text-white border px-7 py-2 rounded-lg flex justify-center items-center gap-2"
                >
                  Explore More <MoveUpRight size={18} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
