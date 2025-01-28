import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-7xl font-serif text-purple-800 mb-6">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-serif text-purple-600 mb-8">
        Oops! Page Not Found
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        We&lsquo;re sorry, but the page you&lsquo;re looking for seems to have
        vanished into thin air. Perhaps it&lsquo;s off attending one of our
        fabulous events?
      </p>
      <Link href="/">
        <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}
