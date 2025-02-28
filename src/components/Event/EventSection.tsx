import { EventCard } from "./EventCard";
import { ScrollingGallery } from "./ScrollingGallery";

interface EventSectionProps {
  title: string;
  benefit: string;
  events: Array<{ id: string; name: string }>;
  images: Array<{ src: string; alt: string }>;
  link: string;
}

export function EventSection({
  title,
  benefit,
  events,
  images,
  link,
}: EventSectionProps) {
  return (
    <section className="mb-20" id={link.replace("#", "")}>
      <EventCard title={title} benefit={benefit} events={events} />
      <ScrollingGallery images={images} speed={100} />
    </section>
  );
}
