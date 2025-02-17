"use client";

import { Check, Mail } from "lucide-react";
import { EMAIL } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading and description */}
      <div>
        <h1 className="text-5xl md:text-6xl text-[#1D1F7C] mb-4 font-antic">
          Start Your Journey With Us
        </h1>
        <p className="text-gray-600 mb-6">
          Let&apos;s discuss your challenges, goals and how our expertise can
          help you achieve them
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-600">Response in 24 hours</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-600">
              Provide Solution for your uniqueness
            </span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-600">
              Assign a dedicated expert for you
            </span>
          </li>
        </ul>
      </div>

      {/* Inquiry contact */}
      <div className="bg-purple-50 rounded-lg relative top-10 p-4 inline-block">
        <p className="text-[#8159C9] text-sm">Inquiries at</p>
        <div className="flex items-center gap-2 text-[#64399A]">
          <Mail className="h-4 w-4" />
          <span>{EMAIL}</span>
        </div>
      </div>
    </div>
  );
}
