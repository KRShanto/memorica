import Image from "next/image";

const teamMembers = [
  {
    name: "Chayon Karmakar",
    role: "Co-Founder & CEO",
    image: "/team-members/team2.ARW",
  },
  {
    name: "Anindya Saha",
    role: "Co-Founder & COO",
    image: "/team-members/team3.bmp",
  },
  {
    name: "Samir Hasan",
    role: "Co-Founder & CTO",
    image: "/team-members/samir.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <div className="py-16">
      <h1 className="text-center font-antic text-[#1D1B84] text-5xl font-light mb-16">
        Meet The Team
      </h1>
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4">
        {/* First row with two members */}
        <div className="flex justify-center gap-32 w-full mb-6">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="relative w-full max-w-md">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-xl text-white">
                <h3 className="text-3xl font-bold text-center">
                  {member.name}
                </h3>
                <p className="text-base mt-2 font-bold opacity-90 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with one member centered */}
        <div className="w-full max-w-md">
          {teamMembers.slice(2, 3).map((member, index) => (
            <div key={index} className="relative">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-xl text-white">
                <h3 className="text-3xl font-bold text-center">
                  {member.name}
                </h3>
                <p className="text-base mt-2 font-bold opacity-90 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
