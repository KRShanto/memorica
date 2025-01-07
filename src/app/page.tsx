import ClientExperienceSection from "@/components/home/Client-Experiences/ClientExperienceSection";
import EventSection from "@/components/home/EventSection";
import ExploreEventSection from "@/components/home/ExploreEventSection";
import FAQSection from "@/components/home/FAQ-Section/FaqSection";
import MemoricaJourneySection from "@/components/home/MemoricaJourneySection";
import ServiceSection from "@/components/home/ServiceSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyMemoricaSection from "@/components/home/WhyMemoricaSection";
import React from "react";

export default function Page() {
  return (
    <div>
      <WelcomeSection />
      <EventSection />
      <ServiceSection />
      <ExploreEventSection />
      <WhyMemoricaSection />
      <ClientExperienceSection />
      <MemoricaJourneySection />
      <FAQSection />
    </div>
  );
}
