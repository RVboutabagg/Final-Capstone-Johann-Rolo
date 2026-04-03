function TeamMemberCard({ name, role, bio }) {
    return (
      <div className="border p-3 text-center">
        <h3 className="font-bold">{name}</h3>
        <p>{role}</p>
        <p className="text-sm">{bio}</p>
      </div>
    );
  }
  export default TeamMemberCard;