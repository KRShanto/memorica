'use client'
import { ImageContext } from '@/context/ImageContext'
import Image from 'next/image'
import { useContext } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CarouselThreeD() {
  const { activeImageIndex, setActiveImageIndex } = useContext(ImageContext)
  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
  ]

  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 12,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='w-3/4 h-52'
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`relative w-28 h-52 rounded-lg shadow-lg overflow-hidden transition-all ${
                activeImageIndex === index ? 'border-4 border-white' : ''
              }`}
            >
              <div className='relative w-full h-full'>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
