import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WhyWorkSection() {
  const reasons = [
    {
      id: 1,
      title: "Unmatched Creativity",
      description:
        "We go beyond the ordinary, curating fresh, creative, and immersive event experiences that leave a lasting impact.",
    },
    {
      id: 2,
      title: "Seamless Execution",
      description:
        "From concept to completion, we handle every detail with precision, ensuring a seamless and worry-free event for you.",
    },
    {
      id: 3,
      title: "Personalized Experience",
      description:
        "Your vision is our blueprint. We tailor every detail to reflect your style, personality, and unique story.",
    },
    {
      id: 4,
      title: "Memorable Moments",
      description:
        "We don’t just organize events; we craft memories that linger in hearts long after the celebration ends.",
    },
  ];

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] mb-4">
          Why Work With Memorica?
        </h2>
        <p className="text-[#1E1B4B]/70 max-w-3xl mx-auto">
          At Memorica, we blend creativity, precision, and passion to craft
          events that leave a lasting impression. With our expertise and
          dedication, your special moments are in the best hands.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="/whywork.png"
            alt="People gathering at a restaurant bar"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason.id} className="group">
              <div className="bg-[#F9F7FF] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6D28D9] transition-colors">
                <ArrowUpRight className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E1B4B] mb-2">
                {reason.title}
              </h3>
              <p className="text-[#1E1B4B]/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
