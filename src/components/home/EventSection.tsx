import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const eventCategories = [
  {
    title: "Wedding",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xy1w9YxT909YN79EBdbEAv7HPX9qka.png",
    tags: [
      "Engagement",
      "Mehendi",
      "Honeymoon",
      "Wedding Ceremony",
      "Reception",
    ],
  },
  {
    title: "Corporate Events",
    image: "/placeholder.svg",
    tags: [
      "Seminar",
      "Product Launches",
      "Promotion",
      "Trade Show",
      "Executive Meetings",
      "Award Ceremony",
    ],
  },
  {
    title: "Festive",
    image: "/placeholder.svg",
    tags: ["Stage Show", "Cultural Event", "Comedy Show", "Sports Event"],
  },
];

export default function EventsSection() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1E1B4B] mb-4">
          Events We Cover for You
        </h2>
        <p className="text-[#1E1B4B]/70 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {eventCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-50 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1E1B4B] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm bg-white text-[#6D28D9] rounded-full hover:bg-[#6D28D9] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="default"
          size="lg"
          className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8"
        >
          See More Events
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
