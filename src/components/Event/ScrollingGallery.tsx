"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ScrollingGalleryProps {
  images?: Array<{ src: string; alt: string }>;
  speed?: number; // Speed in pixels per second
}

export function ScrollingGallery({
  images = [],
  speed = 50,
}: ScrollingGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || images.length === 0) return;

    const totalWidth = scrollContainer.scrollWidth;
    const duration = totalWidth / speed; // Calculate duration based on speed

    const resetScroll = () => {
      scrollContainer.style.transition = "none";
      scrollContainer.style.transform = "translateX(0)";
      void scrollContainer.offsetHeight; // Trigger reflow
      scrollContainer.style.transition = `transform ${duration}s linear`;
      scrollContainer.style.transform = `translateX(-50%)`;
    };

    resetScroll();

    const interval = setInterval(resetScroll, duration * 1000); // Reset after full scroll

    return () => clearInterval(interval);
  }, [images, speed]);

  if (images.length === 0) {
    return null; // Or return a placeholder/loading state
  }

  const doubledImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex space-x-4 py-4">
        {doubledImages.map((image, index) => (
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
    </div>
  );
}
