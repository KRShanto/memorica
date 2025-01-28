import { EventSection } from "@/components/Event/EventSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const eventTypes = [
    { id: "01", name: "Event Planning & Strategy" },
    { id: "02", name: "Design & Decor" },
    { id: "03", name: "Vendor Management" },
    { id: "04", name: "Guest & Audience Management" },
    { id: "05", name: "Entertainment & Activities" },
    { id: "06", name: "Marketing & Promotion" },
    { id: "07", name: "Audio-Visual & Technical Support" },
    { id: "08", name: "Logistic & Transportation" },
    { id: "09", name: "Event Safety & Security" },
    { id: "10", name: "Post Event Services" },
    { id: "11", name: "Special Services" },
    { id: "12", name: "Food & Beverage Coordination" },
  ];

  const eventSections = [
    {
      title: "Event Planning & Strategy",
      benefit:
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Mattis vitae mauris porttitor sagittis neque. Sem eget fringilla lacus amet posuere morbi. Tincidunt dui dui mollis pretium.",
      events: [
        { id: "01", name: "Concept Development & Theme Creation" },
        { id: "02", name: "Event Objectives & Goals Setting" },
        { id: "03", name: "Budget Planning & Management" },
        { id: "04", name: "Timeline Creation & Scheduling" },
        { id: "05", name: "Venue Sourcing & Booking" },
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
      title: "Design & Decor",
      benefit:
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Elevate your corporate gatherings with our expert planning and execution. We handle everything from venue selection to catering, ensuring your event leaves a lasting impression.",
      events: [
        { id: "01", name: "Event Design & Theme Decor" },
        { id: "02", name: "Venue Layout & Seating Arrangments" },
        { id: "03", name: "Floral Arrangements, Lighting, and Ambiance" },
        { id: "04", name: "Stage Setup & Custom Displays" },
        { id: "05", name: "Branding Materials, Banners and Signboard" },
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
      title: "Vendor Management",
      benefit:
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Create memorable celebrations that bring joy and excitement to any occasion. Our team specializes in crafting unique experiences that capture the spirit of your festive gathering.",
      events: [
        {
          id: "01",
          name: "Coordinating with Caterers, Decorators & Photographers",
        },
        { id: "02", name: "Audio-Visuals (AV) & Technical Setup Providers" },
        { id: "03", name: "Transportaion & Logistic for Guests & Crew" },
        { id: "04", name: "Rentals (Furniture, Tent, Lines, Vehicle etc." },
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
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-antic text-purple-800 mb-3 ">
          Our Journey: A Path to <br />
          Unforgettable Celebrations
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard. Lorem
          Ipsum is simply dummy text of the
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
