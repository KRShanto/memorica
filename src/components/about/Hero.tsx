export default function Hero() {
  return (
    <header
      className="relative h-[300px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative text-5xl md:text-7xl font-semibold text-white mb-2 font-antic">
        Memorica
      </h1>
      <p className="relative text-2xl text-white font-light  font-antic">
        Crafting Moments, Crafting Memories
      </p>
    </header>
  );
}
