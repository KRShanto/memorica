"use client";
import { ImageContext } from "@/context/ImageContext";
import Image from "next/image";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselThreeD() {
  const { activeImageIndex, setActiveImageIndex } = useContext(ImageContext);
  const images = [
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
      <div className="w-[83rem] mx-auto  flex items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Adjusted to show 3 slides at a time
          spaceBetween={100}
          loop={true}
          loopAdditionalSlides={3} // Ensures the loop has enough slides to show on both sides
          onSlideChange={(swiper) => {
            setActiveImageIndex(swiper.realIndex);
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 5.5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`relative  rounded-lg shadow-lg overflow-hidden transition-all ${
                activeImageIndex === index ? "border-2 border-white" : ""
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                  width={1500}
                  height={1500}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
