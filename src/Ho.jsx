"use client"

import { useEffect, useState } from "react"
import "./Home.css"
import Nav from "./Navbar"
import Annonce from "./Annoce"

const Home = () => {
  const [villes, setVilles] = useState([])
  const [titres, setTitres] = useState([])
  const [activeTab, setActiveTab] = useState("chercher")
  const [offres, setOffres] = useState([])

  // Récupère les filtres
  useEffect(() => {
    fetch("http://localhost:5050/filters")
      .then((res) => res.json())
      .then((data) => {
        setVilles(data.villes)
        setTitres(data.titres)
      })
      .catch((err) => console.error("Erreur lors du chargement des filtres :", err))
  }, [])

  // Récupère les offres d'emploi
  useEffect(() => {
    fetch("http://localhost:5050/offres")
      .then((res) => res.json())
      .then((data) => setOffres(data))
      .catch((err) => console.error("Erreur lors du chargement des offres :", err))
  }, [])

  const categories = [
    { name: "Technologie", count: "1,245", icon: "laptop-code" },
    { name: "Marketing",   count: "857",   icon: "chart-line" },
    { name: "Ressources Humaines", count: "632", icon: "users" },
    { name: "Finance",     count: "945",   icon: "money-bill-wave" },
    { name: "Vente",       count: "1,123", icon: "shopping-cart" },
    { name: "Santé",       count: "768",   icon: "heartbeat" },
  ]

  return (
    <div className="home-page">
      <Nav />

      {/* Hero & Search */}
      <div className="back">
        <div className="custom-container">
          <h2 className="title">Trouvez Votre Emploi Idéal ou Recrutez les Meilleurs Talents</h2>
          <p className="subtitle">
            Des milliers d'opportunités vous attendent. Déposez votre CV ou publiez une offre en un clic.
          </p>

          <div className="search-tabs">
            <div
              className={`tab ${activeTab === "chercher" ? "active" : ""}`}
              onClick={() => setActiveTab("chercher")}
            >
              Chercher un emploi
            </div>
            <div
              className={`tab ${activeTab === "recruter" ? "active" : ""}`}
              onClick={() => setActiveTab("recruter")}
            >
              Recruter des talents
            </div>
          </div>

          {activeTab === "chercher" ? (
            <div className="search-container">
              <div className="search-bar">
                <div className="search-field">
                  <i className="fas fa-search icon"></i>
                  <input
                    type="text"
                    className="input"
                    placeholder="Intitulé de poste, mots-clés..."
                    list="titres"
                  />
                  <datalist id="titres">
                    {titres.map((titre, i) => (
                      <option key={i} value={titre} />
                    ))}
                  </datalist>
                </div>

                <div className="search-field">
                  <i className="fas fa-map-marker-alt icon"></i>
                  <input
                    type="text"
                    className="input"
                    placeholder="Ville, département..."
                    list="villes"
                  />
                  <datalist id="villes">
                    {villes.map((ville, i) => (
                      <option key={i} value={ville} />
                    ))}
                  </datalist>
                </div>

                <button className="search-btn">Rechercher</button>
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

          <div className="popular-searches">
            <span>Recherches populaires:</span>
            <div className="search-tags">
              {["Développeur", "Marketing", "Finance", "Commercial", "Santé"].map((tag, i) => (
                <div key={i} className="search-tag">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offres d'emploi à la une */}
      <section className="featured-jobs">
        <div className="section-container">
          <div className="section-header">
            <h2>Offres d'emploi à la une</h2>
            <a href="#" className="view-all">
              Voir toutes les offres <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className="jobs-grid">
            {offres.length ? (
              offres.map((offre) => (
                <div
                  key={offre.id ?? offre._id}
                  className={`job-card ${offre.featured ? "featured" : ""}`}
                >
                  {offre.featured && <div className="featured-badge">Offre mise en avant</div>}
                  <div className="job-content">
                    <div className="company-logo">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="job-details">
                      <h3>{offre.title || offre.titre}</h3>
                      <p className="company-location">
                        {offre.company || offre.entreprise} • {offre.location || offre.lieu}
                      </p>
                      <div className="job-tags">
                        <span className="job-tag">{new Date(offre.date_publication).toLocaleDateString()}</span>
                        <span className="job-tag">{offre.salaire}</span>
                      </div>
                      <button className="view-job-btn">Voir l'offre</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Aucune offre disponible pour le moment.</p>
            )}
          </div>
        </div>
      </section>

      {/* Les autres sections (Catégories, How it works, Stats, CTA) restent inchangées */}

     
    </div>
  )
}

export default Home
