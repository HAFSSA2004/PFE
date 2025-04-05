import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "./Navbar";

const Home = () => {
  const [villes, setVilles] = useState([]);
  const [titres, setTitres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/filters")
      .then((response) => response.json())
      .then((data) => {
        setVilles(data.villes);
        setTitres(data.titres);
      })
      .catch((error) => console.error("Erreur lors du chargement des filtres:", error));
  }, []);

  return (
    <div>
      <Nav />
      <div className="back">
        <div className="custom-container">
          <h2 className="title">Trouvez Votre Emploi Idéal ou Recrutez les Meilleurs Talents</h2>
          <p className="subtitle">Des milliers d'opportunités vous attendent. Déposez votre CV ou publiez une offre en un clic.</p>
          
          {/* Barre de recherche */}
          <div className="search-container">
            <div className="search-bar">
              <div className="search-field">
                <i className="fas fa-search icon"></i>
                <input type="text" className="input" placeholder="Intitulé de poste, mots-clés..." list="titres" />
                <datalist id="titres">
                  {titres.map((titre, index) => (
                    <option key={index} value={titre} />
                  ))}
                </datalist>
              </div>
              
              <div className="search-field">
                <i className="fas fa-map-marker-alt icon"></i>
                <input type="text" className="input" placeholder="Ville, département..." list="villes" />
                <datalist id="villes">
                  {villes.map((ville, index) => (
                    <option key={index} value={ville} />
                  ))}
                </datalist>
              </div>
              
              <button className="search-btn">Rechercher</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
