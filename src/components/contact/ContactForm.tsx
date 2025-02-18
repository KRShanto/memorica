"use client";

import { useState } from "react";
import { Users, X } from "lucide-react";
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

export default function ContactForm() {
  const [guestEmails, setGuestEmails] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    meeting_type: "",
    meeting_time: "",
    website: "",
    description: "",
  });

  const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      console.error("Webhook URL is not defined in the environment variables.");
      return;
    }

    const payload = {
      name: formData.name,
      email_address: formData.email,
      guest_emails: guestEmails.filter((email) => email.trim() !== ""),
      meeting_type: formData.meeting_type,
      meeting_time: formData.meeting_time,
      company_website: formData.website,
      event_description: formData.description,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-[#F1ECFB] rounded-lg p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            required
            className="border-0 bg-white"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            className="border-0 bg-white"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-3">
          {guestEmails.map((email, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={`guest-${index}`}>Guest Email Address</Label>
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
                onChange={(e) => updateGuestEmail(index, e.target.value)}
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
            <Select
              onValueChange={(value) =>
                handleSelectChange("meeting_type", value)
              }
            >
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
            <Select
              onValueChange={(value) =>
                handleSelectChange("meeting_time", value)
              }
            >
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
          <Input
            id="website"
            className="border-0 bg-white"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Event Description</Label>
          <Textarea
            id="description"
            className="min-h-[120px] border-0 bg-white"
            onChange={handleChange}
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
  );
}
