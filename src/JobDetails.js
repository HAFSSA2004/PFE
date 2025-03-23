import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function JobDetails() {
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedShifts, setSelectedShifts] = useState([]);

  const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "InternShip"];
  const shifts = ["4 hours shift", "8 hours shift", "12 hours shift", "Monday to Friday", "Evening shift", "Night shift", "Day shift"];

  const toggleSelection = (category, item) => {
    if (category === "jobType") {
      setSelectedJobType((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    } else {
      setSelectedShifts((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Détails de l'emploi</h2>
        <img src="image.png" alt="Illustration" className="w-20" />
      </div>

      <div className="mb-4">
        <p className="font-medium">Type de poste <span className="text-red-500">*</span></p>
        <div className="flex flex-wrap gap-2 mt-2">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => toggleSelection("jobType", type)}
              className={`px-3 py-1 border rounded-full ${selectedJobType.includes(type) ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              + {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-medium">Horaires</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {shifts.map((shift) => (
            <button
              key={shift}
              onClick={() => toggleSelection("shift", shift)}
              className={`px-3 py-1 border rounded-full ${selectedShifts.includes(shift) ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              + {shift}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
          <ArrowLeft className="mr-2" size={16} /> Retour
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
          Continuer <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
}
