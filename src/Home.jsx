import React, { useEffect, useState } from "react";
import './Home.css';
import Nav from './Navbar';
//import Annonce from './Annoce';

const Home = () => {
  const [villes, setVilles] = useState([]);
  const [titres, setTitres] = useState([]);
  const [searchParams, setSearchParams] = useState({ titre: "", ville: "" });

  useEffect(() => {
    fetch("http://localhost:5050/filters")  
      .then(response => response.json())
      .then(data => {
        setVilles(data.villes);
        setTitres(data.titres);
      })
      .catch(error => console.error("Erreur lors du chargement des filtres:", error));
  }, []);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    fetch(`http://localhost:5050/search?titre=${searchParams.titre}&ville=${searchParams.ville}`)
      .then(response => response.json())
      .then(results => console.log("Résultats de la recherche:", results))
      .catch(error => console.error("Erreur lors de la recherche:", error));
  };

  return (
    <div>
      <Nav />
      <div className="back">
        <div className="custom-container">
          {/* <h2 className="title">Trouvez Votre Emploi Idéal ou Recrutez les Meilleurs Talents</h2>
          <p className="subtitle">Des milliers d'opportunités vous attendent. Déposez votre CV ou publiez une offre en un clic.</p> */}

          {/* Barre de recherche */}
          <div className="search-container">
            <div className="search-bar">
              <span className="icon"><i className="fas fa-search"></i></span>
              <input 
                type="text" 
                name="titre" 
                value={searchParams.titre} 
                onChange={handleChange} 
                placeholder="Intitulé de poste, mots-clés..."
                list="titres"
                className="input"
              />
              <datalist id="titres">
                {titres.map((titre, index) => (
                  <option key={index} value={titre} />
                ))}
              </datalist>

              <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
              <input 
                type="text" 
                name="ville" 
                value={searchParams.ville} 
                onChange={handleChange} 
                placeholder="Ville, département ..."
                list="villes"
                className="input"
              />
              <datalist id="villes">
                {villes.map((ville, index) => (
                  <option key={index} value={ville} />
                ))}
              </datalist>

              <button className="search-btn" onClick={handleSearch}>Rechercher</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
