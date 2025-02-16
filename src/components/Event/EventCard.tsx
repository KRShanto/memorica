"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface EventCardProps {
  title: string;
  benefit: string;
  events: Array<{ id: string; name: string }>;
}

export function EventCard({ title, benefit, events }: EventCardProps) {
  const pathname = usePathname();

  // check if its a service or events page
  const isServicePage = pathname.includes("services");

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif text-purple-800 mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-lg font-medium mb-4">Benefit</h3>
          <p className="text-gray-600 mb-8">{benefit}</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 gap-2">
              Book A Call
              <span className="inline-block rotate-[-45deg]">→</span>
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">
            {isServicePage ? "Services We Offer" : "Events We Cover"}
          </h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <span className="text-purple-600">{event.id}</span>
                  <span>{event.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
