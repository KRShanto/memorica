"use client";

import Image from "next/image";
import ContactCard from "./Card";

export default function ContactMap() {
  return (
    <div className="mt-12 relative">
      <Image
        src="/map-full.png"
        alt="Map"
        width={1200}
        height={800}
        className="mx-auto mt-12"
      />
      <ContactCard />
    </div>
  );
}
