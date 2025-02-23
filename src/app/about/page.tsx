import React from "react";
import { Metadata } from "next";
import Hero from "@/components/about/Hero";
import Vision from "@/components/about/Vision";
import Values from "@/components/about/Values";
import MeetTheTeam from "@/components/about/MeetTheTeam";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-jakarta">
      <Hero />
      <main className="container mx-auto px-4 py-12 space-y-20">
        <Vision />
        <Values />
        <MeetTheTeam />
      </main>
    </div>
  );
}
