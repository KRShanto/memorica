"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Ahmed",
    role: "Event Director",
    company: "Luxury Weddings Co.",
    image: "/clients/client1.jpg",
    quote:
      "Memorica transformed our wedding planning process. Their attention to detail and innovative event management solutions made every moment magical. Highly recommended for luxury events.",
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Marketing Manager",
    company: "Tech Summit International",
    image: "/clients/client2.png",
    quote:
      "Working with Memorica for our annual tech summit was a game-changer. Their digital integration and seamless event coordination helped us deliver an unforgettable experience.",
  },
  {
    id: 3,
    name: "Tanvir Rahman",
    role: "Operations Director",
    company: "Global Conferences Ltd",
    image: "/clients/client3.jpg",
    quote:
      "Memorica's event management platform streamlined our entire conference planning process. From registration to execution, everything was flawless. A must-have for large-scale events.",
  },
];

export default function TestimonialCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[500px] py-8 px-4 flex items-center justify-center">
      <div className="relative w-full max-w-2xl h-[300px] sm:h-[350px] md:h-[400px]">
        {testimonials.map((testimonial, index) => {
          const position =
            (index - currentIndex + testimonials.length) % testimonials.length;

          return (
            <motion.div
              key={testimonial.id}
              className="absolute inset-0 bg-white rounded-2xl border-2 border-gray-200 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-[1fr,1fr] gap-4 sm:gap-6"
              initial={false}
              animate={{
                rotate: position === 0 ? -2 : position === 1 ? 0 : 2,
                opacity: position === 0 ? 1 : 0.7,
                scale: position === 0 ? 1 : 0.98,
                zIndex: testimonials.length - position,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "center center",
              }}
            >
              <div className="relative w-full h-48 sm:h-full rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <button
          onClick={handlePrevious}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#A412A4] to-[#C235C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity z-50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#A412A4] to-[#C235C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity z-50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
