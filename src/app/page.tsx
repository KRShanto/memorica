import FAQSection from "@/components/Dummy-Data/dummyFAQ";
import ClientExperienceSection from "@/components/home/Client-Experiences/ClientExperienceSection";
import EventSection from "@/components/home/EventSection";
import ExploreEventSection from "@/components/home/ExploreEventSection";
import MemoricaJourneySection from "@/components/home/MemoricaJourneySection";
import ServiceSection from "@/components/home/ServiceSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyMemoricaSection from "@/components/home/WhyMemoricaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crafting Memories with Memorica",
};

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
