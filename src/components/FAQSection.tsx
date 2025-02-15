import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      id: "01",
      question: "What types of events does Memorica specialize in?",
      answer:
        "We specialize in a wide range of events, including weddings, corporate gatherings, private parties, brand launches, and more. Whether it's an intimate celebration or a grand affair, we bring your vision to life with precision and creativity.",
    },
    {
      id: "02",
      question: "Can Memorica customize events according to my preferences?",
      answer:
        "Absolutely! We believe every event should be as unique as you are. Our team works closely with you to personalize every detail, ensuring your event reflects your style, theme, and expectations.",
    },
    {
      id: "03",
      question: "How far in advance should I book my event with Memorica?",
      answer:
        "We recommend booking as early as possible to secure your preferred date and ensure every aspect is meticulously planned. However, we also accommodate last-minute requests, depending on availability.",
    },
    {
      id: "04",
      question: "Does Memorica handle event logistics and vendor coordination?",
      answer:
        "Yes! From venue selection and décor to catering, entertainment, and vendor management, we take care of all logistics so you can enjoy a stress-free and seamless experience.",
    },
  ];

  return (
    <div className="px-4 py-12 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-antic text-[#1D1F7C] text-center mb-12 leading-tight">
        Everything You Need to Know
        <br />
        About Memorica
      </h1>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border rounded-lg px-6 py-2 data-[state=open]:bg-[#F9F7FF] data-[state=open]:border-purple-300"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-6 text-left">
                <span className="text-sm text-muted-foreground font-medium">
                  {faq.id}
                </span>
                <span className="text-base font-medium">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pl-12">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
