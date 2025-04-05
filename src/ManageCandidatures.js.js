import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import './ManageCandidature.css';

function ManageCandidatures() {
    const [candidatures, setCandidatures] = useState([]);
    const [recruteurId, setRecruteurId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setRecruteurId(payload.id);
        }
    }, []);

    useEffect(() => {
        if (recruteurId) {
            axios.get(`http://localhost:5050/candidatures/${recruteurId}`)
                .then(response => {
                    setCandidatures(response.data);
                })
                .catch(error => console.error("❌ Erreur lors de la récupération des candidatures :", error));
        }
    }, [recruteurId]);

    const updateStatut = (id, newStatut) => {
        axios.put(`http://localhost:5050/candidatures/${id}/statut`, { statut: newStatut })
            .then(() => {
                setCandidatures(prev =>
                    prev.map(c => c._id === id ? { ...c, statut: newStatut } : c)
                );
            })
            .catch(error => console.error("❌ Erreur lors de la mise à jour du statut :", error));
    };

    const getBadgeClass = (statut) => {
        switch (statut) {
            case "acceptée":
                return "badge accepted";
            case "refusée":
                return "badge refused";
            default:
                return "badge pending";
        }
    };

    return (
        <div className="manage-candidatures-container">
            <Sidebar />
            <div className="cards-container">
                {candidatures.map(candidature => (
                    <div className="card-candidature" key={candidature._id}>
                        <h3>{candidature.id_offre?.titre || "Offre non disponible"}</h3>
                        
                        <div className="card-links">
                            <a href={`http://localhost:5050/${candidature.cv}`} target="_blank" rel="noopener noreferrer">Voir CV</a>
                            <a href={`http://localhost:5050/${candidature.lettre_motivation}`} target="_blank" rel="noopener noreferrer">Voir Lettre</a>
                        </div>

                        <div className={getBadgeClass(candidature.statut)}>
                            {candidature.statut}
                        </div>

                        <div className="status-section">
                            <span className={getBadgeClass(candidature.statut)}>
                                {candidature.statut}
                            </span>
                            <select 
                                value={candidature.statut} 
                                onChange={(e) => updateStatut(candidature._id, e.target.value)}
                            >
                                <option value="en cours">En cours</option>
                                <option value="acceptée">Acceptée</option>
                                <option value="refusée">Refusée</option>
                            </select>
                        </div>

                        <p className="date-postulation">
                            Postulé le : {new Date(candidature.date_postulation).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageCandidatures;
