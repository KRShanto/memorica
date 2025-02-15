"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { Menu } from "lucide-react";
export default function Navbar() {
  const pathName = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/journey", label: "Our Journey" },
    { href: "/about", label: "About Us" },
  ];
  return (
    <nav className="flex items-center justify-between shadow-sm p-3 ml-3 mr-3">
      <Link
        href={"/"}
        className="flex items-center w-2/5  md:w-3/12 justify-center"
      >
        <Image src={logo} alt="Logo" width={100} height={48} />
      </Link>
      <div className="hidden md:flex items-center justify-around w-6/12">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative p-2 font-jakarta ${
                pathName === link.href
                  ? "text-[#ad42c9] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-[#ad42c9]"
                  : "text-gray-600 hover:text-gray-800 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] hover:after:w-8 after:bg-[#ad42c9] after:transition-width after:duration-300"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex items-center w-3/12 justify-center">
        <Link
          href={"/contact"}
          className="bg-[#a948cc] py-1 px-4 rounded-md text-white"
        >
          Get Started
        </Link>
      </div>
      <Menu className="w-4/12 h-12 md:hidden" />
    </nav>
  );
}
