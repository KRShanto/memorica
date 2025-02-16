"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/journey", label: "Our Journey" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between shadow-sm p-3 mx-3">
        <Link
          href={"/"}
          className="flex items-center w-2/5 md:w-3/12 justify-center"
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={48} priority />
        </Link>
        <div className="hidden md:flex items-center justify-around w-6/12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative p-2 ${
                pathName === link.href
                  ? "text-[#ad42c9] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-[#ad42c9]"
                  : "text-gray-600 hover:text-gray-800 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] hover:after:w-8 after:bg-[#ad42c9] after:transition-width after:duration-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={"/contact"}
            className="bg-[#a948cc] py-1 px-4 rounded-md text-white"
          >
            Get Started
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-between items-center p-2 border-b">
            <div className="w-full">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={48}
                priority
              />
            </div>
            <button
              onClick={toggleMenu}
              className="p-1.5 bg-[#ad42c9] rounded-lg"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`text-lg px-4 py-2.5 ${
                  pathName === link.href
                    ? "text-[#ad42c9] bg-purple-50"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
