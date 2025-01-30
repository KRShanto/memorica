import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WhyWorkSection() {
  const reasons = [
    {
      id: 1,
      title: "Reason 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      id: 2,
      title: "Reason 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      id: 3,
      title: "Reason 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      id: 4,
      title: "Reason 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1E1B4B] mb-4">
          Why Work With Memorica?
        </h2>
        <p className="text-[#1E1B4B]/70 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-snoSCoGGGY6V0Phis3mhX1ris3fwFc.png"
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
