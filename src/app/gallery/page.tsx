"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const images = Array.from({ length: 14 }, (_, i) => ({
  src: `/gallery-images/gallery${i + 1}.png`,
  alt: `Gallery Image ${i + 1}`,
  width: 600,
  height: 400, // You can adjust the default width and height as needed
}));

export default function EventGallery() {
  const breakpointColumns = {
    default: 4,
    1536: 3,
    1280: 3,
    1024: 2,
    768: 2,
    640: 1,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-[1800px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#1D1F7C] mb-4 font-antic">
            Every Frame,
            <br />a Cherished Highlight
          </h1>
          <p className="text-[#1D1F7C] max-w-2xl mx-auto font-inter">
            Bringing seamless, engaging, and interactive virtual experiences to
            life. From online conferences to digital celebrations, we ensure
            every detail is executed flawlessly. At Memorica, we connect people
            beyond boundaries, making every virtual event impactful and
            memorable.
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
