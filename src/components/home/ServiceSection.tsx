import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K5VytEv8iqPK0oeAmMOYKX0e9vKBrb.png",
    alt: "Elegant dining table with floral decorations and candles",
    className: "col-span-2 row-span-1",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    alt: "Modern minimalist table setting",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    alt: "Red and white flower arrangement",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    alt: "Art gallery exhibition",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    alt: "Conference microphone setup",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    alt: "Colorful floral centerpiece",
    className: "col-span-1 row-span-1",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1E1B4B] mb-4">
          Services, Made for You
        </h2>
        <p className="text-[#1E1B4B]/70 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative aspect-[4/3] rounded-3xl overflow-hidden group ${service.className}`}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="default"
          size="lg"
          className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8"
        >
          Explore All Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
