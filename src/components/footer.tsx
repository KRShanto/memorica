import Image from "next/image";
import feather from "../../public/feather.svg";
import logo from "../../public/logo.svg";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircleMore,
  MoveUpRight,
  Twitter,
} from "lucide-react";
import { EMAIL, PHONE } from "@/lib/constants";

export default function Footer() {
  return (
    <div className="w-full py-10 bg-[#f1ecfb] font-antic">
      <div className="w-5/6 h-full mx-auto grid place-content-center relative space-y-16">
        {/* logo and text */}
        <div className="flex flex-col space-y-6">
          <Image src={logo} alt="logo" />
          <div className="md:flex md:flex-row flex-col justify-center items-center space-y-4">
            <h1 className="text-[#1D1F7C] md:text-4xl text-2xl">
              Together, lets make your next event a cherished memory.
            </h1>
            <Link
              className="bg-[#a948cc] md:py-2 md:px-2 py-3 px-4 rounded-md text-white w-1/2 md:w-1/4 text-center flex items-center gap-2 justify-center self-start z-20"
              href={"/contact"}
            >
              Get Started <MoveUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col md:flex md:flex-row w-3/4 gap-16">
          <div className="flex flex-col">
            <h1 className="text-[#64399A] text-xl mb-2 font-semibold font-jakarta">
              Important
            </h1>
            <div className="flex flex-col gap-1 font-jakarta text-[#8159C9]">
              <Link className="text-sm" href={"/"}>
                Home
              </Link>
              <Link className="text-sm" href={"/events"}>
                Events
              </Link>
              <Link className="text-sm" href={"/services"}>
                Services
              </Link>
              <Link className="text-sm" href={"/gallery"}>
                Gallery
              </Link>
              <Link className="text-sm" href={"/journey"}>
                Our Journey
              </Link>
              <Link className="text-sm" href={"/about"}>
                About Us
              </Link>
            </div>
          </div>

          {/* legal */}
          <div className="flex flex-col">
            <h1 className="text-[#64399A] text-xl mb-2 font-semibold font-jakarta">
              Legal
            </h1>
            <div className="flex flex-col gap-1 font-jakarta text-[#8159C9]">
              <Link className="text-sm" href={"/privacy-policy"}>
                Privacy Policy
              </Link>
              <Link className="text-sm" href={"/terms-and-conditions"}>
                Terms and Conditions
              </Link>
              <Link className="text-sm" href={"/privacy-policy"}>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col">
            <h1 className="text-[#64399A] text-xl mb-2 font-semibold font-jakarta">
              Contact
            </h1>
            <div className="flex flex-col gap-1 font-jakarta text-[#8159C9]">
              <Link
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm"
              >
                <Mail size={12} />
                <p>{EMAIL}</p>
              </Link>
              <Link
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-sm"
              >
                <MessageCircleMore size={12} />
                <p>{PHONE}</p>
              </Link>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="flex md:justify-between flex-col-reverse md:flex-row text-sm gap-5 font-jakarta">
          <p>Copyright © 2024 - All Rights Reserved</p>
          <div className="flex gap-3">
            <Link
              className="rounded-full border p-2 bg-[#ad42c9] text-white"
              href={"https://www.facebook.com/profile.php?id=61573569511811"}
              target="_blank"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              className="rounded-full border p-2 bg-[#ad42c9] text-white"
              href={"https://www.instagram.com/"}
              target="_blank"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              className="rounded-full border p-2 bg-[#ad42c9] text-white"
              href={"https://www.linkedin.com/"}
              target="_blank"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              className="rounded-full border p-2 bg-[#ad42c9] text-white"
              href={"https://www.twitter.com/"}
              target="_blank"
            >
              <Twitter className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* feather image */}
        <div className="hidden z-10 md:block md:absolute md:right-4 md:bottom-16 xl:top-12 2xl:right-64 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Image src={feather} alt="feather" />
        </div>
      </div>
    </div>
  );
}
