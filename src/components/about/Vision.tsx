import Image from "next/image";

export default function Vision() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-center font-antic text-[#1D1B84] text-5xl font-light mb-16">
        Our Vision
      </h2>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="relative h-[400px] w-full">
        <Image
          src="/vision.png"
          alt="Passion led us here"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
