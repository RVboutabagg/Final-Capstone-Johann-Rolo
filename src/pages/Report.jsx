import { useState } from "react";
import ReportForm from "../Components/ReportForm";
import PotholeCard from "../Components/PotholeCard";

function Report() {
  const [reports, setReports] = useState([]);

  function handleNewReport(report) {
    setReports((prev) => [report, ...prev]);
  }

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6">
      
      <div>
        <h1 className="font-bold mb-1">Report</h1>
        <p>Submit a pothole report.</p>
      </div>

      <ReportForm onSubmit={handleNewReport} />

      {reports.length > 0 && (
        <div>
          <h2 className="font-bold mb-2">Reports</h2>
          <div className="flex flex-col gap-3">
            {reports.map((report, index) => (
              <PotholeCard
                key={index}
                location={report.location}
                description={`Condition: ${report.condition}, Radius: ${report.radius}`}
                date={report.date}
                severity={report.severity}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;