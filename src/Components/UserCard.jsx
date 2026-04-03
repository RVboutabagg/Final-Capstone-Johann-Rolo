function UserCard({ name, tagline, email, gender, reportCount }) {
    return (
      <div className="border p-4 text-center">
        <h2 className="font-bold">{name}</h2>
        <p>{tagline}</p>
  
        <div className="mt-3">
          <p>{email}</p>
          <p>{gender}</p>
          <p>{reportCount} Place Holder</p>
        </div>
      </div>
    );
  }
  export default UserCard;