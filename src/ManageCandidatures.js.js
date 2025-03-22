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

    // Fonction pour mettre à jour le statut
    const updateStatut = (id, newStatut) => {
        axios.put(`http://localhost:5050/candidatures/${id}/statut`, { statut: newStatut })
            .then(response => {
                setCandidatures(candidatures.map(c => 
                    c._id === id ? { ...c, statut: newStatut } : c
                ));
            })
            .catch(error => console.error("❌ Erreur lors de la mise à jour du statut :", error));
    };

    return (
        <div className="manage-candidatures-container">
            <Sidebar />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Offre</th>
                            <th>CV</th>
                            <th>Lettre de Motivation</th>
                            <th>Statut</th>
                            <th>Date de Postulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidatures.map((candidature) => (
                            <tr key={candidature._id}>
                                <td>{candidature.id_offre ? candidature.id_offre.titre : "N/A"}</td>
                                <td>
                                    <a href={`http://localhost:5050/${candidature.cv}`} target="_blank" rel="noopener noreferrer">Voir CV</a>
                                </td>
                                <td>
                                    <a href={`http://localhost:5050/${candidature.lettre_motivation}`} target="_blank" rel="noopener noreferrer">Voir Lettre</a>
                                </td>
                                <td>
                                    <select 
                                        value={candidature.statut} 
                                        onChange={(e) => updateStatut(candidature._id, e.target.value)}
                                    >
                                        <option value="en cours">En cours</option>
                                        <option value="acceptée">Acceptée</option>
                                        <option value="refusée">Refusée</option>
                                    </select>
                                </td>
                                <td>{new Date(candidature.date_postulation).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageCandidatures;
