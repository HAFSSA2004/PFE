<<<<<<< HEAD
import { useEffect, useState } from "react";
import "./Home.css";
import Nav from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
=======
import React, { useEffect, useState } from "react";
import './Home.css';
import Nav from './Navbar';
//import Annonce from './Annoce';
>>>>>>> 419380f47ebe45a7fbef6c4511083800e9850a58

const Home = () => {
  const [villes, setVilles] = useState([]);
  const [titres, setTitres] = useState([]);
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("chercher");
  const [offres, setOffres] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();
=======
  const [searchParams, setSearchParams] = useState({ titre: "", ville: "" });
>>>>>>> 419380f47ebe45a7fbef6c4511083800e9850a58

  useEffect(() => {
    fetch("http://localhost:5050/filters")  
      .then(response => response.json())
      .then(data => {
        setVilles(data.villes);
        setTitres(data.titres);
      })
      .catch(error => console.error("Erreur lors du chargement des filtres:", error));
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    axios
      .get("http://localhost:5050/offres")
      .then((response) => setOffres(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des offres :", error));
  }, []);

  const handleSearch = () => {
    axios
      .get("http://localhost:5050/offres", {
        params: {
          titre: searchTitle,
          lieu: searchLocation,
        },
      })
      .then((response) => setOffres(response.data))
      .catch((error) => console.error("Erreur lors de la recherche des offres :", error));
  };

  // Mock data for categories
  const categories = [
    { name: "Technologie", count: "1,245", icon: "laptop-code" },
    { name: "Marketing", count: "857", icon: "chart-line" },
    { name: "Ressources Humaines", count: "632", icon: "users" },
    { name: "Finance", count: "945", icon: "money-bill-wave" },
    { name: "Vente", count: "1,123", icon: "shopping-cart" },
    { name: "Santé", count: "768", icon: "heartbeat" },
  ];
=======
  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    fetch(`http://localhost:5050/search?titre=${searchParams.titre}&ville=${searchParams.ville}`)
      .then(response => response.json())
      .then(results => console.log("Résultats de la recherche:", results))
      .catch(error => console.error("Erreur lors de la recherche:", error));
  };
>>>>>>> 419380f47ebe45a7fbef6c4511083800e9850a58

  return (
    <div className="home-page">
      <Nav />

      {/* Hero Section */}
      <div className="back">
        <div className="custom-container">
<<<<<<< HEAD
          <h2 className="title">Trouvez Votre Emploi Idéal ou Recrutez les Meilleurs Talents</h2>
          <p className="subtitle">
            Des milliers d'opportunités vous attendent. Déposez votre CV ou publiez une offre en un clic.
          </p>

          {/* Tabs */}
          <div className="search-tabs">
            <div className={`tab ${activeTab === "chercher" ? "active" : ""}`} onClick={() => setActiveTab("chercher")}>
              Chercher un emploi
            </div>
            <div className={`tab ${activeTab === "recruter" ? "active" : ""}`} onClick={() => setActiveTab("recruter")}>
              Recruter des talents
            </div>
          </div>

          {/* Search Container */}
          {activeTab === "chercher" ? (
            <div className="search-container">
              <div className="search-bar">
                <div className="search-field">
                  <i className="fas fa-search icon"></i>
                  <input
                    type="text"
                    className="input"
                    placeholder="     Intitulé de poste, mots-clés..."
                    list="titres"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                  />
                  <datalist id="titres">
                    {titres.map((titre, index) => (
                      <option key={index} value={titre} />
                    ))}
                  </datalist>
                </div>

                <div className="search-field">
                  <i className="fas fa-map-marker-alt icon"></i>
                  <input
                    type="text"
                    className="input"
                    placeholder="    Ville, département..."
                    list="villes"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                  <datalist id="villes">
                    {villes.map((ville, index) => (
                      <option key={index} value={ville} />
                    ))}
                  </datalist>
                </div>

                <button className="search-btn" onClick={handleSearch}>Rechercher</button>
              </div>
            </div>
          ) : (
            <div className="recruiter-container">
              <div className="recruiter-content">
                <h3>Publiez votre offre d'emploi</h3>
                <p>Accédez à notre base de talents qualifiés et trouvez le candidat idéal pour votre entreprise.</p>
                <button className="publish-btn">Publier une offre</button>
              </div>
            </div>
          )}

          {/* Popular searches */}
          <div className="popular-searches">
            <span>Recherches populaires:</span>
            <div className="search-tags">
              {["Développeur", "Marketing", "Finance", "Commercial", "Santé"].map((tag, index) => (
                <div key={index} className="search-tag">
                  {tag}
                </div>
              ))}
=======
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
>>>>>>> 419380f47ebe45a7fbef6c4511083800e9850a58
            </div>
          </div>
        </div>
        
      </div>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <div className="section-container">
          <div className="section-header">
            <h2>Offres d'emploi à la une</h2>
            <a href="/all" className="view-all">
              Voir toutes les offres <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className="jobs-grid">
            {offres.map((offre) => (
              <div key={offre.id} className={`job-card ${offre.featured ? "featured" : ""}`}>
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
                      <span className="job-tag">{new Date(offre.date_publication).toLocaleDateString()}</span>
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
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <div className="section-header center">
            <h2>Explorez par catégorie</h2>
            <p>
              Découvrez des opportunités dans différents secteurs d'activité et trouvez celui qui correspond à vos
              compétences et aspirations.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={`fas fa-${category.icon}`}></i>
                </div>
                <h3>{category.name}</h3>
                <p>{category.count} offres</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-container">
          <div className="section-header center">
            <h2>Comment ça marche</h2>
            <p>Un processus simple pour trouver votre prochain emploi ou recruter les meilleurs talents.</p>
          </div>

          <div className="steps-container">
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3>Créez votre profil</h3>
              <p>Inscrivez-vous et créez un profil professionnel complet pour vous démarquer.</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Explorez les offres</h3>
              <p>Parcourez des milliers d'offres d'emploi et trouvez celle qui correspond à vos attentes.</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3>Postulez en un clic</h3>
              <p>Envoyez votre candidature rapidement et suivez son avancement en temps réel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15K+</div>
              <p>Offres d'emploi</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">5K+</div>
              <p>Entreprises</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <p>Candidats</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">25K+</div>
              <p>Recrutements réussis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
