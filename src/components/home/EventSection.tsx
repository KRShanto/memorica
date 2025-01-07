"use client";
import Link from "next/link";
import React from "react";
import { events } from "@/components/Dummy-Data/events";

export default function EventSection() {
  return (
    <div className="grid place-content-center mx-auto p-8 place-items-center gap-3 w-3/4">
      <h1 className="tracking-widest text-3xl">Event We Cover For You</h1>
      <p className="text-gray-700 text-sm text-justify tracking-wide mb-5 w-2/3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolor
        qui adipisci est, exercitationem cupiditate. Quidem corporis ab
        explicabo eligendi iusto aliquam, amet blanditiis deserunt ullam
        commodi.
      </p>

      <div className="relative">
        <Link
          href={"/events"}
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-50 p-2 text-sm bg-[#af2fbd] rounded-lg"
        >
          Explore More Events
        </Link>
        <div className="grid grid-cols-3 gap-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md w-full bg-gray-300 space-y-3"
            >
              <div className="bg-[#ab99c6] w-full h-40 border rounded-bl-3xl"></div>
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <div className="flex gap-2 mt-2 flex-wrap text-sm">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
