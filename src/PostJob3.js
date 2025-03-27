import React from "react";
import "./Post3.css"; // Import du fichier CSS
import { Link } from "react-router-dom";


const PostJob3 = () => {
  const jobTypes = ["Full-time", "Part-time", "Contract", "Temporary", "InternShip"];
  const shifts = ["4 hours shift", "8 hours shift", "12 hours shift", "Monday to Friday", "Evening shift", "Night shift", "Day shift"];

  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* En-tête avec image */}
      <div className="header-container d-flex align-items-center justify-content-between p-3">
        <h2 className="fw-bold">Détails de l'emploi</h2>
        <img src="/image3.jpg" alt="Détails emploi" className="header-image" />
      </div>

      {/* Type de poste */}
      <div className="mt-4">
        <h5 className="fw-semibold">Type de poste *</h5>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {jobTypes.map((type) => (
            <button key={type} className="btn   border border-dark rounded-pill">
              + {type}
            </button>
          ))}
        </div>
      </div>

      {/* Horaires */}
      <div className="mt-4">
        <h5 className="fw-semibold">Horaires</h5>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {shifts.map((shift) => (
            <button key={shift} className="btn  border border-dark  rounded-pill">
              + {shift}
            </button>
          ))}
        </div>
      </div>

      {/* Boutons de navigation */}
      <div className="d-flex justify-content-between mt-4">
        
        <Link to="/PostJob2" className="btn btn-secondary">
                      ← Retour
        </Link>
        <Link to="/PostJob4" className="btn btn-primary">
                      ← Continuer
        </Link>
      </div>
    </div>
  );
};

export default PostJob3;
