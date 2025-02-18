"use client";
import { ImageContext } from "@/context/ImageContext";
import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
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
      <div className="w-full max-w-[90rem] mx-auto px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          loopAdditionalSlides={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 6,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          onSlideChange={(swiper) => {
            setActiveImageIndex(swiper.realIndex);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              coverflowEffect: {
                depth: 50,
                modifier: 3,
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: {
                depth: 75,
                modifier: 4,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              coverflowEffect: {
                depth: 100,
                modifier: 6,
              },
            },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`relative rounded-xl shadow-xl overflow-hidden transition-all ${
                activeImageIndex === index ? "border-3 border-white" : ""
              }`}
            >
              <div className="relative aspect-[3/4] sm:aspect-[16/9]">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
