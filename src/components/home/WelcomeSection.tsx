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
      <div className="relative min-h-screen flex flex-col justify-between">
        {/* Blurred Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sliderImages[activeImageIndex] || "/placeholder.svg"}
            alt="Welcome Background"
            layout="fill"
            objectFit="cover"
            priority
            className="blur-[6px]"
          />
          <div className="absolute inset-0 bg-black/70 shadow-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4 pt-16 sm:pt-24 md:pt-36 lg:pt-44">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-antic mb-6 leading-tight">
            Crafting Moments <br className="sm:hidden" /> Creating{" "}
            <br className="sm:hidden" /> Memories
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mb-8 font-jakarta leading-relaxed max-w-4xl mx-auto"
            style={{ wordSpacing: "0.3em" }}
          >
            We don&apos;t just plan events; we create unforgettable experiences
            that turn into life long memories.{" "}
            <br className="hidden sm:inline" /> At Memorica, every moment we
            craft is a story waiting to be cherished.
          </p>

          {/* Satisfied Clients Section */}
          <div className="mt-10 sm:mt-14">
            <div className="flex justify-center items-center">
              {/* Profile Avatars */}
              <div className="flex -m-1">
                {["female1.png", "male1.png", "female2.png"].map(
                  (img, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden -m-1"
                    >
                      <Image
                        src={`/welcome-section/${img}`}
                        alt={`Avatar ${index + 1}`}
                        width={48}
                        height={48}
                        objectFit="cover"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Count & Text */}
              <div className="flex items-center -m-1 ml-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black text-sm sm:text-base md:text-lg font-medium">
                  100+
                </div>
                <h3 className="ml-3 text-white text-sm sm:text-base md:text-lg font-medium">
                  Satisfied Clients
                </h3>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 sm:mt-16">
            <Link
              href="/contact"
              className="border px-8 sm:px-16 py-4 sm:py-5 z-10 bg-white text-[#8130b6] rounded-lg text-base sm:text-lg font-medium inline-flex items-center gap-2 hover:bg-[#8130b6] hover:text-white transition-colors duration-300 font-inter"
            >
              Book A Call
              <GoArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full mt-16 sm:mt-20 md:mt-24 mb-8 sm:mb-12">
          <Slider />
        </div>
      </div>
    </>
  );
}
