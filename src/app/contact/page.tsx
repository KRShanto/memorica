import React from "react";
import { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-jakarta">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>

      <ContactMap />
    </div>
  );
}
