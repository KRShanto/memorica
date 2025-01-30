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
      question: "Why Memorica is Different from Other Event Management Agency?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing maecenas dolor et viverra proin. Dignissim dui facilisis amet nulla odio. Etiam pellentesque dignissim tortor amet at. Facilisis ultrices dui odio ornare pellentesque in tempor. Quam sagittis viverra adipiscing etiam. Fermentum cursus sit egestas ipsum. Tempus duis.",
    },
    {
      id: "02",
      question: "Why Memorica is Different from Other Event Management Agency?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing maecenas dolor et viverra proin. Dignissim dui facilisis amet nulla odio.",
    },
    {
      id: "03",
      question: "Why Memorica is Different from Other Event Management Agency?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing maecenas dolor et viverra proin. Dignissim dui facilisis amet nulla odio.",
    },
    {
      id: "04",
      question: "Why Memorica is Different from Other Event Management Agency?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing maecenas dolor et viverra proin. Dignissim dui facilisis amet nulla odio.",
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
