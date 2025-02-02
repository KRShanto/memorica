'use client'
import { ImageContext } from '@/context/ImageContext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import Slider from '../Carrossel/Slider'

export default function WelcomeSection() {
  const { activeImageIndex } = useContext(ImageContext)
  const sliderImages = [
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
      <div className='relative min-h-screen bg-gray-700/100 grid place-content-center place-items-center gap-5'>
        {/* Blurred Background */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={sliderImages[activeImageIndex]}
            alt='Welcome Background'
            layout='fill'
            objectFit='cover'
            priority
            className='blur-[6px]'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 text-white text-center px-4'>
          <h1 className='text-7xl font-antic mb-4 leading-tight'>
            Crafting Moments <br /> Creating Memories
          </h1>
          <p className='text-2xl mb-6 font-jakarta'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ullam voluptatibus a quia ipsa est.
          </p>
        </div>

        {/* Satisfied Clients Section */}
        <div className='relative z-10'>
          <div className='flex justify-center items-center'>
            {/* Profile Avatars */}
            <div className='flex -m-1'>
              {['female1.png', 'male1.png', 'female2.png'].map((img, index) => (
                <div
                  key={index}
                  className='md:w-8 md:h-8 sm:w-6 sm:h-6 rounded-full overflow-hidden -m-1'
                >
                  <Image
                    src={`/welcome-section/${img}`}
                    alt={`Avatar ${index + 1}`}
                    width={40} // Tailwind's `w-8` = 32px
                    height={40} // Tailwind's `h-8` = 32px
                    objectFit='cover'
                  />
                </div>
              ))}
            </div>

            {/* Count & Text */}
            <div className='flex items-center -m-1'>
              <div className='w-8 h-8 p-4 flex items-center justify-center rounded-full bg-[#8130b6] text-white text-xs'>
                100+
              </div>
              <h3 className='ml-2 text-white text-sm font-medium'>
                Satisfied Clients
              </h3>
            </div>
          </div>
        </div>

        <Link
          href={'tel:1234567890'}
          className='relative border px-2 py-1 z-10 bg-white text-[#8130b6] rounded-lg text-md mt-3 font-medium'
        >
          Book A Call
        </Link>

        {/* Slider Section */}
        <div className='w-full absolute bottom-12 left-1/2 -translate-x-1/2'>
          <Slider />
        </div>
      </div>
    </>
  )
}
