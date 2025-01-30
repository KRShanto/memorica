import React from "react";
import { Metadata } from "next";
import JourneyForm from "@/components/about-us/JourneyForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function page() {
  return (
    <div>
      <JourneyForm />
    </div>
  );
}
