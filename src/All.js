import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './all.css';
import Navbar from "./Navbar";
const AllOffres = () => {
  const [offres, setOffres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffres = async () => {
      try {
        const response = await fetch("https://pfe-api-8b8e.vercel.app/all"); // your API URL
        const data = await response.json();
        setOffres(data);
      } catch (error) {
        console.error("Erreur lors du chargement des offres :", error);
      }
    };

    fetchOffres();
  }, []);

  return (
    <div>
     <Navbar/>
       <h1 className="page-title mt-3 ">Toutes les Offres d'Emploi</h1>
    <div className="jobs-grid">
      
      {offres.map((offre) => (
        <div key={offre._id} className={`job-card ${offre.featured ? "featured" : ""}`}>
          {offre.featured && <div className="featured-badge">Offre mise en avant</div>}
          <div className="job-content">
            <div className="company-logo">
              <i className="fas fa-building"></i>
            </div>
            <div className="job-details">
              <h3>{offre.titre}</h3>
              <p className="company-location">
                {offre.entreprise} • {offre.lieu}
              </p>
              <div className="job-tags">
                <span className="job-tag">
                  {new Date(offre.date_publication).toLocaleDateString()}
                </span>
                <span className="job-tag">{offre.salaire}</span>
              </div>
              <button className="view-job-btn" onClick={() => navigate(`/offre/${offre._id}`)}>
                Voir l'offre
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllOffres;
