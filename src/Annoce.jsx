import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Annonce.css";

function Annonce() {
    const [offres, setOffres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5050/offres")
            .then(response => setOffres(response.data))
            .catch(error => console.error("Erreur lors de la récupération des offres :", error));
    }, []);
    
    return (
        <div className="cont">
            {offres.map((offre) => (
                <div key={offre._id} className="job-card">
                    <div className="job-content">
                        <div className="text-content">
                            <span className="date">{new Date(offre.date_publication).toLocaleDateString()}</span>
                            <h4>{offre.entreprise}</h4>
                            <p>{offre.titre}</p>
                         
                        </div>
                        <img src="logo.png" alt="Logo" className="company-logo" />
                    </div>
                    <div className="job-footer">
                        <span className="location">{offre.lieu}</span>
                        <button className="details-btn" onClick={() => navigate(`/offre/${offre._id}`)}>
                            Détails
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Annonce;
