function SeverityBadge({ severity }) {
    const labels = {
      low: "Low",
      medium: "Medium",
      high: "High",
    };
   
    const label = labels[severity] || "Unknown";
   
    return (
      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-300">
        {label} Severity
      </span>
    );
  }
   
  export default SeverityBadge;
  