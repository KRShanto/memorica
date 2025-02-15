import { EventSection } from "@/components/Event/EventSection";
import { Metadata } from "next";

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

  const eventSections = [
    {
      title: "Wedding",
      benefit:
        "Your wedding day is a once-in-a-lifetime moment, and we ensure it’s nothing short of perfection. We create unforgettable wedding memories filled with love, elegance, and joy. Every experience we craft is designed to be cherished for a lifetime.",
      events: [
        { id: "01", name: "Engagement" },
        { id: "02", name: "Mehedi" },
        { id: "03", name: "Honeymoon Planning" },
        { id: "04", name: "Wedding Ceremony" },
        { id: "05", name: "Reception" },
      ],
      images: [
        {
          src: "/events-page/wedding-1.png",
          alt: "Wedding event 1",
        },
        {
          src: "/events-page/wedding-2.png",
          alt: "Wedding event 2",
        },
        {
          src: "/events-page/wedding-3.png",
          alt: "Wedding event 3",
        },
        {
          src: "/events-page/wedding-4.png",
          alt: "Wedding event 4",
        },
        {
          src: "/events-page/wedding-5.png",
          alt: "Wedding event 5",
        },
      ],
    },
    {
      title: "Corporate Events",
      benefit:
        "Elevate your corporate gatherings with events that inspire, engage, and leave a lasting impact. From conferences to product launches, we craft seamless experiences that reflect your brand’s vision and professionalism. At Memorica, every detail is designed for success.",
      events: [
        { id: "01", name: "Conference Services" },
        { id: "02", name: "Team Building" },
        { id: "03", name: "Award Ceremony" },
        { id: "04", name: "Product Launch" },
        { id: "05", name: "Executive Retreats" },
      ],
      images: [
        {
          src: "/events-page/wedding-1.png",
          alt: "Corporate event 1",
        },
        {
          src: "/events-page/wedding-2.png",
          alt: "Corporate event 2",
        },
        {
          src: "/events-page/wedding-3.png",
          alt: "Corporate event 3",
        },
        {
          src: "/events-page/wedding-4.png",
          alt: "Corporate event 4",
        },
        {
          src: "/events-page/wedding-5.png",
          alt: "Corporate event 5",
        },
      ],
    },
    {
      title: "Festive",
      benefit:
        "Celebrate the spirit of every festival with grandeur, joy, and unforgettable moments. Whether it's cultural festivities, holiday parties, or themed celebrations, we bring vibrant energy to every event. At Memorica, we turn festive occasions into cherished memories.",
      events: [
        { id: "01", name: "Birthday Party" },
        { id: "02", name: "Cultural Events" },
        { id: "03", name: "Holiday Events" },
        { id: "04", name: "Special Events" },
        { id: "05", name: "Seasonal Celebrations" },
      ],
      images: [
        {
          src: "/events-page/wedding-1.png",
          alt: "Festive event 1",
        },
        {
          src: "/events-page/wedding-2.png",
          alt: "Festive event 2",
        },
        {
          src: "/events-page/wedding-3.png",
          alt: "Festive event 3",
        },
        {
          src: "/events-page/wedding-4.png",
          alt: "Festive event 4",
        },
        {
          src: "/events-page/wedding-5.png",
          alt: "Festive event 5",
        },
      ],
    },
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
