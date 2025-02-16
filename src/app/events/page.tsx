import { EventSection } from "@/components/Event/EventSection";
import { Metadata } from "next";
import { eventSections } from "@/data/eventSectionsData";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  const eventTypes = [
    { id: "01", name: "Wedding" },
    { id: "02", name: "Corporate Events" },
    { id: "03", name: "Festive" },
    { id: "04", name: "Academic Events" },
    { id: "05", name: "Charity Events" },
    { id: "06", name: "Government Events" },
    { id: "07", name: "Private Events" },
    { id: "08", name: "Virtual Events" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-antic text-purple-800 mb-3 ">
          From Dreams to Reality
          <br />
          Events We Craft Just for You
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We transform your dreams into breathtaking celebrations, meticulously
          designed to reflect your vision. Every event we craft is a seamless
          blend of elegance, creativity, and unforgettable moments.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-4 mb-20">
        {eventTypes.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-4 rounded-lg border hover:border-purple-600 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-purple-600 font-medium">{event.id}</span>
              <span className="text-gray-900">{event.name}</span>
            </div>
            <span className="text-purple-600">→</span>
          </div>
        ))}
      </section>

      {eventSections.map((section, index) => (
        <EventSection
          key={index}
          title={section.title}
          benefit={section.benefit}
          events={section.events}
          images={section.images}
        />
      ))}
    </div>
  );
}
