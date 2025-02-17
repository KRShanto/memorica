import { PHONE } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="p-8 w-full max-w-md absolute top-1/2 left-1/2 z-10 transform -translate-x-[0%] -translate-y-[80%]">
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-purple-400 to-purple-600">
        <div className="bg-white p-6 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-2xl font-semibold">
            {/* Bangladesh flag */}
            <div className="relative w-8 h-6 bg-[#006a4e]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f42a41]" />
            </div>
            <span>Bangladesh</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span>Niketon, 10 RCRC Road, Courtpara, Kushtia.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-5 h-5 text-purple-600" />
            <span>{PHONE}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
