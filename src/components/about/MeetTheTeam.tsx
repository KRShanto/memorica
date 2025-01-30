import Image from "next/image";

const teamMembers = [
  {
    name: "Bruce Wayen",
    role: "Lead Designer",
    image: "/team-members/member1.png",
  },
  {
    name: "Zoe Parker",
    role: "Frontend Developer",
    image: "/team-members/member2.png",
  },
  {
    name: "Liam Chen",
    role: "UX Researcher",
    image: "/team-members/member3.png",
  },
  {
    name: "Sophia Rodriguez",
    role: "Product Manager",
    image: "/team-members/member4.png",
  },
  {
    name: "Ethan Nakamura",
    role: "Backend Engineer",
    image: "/team-members/member5.png",
  },
  {
    name: "Olivia Singh",
    role: "Data Scientist",
    image: "/team-members/member6.png",
  },
  {
    name: "Noah Kim",
    role: "Marketing Specialist",
    image: "/team-members/member7.png",
  },
  {
    name: "Emma Patel",
    role: "Content Strategist",
    image: "/team-members/member8.png",
  },
];

export default function MeetTheTeam() {
  return (
    <div className="py-16">
      <h1 className="text-center font-antic text-[#1D1B84] text-5xl font-light mb-16">
        Meet The Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
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
              <h3 className="text-2xl font-light">{member.name}</h3>
              <p className="text-sm font-light opacity-90">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
