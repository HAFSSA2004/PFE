import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUserCircle,
  FaPhoneAlt,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import './CandidatSpace.css';

function CandidatSpace() {
  const [candidat, setCandidat] = useState(null);
  const [applications, setApplications] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCandidat = async () => {
      try {
        const response = await fetch("http://localhost:5050/me", {
          headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setCandidat(data.user);
      } catch (error) {
        console.error("Erreur lors du chargement des infos:", error.message);
      }
    };

    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5050/mes-candidatures", {
          headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setApplications(data); // Assuming it's an array
      } catch (error) {
        console.error("Erreur lors du chargement des candidatures:", error.message);
      }
    };

    fetchCandidat();
    fetchApplications();
  }, [token]);

  if (!candidat) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="container mt-5">
      {/* Profile Header */}
      <div className="profile-header text-center">
        <div className="profile-image mb-3">
          <FaUserCircle size={100} color="#4CAF50" />
        </div>
        <h2 className="text-primary">{candidat.nom} {candidat.prenom}</h2>
        <p className="text-muted">{candidat.email}</p>
      </div>

      {/* Profile Details */}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <ul className="list-unstyled">
              <li> <strong>Nom:</strong> {candidat.nom}</li>
                <li><FaEnvelope /> <strong>Email:</strong> {candidat.email}</li>
            
        
              </ul>
            </div>
          </div>
        </div>
        
      </div>

      {/* Skills and Experience */}
     
     

      {/* Applications Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Suivi de Candidature</h5>
              <div className="applications-list">
                {applications.length === 0 ? (
                  <p>Aucune candidature trouvée.</p>
                ) : (
                  applications.map((application, index) => (
                    <div className="application-card mb-3" key={index}>
                      <h6>
                        {application.id_offre?.titre} chez {application.id_offre?.entreprise}
                      </h6>
                      <p><strong>Date de candidature:</strong> {new Date(application.date_postulation).toLocaleDateString()}</p>
                      <div className="status">
                        <strong>Statut: </strong>
                        {application.statut === "en attente" && (
                          <span className="text-warning"><FaRegClock /> En attente</span>
                        )}
                        {application.statut === "entretien" && (
                          <span className="text-info"><FaCheckCircle /> Entretien prévu</span>
                        )}
                        {application.statut === "refusée" && (
                          <span className="text-danger"><FaTimesCircle /> Refusée</span>
                        )}
                        {application.statut === "acceptée" && (
                          <span className="text-success"><FaCheckCircle /> Acceptée</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CandidatSpace;
