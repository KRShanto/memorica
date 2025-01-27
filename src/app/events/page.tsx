import { EventSection } from "@/components/Event/EventSection";

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
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Mattis vitae mauris porttitor sagittis neque. Sem eget fringilla lacus amet posuere morbi. Tincidunt dui dui mollis pretium.",
      events: [
        { id: "01", name: "Engagement" },
        { id: "02", name: "Mehedi" },
        { id: "03", name: "Honeymoon Planning" },
        { id: "04", name: "Wedding Ceremony" },
        { id: "05", name: "Reception" },
      ],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNO12nBVgpV2Z3kazAJD9WwlxQ11FN.png",
          alt: "Wedding event 1",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNO12nBVgpV2Z3kazAJD9WwlxQ11FN.png",
          alt: "Wedding event 2",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNO12nBVgpV2Z3kazAJD9WwlxQ11FN.png",
          alt: "Wedding event 3",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNO12nBVgpV2Z3kazAJD9WwlxQ11FN.png",
          alt: "Wedding event 4",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uNO12nBVgpV2Z3kazAJD9WwlxQ11FN.png",
          alt: "Wedding event 5",
        },
      ],
    },
    {
      title: "Corporate Events",
      benefit:
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Elevate your corporate gatherings with our expert planning and execution. We handle everything from venue selection to catering, ensuring your event leaves a lasting impression.",
      events: [
        { id: "01", name: "Conference Services" },
        { id: "02", name: "Team Building" },
        { id: "03", name: "Award Ceremony" },
        { id: "04", name: "Product Launch" },
        { id: "05", name: "Executive Retreats" },
      ],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Corporate event 1",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Corporate event 2",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Corporate event 3",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Corporate event 4",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Corporate event 5",
        },
      ],
    },
    {
      title: "Festive",
      benefit:
        "Lorem ipsum dolor sit amet consectetur. Nisi commodo faucibus consequat in auctor varius euismod dictum. Create memorable celebrations that bring joy and excitement to any occasion. Our team specializes in crafting unique experiences that capture the spirit of your festive gathering.",
      events: [
        { id: "01", name: "Birthday Party" },
        { id: "02", name: "Cultural Events" },
        { id: "03", name: "Holiday Events" },
        { id: "04", name: "Special Events" },
        { id: "05", name: "Seasonal Celebrations" },
      ],
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Festive event 1",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Festive event 2",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Festive event 3",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
          alt: "Festive event 4",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dehYxzGETgEQRmUW6lPmL84uHIA6bM.png",
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
