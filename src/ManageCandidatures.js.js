import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

function ManageCandidatures() {
    const [candidatures, setCandidatures] = useState([]);
    const [recruteurId, setRecruteurId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            console.log("Payload du token :", payload); // 🔍 Vérifier si l'ID du recruteur est bien extrait
            setRecruteurId(payload.id);
        }
    }, []);
    

    useEffect(() => {
        if (recruteurId) {
            console.log("🔍 Envoi de la requête avec recruteurId :", recruteurId);
            axios.get(`http://localhost:5050/candidatures/${recruteurId}`)
                .then(response => {
                    console.log("📥 Candidatures reçues :", response.data);
                    setCandidatures(response.data);
                })
                .catch(error => console.error("❌ Erreur lors de la récupération des candidatures :", error));
        }
    }, [recruteurId]);
    

    return (
        <div className="container"> 
        <Dashboard/>   
            <h2 className="my-4">Suivi des Candidatures</h2>
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
                         <td>{candidature.id_offre && candidature.id_offre.titre ? candidature.id_offre.titre : "N/A"}</td>

                            <td>
                                <a href={`http://localhost:5050/${candidature.cv}`} target="_blank" rel="noopener noreferrer">Voir CV</a>
                            </td>
                            <td>
                                <a href={`http://localhost:5050/${candidature.lettre_motivation}`} target="_blank" rel="noopener noreferrer">Voir Lettre</a>
                            </td>
                            <td>{candidature.statut}</td>
                            <td>{new Date(candidature.date_postulation).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
  
    );
}

export default ManageCandidatures;
