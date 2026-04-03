import SeverityBadge from "./SeverityBadge";

function PotholeCard({ location, description, date, severity }) {
  return (
    <div className="border p-3">
      <div className="flex justify-between">
        <h2 className="font-bold">{location}</h2>
        <SeverityBadge severity={severity} />
      </div>
      <p>{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}

export default PotholeCard;