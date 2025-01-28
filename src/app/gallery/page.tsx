import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Page() {
  return (
    <div className="md:h-screen w-full grid gap-10 mt-5 mb-10 place-content-center place-items-center">
      {/* Header Section */}
      <div className="grid place-content-center place-items-center text-center w-full">
        <h1 className="text-2xl md:text-4xl tracking-wider font-bold">
          Every Frame is a Cherished Highlight
        </h1>
        <p className="mt-2 text-gray-600 text-sm w-2/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam
          esse voluptatibus corrupti cumque. Quaerat sunt suscipit dolorem porro
          veritatis esse distinctio officiis ipsum.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-flow-row md:grid-cols-12 md:grid-rows-8 gap-4 h-full w-11/12">
        {/* Row 1 */}
        <div className="w-full h-40 flex justify-center items-center col-span-6 row-span-2 rounded-xl drop-shadow-md border-2 bg-blue-100">
          Large
        </div>
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-green-100">
          Small
        </div>
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-green-100">
          Small
        </div>

        {/* Row 2 */}
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-yellow-100">
          Small
        </div>
        <div className="w-full h-40 flex justify-center items-center col-span-6 row-span-2 rounded-xl drop-shadow-md border-2 bg-red-100">
          Large
        </div>
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-blue-100">
          small
        </div>

        {/* Row 3 */}
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-purple-100">
          Small
        </div>
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-orange-100">
          Small
        </div>
        <div className="w-full h-40 flex justify-center items-center col-span-6 row-span-2 rounded-xl drop-shadow-md border-2 bg-blue-100">
          Large
        </div>

        {/* Row 4 */}
        <div className="w-full h-40 flex justify-center items-center col-span-6 row-span-2 rounded-xl drop-shadow-md border-2 bg-blue-100">
          Large
        </div>
        <div className="w-full h-40 flex justify-center items-center col-span-6 md:col-span-3 row-span-2 rounded-xl drop-shadow-md border-2 bg-green-100">
          Small
        </div>
        <div className="hidden w-full md:h-40 md:flex justify-center items-center md:col-span-3 md:row-span-2 rounded-xl drop-shadow-md border-2 bg-green-100">
          Small
        </div>
      </div>
    </div>
  );
}
