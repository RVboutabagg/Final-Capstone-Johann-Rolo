import PotholeCard from "../Components/PotholeCard";

const sampleReports = [
  {
    location: "Place Holder",
    description: "Place Holder",
    date: "Place Holder",
    severity: "low",
  },
  {
    location: "Place Holder",
    description: "Place Holder",
    date: "Place Holder",
    severity: "medium",
  },
];

function Home({ onNavigate }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      <h1 className="text-xl font-bold mb-2">Oakland Pothole Tracker</h1>
      <p className="mb-4">Track and report potholes.</p>

      <div className="flex gap-2 mb-6">
        <button onClick={() => onNavigate("Report")}>Report</button>
        <button onClick={() => onNavigate("Donate")}>Donate</button>
        <button onClick={() => onNavigate("About")}>About</button>
      </div>

      <h2 className="font-bold mb-3">Recent Reports</h2>
      <div className="flex flex-col gap-3">
        {sampleReports.map((report, index) => (
          <PotholeCard
            key={index}
            location={report.location}
            description={report.description}
            date={report.date}
            severity={report.severity}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;