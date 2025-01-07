import { ArrowBigUp } from "lucide-react";
import React from "react";

export default function MemoricaJourneySection() {
  return (
    <div className="grid place-items-center place-content-center w-3/4 mx-auto m-8">
      <h1 className="text-3xl tracking-widest">Why Work With Memorica?</h1>
      <p className="text-sm tracking-wide w-2/3 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur
        corporis ut neque inventore ducimus quibusdam repudiandae cumque,
        aliquid minus provident eum iste veniam quasi minima voluptate enim
        libero sint!
      </p>

      <div className="grid grid-cols-2 w-3/4 place-items-center place-content-center ">
        <div className="w-3/4 h-96 rounded-2xl bg-slate-400"></div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index} className="p-3  shadow-md rounded-lg space-y-2">
                <ArrowBigUp />
                <h1 className="text-xl">Reason *</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  laudantium quidem porro enim corrupti! Animi dolorem, ducimus
                  dicta.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
