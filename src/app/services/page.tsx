import { EventSection } from "@/components/Event/EventSection";
import { Metadata } from "next";
import { serviceSections } from "@/data/serviceSectionsData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const eventTypes = [
    { id: "01", name: "Event Planning & Strategy", link: "#event-planning" },
    { id: "02", name: "Design & Decor", link: "#design-decor" },
    { id: "03", name: "Vendor Management", link: "#vendor-management" },
    {
      id: "04",
      name: "Guest & Audience Management",
      link: "#guest-management",
    },
    {
      id: "05",
      name: "Entertainment & Activities",
      link: "#entertainment-activities",
    },
    { id: "06", name: "Marketing & Promotion", link: "#marketing-promotion" },
    {
      id: "07",
      name: "Audio-Visual & Technical Support",
      link: "#audio-visual-support",
    },
    {
      id: "08",
      name: "Logistic & Transportation",
      link: "#logistic-transportation",
    },
    { id: "09", name: "Event Safety & Security", link: "#event-safety" },
    { id: "10", name: "Post Event Services", link: "#post-event-services" },
    { id: "11", name: "Special Services", link: "#special-services" },
    { id: "12", name: "Food & Beverage Coordination", link: "#food-beverage" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-antic text-purple-800 mb-3 ">
          Our Journey: A Path to <br />
          Unforgettable Celebrations
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          From graduation ceremonies to academic conferences, we create events
          that inspire and celebrate achievements. Our seamless planning ensures
          a professional and engaging experience for students, educators, and
          guests. At Memorica, we make every academic milestone truly
          unforgettable.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-4 mb-20">
        {eventTypes.map((event) => (
          <Link
            href={`/services${event.link}`}
            key={event.id}
            className="flex items-center justify-between p-4 rounded-lg border hover:border-purple-600 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-purple-600 font-medium">{event.id}</span>
              <span className="text-gray-900">{event.name}</span>
            </div>
            <span className="text-purple-600">→</span>
          </Link>
        ))}
      </section>

      {serviceSections.map((section, index) => (
        <EventSection
          key={index}
          title={section.title}
          benefit={section.benefit}
          events={section.events}
          images={section.images}
          link={section.link}
        />
      ))}
    </div>
  );
}
