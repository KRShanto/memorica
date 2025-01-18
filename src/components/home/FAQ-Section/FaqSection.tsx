"use client";
import { useState } from "react";
import DynamicAccordion from "./FAQ-Section";
import { FAQdata } from "../../Dummy-Data/dummyFAQ";

export default function FaqSection() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <div className="h-3/4 m-8 mt-12 flex flex-col justify-center items-center gap-3">
      {FAQdata.map((value) => {
        return (
          <DynamicAccordion
            key={value.id}
            id={value.id}
            answer={value.answer}
            question={value.question}
            activeId={index}
            setActiveId={setIndex}
          />
        );
      })}
    </div>
  );
}
