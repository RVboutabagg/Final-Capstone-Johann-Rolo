import TeamMemberCard from "../Components/TeamMemberCard";
 
const teamMembers = [
  {
    name: "Johann",
    role: "Frontend Developer",
    bio: "Placeholder code",
  },
  {
    name: "Rolo",
    role: "Backend Developer",
    bio: "Placeholder code",
  },
];
 
function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">About Us</h1>
      <p className="text-sm text-gray-500 mb-8">Placeholder code</p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>
 
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-sm text-gray-600 leading-relaxed">Placeholder code</p>
      </div>
    </div>
  );
}
 
export default About;