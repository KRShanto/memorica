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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative">
            {/* <div className="rounded-2xl overflow-hidden"> */}
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-xl"
            />
            {/* </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-xl text-white">
              <h3 className="text-3xl font-bold text-center">{member.name}</h3>
              <p className="text-base mt-2 font-bold opacity-90 text-center">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
