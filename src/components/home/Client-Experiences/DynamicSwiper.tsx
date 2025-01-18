"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import Image from "next/image";

interface Person {
  image: string;
  name: string;
  profession: string;
  description: string;
  tags: string[];
}

interface SwiperProps {
  people: Person[];
}

const DynamicSwiper: React.FC<SwiperProps> = ({ people }) => {
  // Array of border colors
  const borderColors = [
    "#24abb3", // Teal
    "#b32424", // Red
    "#ab24b3", // Purple
    "#24b33d", // Green
    "#243db3", // Blue
  ];

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        margin: "auto",
        padding: "10px",
      }}
    >
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, EffectCoverflow]}
        loop={true}
        className="mySwiper"
        initialSlide={Math.floor(people.length / 2)} // Start at the middle slide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 12,
          modifier: 2.5,
          slideShadows: true,
        }}
      >
        {people.map((person, index) => (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center"
          >
            {/* Background cards */}
            <div
              className="absolute inset-0 bg-gray-200 rounded-xl rotate-[1] -z-10"
              style={{
                border: `2px solid ${
                  borderColors[index % borderColors.length]
                }`,
              }}
            ></div>

            {/* Foreground card */}
            <div
              className="gap-5 flex items-center bg-white rounded-xl shadow-lg overflow-hidden relative z-10 p-4 h-full border-2"
              style={{
                borderColor: borderColors[index % borderColors.length],
              }}
            >
              {/* Person's Image */}
              <div className="w-9/12 text-justify">
                <Image
                  width={300}
                  height={300}
                  src={person.image}
                  alt={`${person.name}'s image`}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              {/* Person's Info */}
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-bold">{person.name}</h2>
                <p className="text-xs text-gray-500">{person.profession}</p>
                <p className="text-gray-700 mt-2 text-sm">
                  {person.description}
                </p>
                <div className="mt-3">
                  {person.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-medium mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicSwiper;
