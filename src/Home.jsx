import React from "react";
import './Home.css';

const Home = () => {
  return (
   <div className="back">
     <div className="custom-container">
     <h2 className="title text-center">
        Trouvez Votre Emploi Idéal ou Recrutez les Meilleurs Talents
      </h2>
      <p className="subtitle">
        Des milliers d'opportunités vous attendent. Déposez votre CV ou publiez une offre en un clic.
      </p>

      {/* Barre de recherche */}
      <div className="search-container">
        <div className="search-bar">
          <span className="icon"><i className="fas fa-search"></i></span>
          <input type="text" className="input" placeholder="Intitulé de poste, mots-clés..." />
          <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
          <input type="text" className="input" placeholder="Ville, département ..." />
          <button className="search-btn">Rechercher</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Home;
