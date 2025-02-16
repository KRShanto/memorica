"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

export default function BackgroundSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/explore/explore1.jpg",
    "/explore/explore2.jpg",
    "/explore/explore3.jpg",
    "/explore/explore4.jpg",
    "/explore/explore5.jpg",
    "/explore/explore6.jpg",
    "/explore/explore7.jpg",
    "/explore/explore8.jpg",
    "/explore/explore9.jpg",
    "/explore/explore10.jpg",
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={100}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 30,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-72"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="relative w-52 h-52 rounded-lg  overflow-hidden transition-all"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
