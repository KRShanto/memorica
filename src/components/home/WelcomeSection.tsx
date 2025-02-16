"use client";
import { ImageContext } from "@/context/ImageContext";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { useContext } from "react";
import Slider from "../Carrossel/Slider";

export default function WelcomeSection() {
  const { activeImageIndex } = useContext(ImageContext);
  const sliderImages = [
    "/hero/hero1.png",
    "/hero/hero2.png",
    "/hero/hero3.png",
    "/hero/hero4.png",
    "/hero/hero5.png",
    "/hero/hero6.png",
    "/hero/hero7.png",
  ];
  return (
    <>
      <div className="relative min-h-screen ">
        {/* Blurred Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sliderImages[activeImageIndex]}
            alt="Welcome Background"
            layout="fill"
            objectFit="cover"
            priority
            className="blur-[6px]"
          />
          <div className="absolute inset-0 bg-black/70 shadow-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-7xl font-antic mb-4 leading-tight relative top-20">
            Crafting Moments <br /> Creating Memories
          </h1>
          <p
            className="text-lg mb-6 font-jakarta relative top-20 leading-relaxed"
            style={{ wordSpacing: "0.3em" }}
          >
            We don’t just plan events; we create unforgettable experiences that
            turn into life long memories. <br /> At Memorica, every moment we
            craft is a story waiting to be cherished.
          </p>
        </div>

        {/* Satisfied Clients Section */}
        <div className="relative z-10  top-20">
          <div className="flex justify-center items-center">
            {/* Profile Avatars */}
            <div className="flex -m-1">
              {["female1.png", "male1.png", "female2.png"].map((img, index) => (
                <div
                  key={index}
                  className="md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full overflow-hidden -m-1"
                >
                  <Image
                    src={`/welcome-section/${img}`}
                    alt={`Avatar ${index + 1}`}
                    width={40} // Tailwind's `w-8` = 32px
                    height={40} // Tailwind's `h-8` = 32px
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            {/* Count & Text */}
            <div className="flex items-center -m-1">
              <div className="w-8 h-8 p-4 flex items-center justify-center rounded-full bg-white text-black text-xs">
                100+
              </div>
              <h3 className="ml-2 text-white text-sm font-medium">
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center">
          <Link
            href="/contact"
            className="border px-14 py-2 z-10 bg-white text-[#8130b6] rounded-lg text-md mt-3 font-medium w-fit relative top-28 font-inter"
          >
            Book A Call
            <GoArrowUpRight className="inline-block ml-2" />
          </Link>
        </div>

        {/* Slider Section */}
        <div className="w-full absolute bottom-12 left-1/2 -translate-x-1/2">
          <Slider />
        </div>
      </div>
    </>
  );
}
