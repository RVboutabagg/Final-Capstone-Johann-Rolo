import TeamMemberCard from "../Components/TeamMemberCard";

const teamMembers = [
  {
    name: "Johann",
    role: "Co-Owner",
    bio: "Place Holder",
  },
  {
    name: "Rolo",
    role: "Co-Owner",
    bio: "Place Holder",
  },
];

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="font-bold mb-2">About Us</h1>
      <p className="mb-6">Place Holder</p>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>

      <div className="border p-4">
        <h2 className="font-bold mb-2">Our Mission</h2>
        <p>Place Holder</p>
      </div>
    </div>
  );
}

export default About;