import UserCard from "../Components/UserCard";

function Profile() {
  const user = {
    name: "Place Holder",
    tagline: "Place Holder",
    email: "Place Holder",
    gender: "Place Holder",
    reportCount: 5,
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="font-bold mb-2">My Profile</h1>

      <div className="flex justify-center">
        <UserCard {...user} />
      </div>
    </div>
  );
}

export default Profile;