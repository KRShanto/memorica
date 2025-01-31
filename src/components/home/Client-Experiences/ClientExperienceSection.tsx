"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Fahim Ahmed",
    role: "Founder, Morphex",
    image: "/clients/client1.png",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Arcu porttitor dolor aliquet imperdiet. Curabitur pellentesque blandit lectus lectus gravida.",
    tags: ["Wedding", "Haldi Night"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO, EventPro",
    image: "/clients/client2.png",
    quote:
      "Exceptional service and attention to detail. The team went above and beyond to make our corporate event truly memorable.",
    tags: ["Corporate", "Conference"],
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Director",
    image: "/clients/client3.png",
    quote:
      "Working with this team was a pleasure. They transformed our vision into reality with professionalism and creativity.",
    tags: ["Product Launch", "Gala"],
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] text-center max-w-4xl mx-auto leading-tight mb-16">
        Client Experiences that Inspire Us to Keep Creating Excellence
      </h2>

      <div className="relative h-[600px] md:h-[400px]">
        {/* Stacked card effect */}
        <div className="absolute inset-0 scale-[1.02] -rotate-2 bg-white rounded-3xl border opacity-50" />
        <div className="absolute inset-0 scale-[1.01] rotate-1 bg-white rounded-3xl border opacity-75" />

        {/* Main testimonial card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <Card className="h-full bg-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                  <blockquote className="text-lg text-gray-700">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>

                  <div className="flex gap-2">
                    {testimonials[currentIndex].tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#F9F7FF] text-[#6D28D9] hover:bg-[#F9F7FF]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Button
          variant="default"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6D28D9] hover:bg-[#5B21B6] rounded-full shadow-lg z-10"
          onClick={() => paginate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="default"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6D28D9] hover:bg-[#5B21B6] rounded-full shadow-lg z-10"
          onClick={() => paginate(1)}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>

        {/* Dots indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#6D28D9]" : "bg-gray-300"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
