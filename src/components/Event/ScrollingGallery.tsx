"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ScrollingGalleryProps {
  images: Array<{ src: string; alt: string }>;
}

export function ScrollingGallery({ images }: ScrollingGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition > scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-hidden space-x-4 py-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {images.concat(images).map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={200}
          height={150}
          className="rounded-lg object-cover w-[200px] h-[150px] flex-shrink-0"
        />
      ))}
    </div>
  );
}
