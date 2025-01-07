import React from "react";

export default function ServiceSection() {
  return (
    <div className="relative grid place-content-center place-items-center mx-auto w-3/4 gap-5 mb-8 -mt-40 rounded-full text-center bg-gray-50/90 z-10 p-6">
      <div className="absolute inset-0 shadow-2xl bg-white blur-3xl -z-10"></div>
      <h1 className="text-3xl tracking-widest">Services, Made For You</h1>
      <p className="text-sm tracking-wider px-12 w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        officiis velit quidem! Totam eligendi ad corporis veniam cumque quae et
        illo vero. Vero non suscipit veritatis quasi, laborum iste eius.
      </p>
      <div className="w-2/3 flex gap-3 justify-center items-center">
        <div className="w-6/12 h-32 bg-gray-400 border rounded-lg"></div>
        <div className="bg-gray-400 w-3/12 h-32 border rounded-lg"></div>
        <div className="bg-gray-700 w-3/12 h-32 border rounded-lg"></div>
      </div>
      <div className="flex gap-3 w-2/3 justify-center items-center">
        <div className="bg-gray-400 w-3/12 h-32 border rounded-lg"></div>
        <div className="w-6/12 h-32 bg-gray-400 border rounded-lg"></div>
        <div className="bg-gray-700 w-3/12 h-32 border rounded-lg"></div>
      </div>
    </div>
  );
}
