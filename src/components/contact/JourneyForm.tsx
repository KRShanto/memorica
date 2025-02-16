"use client";

import { Users, Check, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import ContactCard from "./Card";

export default function JourneyForm() {
  const [guestEmails, setGuestEmails] = useState<string[]>([]);

  const addGuest = () => {
    setGuestEmails([...guestEmails, ""]);
  };

  const removeGuest = (index: number) => {
    setGuestEmails(guestEmails.filter((_, i) => i !== index));
  };

  const updateGuestEmail = (index: number, value: string) => {
    const newGuestEmails = [...guestEmails];
    newGuestEmails[index] = value;
    setGuestEmails(newGuestEmails);
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-jakarta">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl  text-[#1D1F7C] mb-4 font-antic">
              Start Your Journey With Us
            </h1>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your challenges, goals and how our expertise
              can help you achieve them
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
                  Provide Solution for you uniqueness
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

          <div className="bg-purple-50 rounded-lg relative top-10 p-4 inline-block">
            <p className="text-[#8159C9] text-sm">Inquiries at</p>
            <div className="flex items-center gap-2 text-[#64399A]">
              <Mail className="h-4 w-4" />
              <span>memorica.events@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#F1ECFB] rounded-lg p-6 shadow-lg">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input id="name" required className="border-0 bg-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                className="border-0 bg-white"
              />
            </div>

            <div className="space-y-3">
              {guestEmails.map((email, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`guest-${index}`}>
                      Guest Email Address
                    </Label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeGuest(index)}
                      className="h-6 w-6 p-0 hover:bg-purple-100"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                  <Input
                    id={`guest-${index}`}
                    type="email"
                    value={email}
                    onChange={(e: any) =>
                      updateGuestEmail(index, e.target.value)
                    }
                    className="border-0 bg-white"
                  />
                </div>
              ))}

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addGuest}
                className="text-purple-600 hover:text-purple-700 flex items-center gap-1 px-0"
              >
                <Users className="h-4 w-4" />
                Add Guests
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Meeting Type *</Label>
                <Select>
                  <SelectTrigger className="border-0 bg-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="virtual">Virtual Meeting</SelectItem>
                    <SelectItem value="in-person">In-Person Meeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Meeting Time *</Label>
                <Select>
                  <SelectTrigger className="border-0 bg-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Company Website Link</Label>
              <Input id="website" className="border-0 bg-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                className="min-h-[120px] border-0 bg-white"
              />
            </div>

            <div className="flex items-center justify-start text-sm">
              <p className="text-gray-600">
                By continuing, you agree to our{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms & Privacy Policy
                </a>
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600 text-white"
            >
              Confirm
            </Button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12  relative">
        <Image
          src="/map-full.png"
          alt="Map"
          width={1200}
          height={800}
          className="mx-auto mt-12"
        />
        <ContactCard />
      </div>
    </div>
  );
}
