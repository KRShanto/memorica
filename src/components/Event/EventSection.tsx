import { EventCard } from "./EventCard";
import { ScrollingGallery } from "./ScrollingGallery";

interface EventSectionProps {
  title: string;
  benefit: string;
  events: Array<{ id: string; name: string }>;
  images: Array<{ src: string; alt: string }>;
}

export function EventSection({
  title,
  benefit,
  events,
  images,
}: EventSectionProps) {
  return (
    <section className="mb-20">
      <EventCard title={title} benefit={benefit} events={events} />
      <ScrollingGallery images={images} />
    </section>
  );
}
