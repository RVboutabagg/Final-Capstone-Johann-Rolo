import { useState } from "react";

function ReportForm({ onSubmit }) {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [severity, setSeverity] = useState("low");
  const [radius, setRadius] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!location || !condition) return;

    const report = {
      location,
      condition,
      severity,
      radius,
      date: new Date().toLocaleDateString(),
    };

    if (onSubmit) onSubmit(report);

    setLocation("");
    setCondition("");
    setSeverity("low");
    setRadius("");
  }

  return (
    <div className="p-4 border">
      <h2 className="font-bold mb-2">Place Holder</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-1"
        />

        <input
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="border p-1"
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border p-1"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="number"
          placeholder="Radius"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className="border p-1"
        />

        <button type="submit" className="border p-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReportForm;