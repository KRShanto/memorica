"use client";
import { IFaq } from "../../Dummy-Data/dummyFAQ";

interface DynamicAccordionProps extends IFaq {
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

export default function DynamicAccordion({
  id,
  question,
  answer,
  activeId,
  setActiveId,
}: IFaq & DynamicAccordionProps) {
  const show = activeId === id;
  return (
    <div
      className={`border-2 rounded-xl px-3 py-1 w-1/3 border-[#bc85de] ${
        show && "bg-[#f1ecfb]"
      }`}
    >
      <div className="relative flex items-center">
        <h1 className="text-2xl w-1/5 text-gray-500">{id}</h1>
        <p className="w-4/5 font-bold">{question}</p>
        <button
          className="absolute right-0"
          onClick={() => setActiveId(activeId === id ? null : id)}
        >
          {show ? (
            <div className="px-2 text-xl border rounded-lg bg-[#a254d0] text-white transition duration-1000 ease-in">
              -
            </div>
          ) : (
            <div className="text-xl transition duration-300 ease-out px-1 rounded-xl">
              +
            </div>
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          show ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="w-4/5 mx-auto text-justify">{answer}</p>
      </div>
    </div>
  );
}
