"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"
import "./ManageCandidature.css"

function ManageCandidatures() {
  const [candidatures, setCandidatures] = useState([])
  const [recruteurId, setRecruteurId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]))
      setRecruteurId(payload.id)
    }
  }, [])

  useEffect(() => {
    if (recruteurId) {
      setLoading(true)
      axios
        .get(`https://pfe-api-8b8e.vercel.app/candidatures/${recruteurId}`)
        .then((response) => {
          setCandidatures(response.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error("❌ Erreur lors de la récupération des candidatures :", error)
          setLoading(false)
        })
    }
  }, [recruteurId])

   const updateStatut = (id, newStatut) => {
        axios.put(`https://pfe-api-8b8e.vercel.app/candidatures/${id}/statut`, { statut: newStatut })
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
        return "badge accepted"
      case "refusée":
        return "badge refused"
      default:
        return "badge pending"
    }
  }

  const viewFile = async (candidatureId, fileType, e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        alert("Token manquant. Veuillez vous reconnecter.")
        return
      }

      const url = `https://pfe-api-8b8e.vercel.app/candidature/${candidatureId}/${fileType}`

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      })

      // Create blob URL and open in new tab
      const blob = new Blob([response.data], { type: response.data.type })
      const blobUrl = window.URL.createObjectURL(blob)
      window.open(blobUrl, "_blank")

      // Clean up after a delay
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000)
    } catch (error) {
      console.error(`❌ Erreur lors de l'ouverture du ${fileType}:`, error)
      alert(`Erreur lors de l'ouverture du ${fileType}`)
    }
  }

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="loading-container">
      <div className="loading-header">
        <div className="loading-spinner"></div>
        <h3>Chargement des candidatures...</h3>
      </div>
      <div className="skeleton-cards">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-badge"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-links">
              <div className="skeleton-link"></div>
              <div className="skeleton-link"></div>
            </div>
            <div className="skeleton-select"></div>
            <div className="skeleton-date"></div>
          </div>
        ))}
      </div>
    </div>
  )

  // Empty state component
  const EmptyState = () => (
    <div className="empty-state">
      <div className="empty-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3>Aucune candidature pour le moment</h3>
      <p>Les candidatures apparaîtront ici dès que des candidats postuleront à vos offres.</p>
    </div>
  )

  return (
    <div className="manage-candidatures-container">
      <Sidebar />
      <div className="cards-container">
        {loading ? (
          <LoadingSkeleton />
        ) : candidatures.length > 0 ? (
          candidatures.map((candidature) => (
            <div className="card-candidature" key={candidature._id}>
              <div className={getBadgeClass(candidature.statut)}>{candidature.statut}</div>

              <h3>{candidature.id_offre?.titre || "Offre non disponible"}</h3>

              <div className="card-links">
                <a
                  href="#"
                  onClick={(e) => viewFile(candidature._id, "cv", e)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir CV
                </a>
                <a
                  href="#"
                  onClick={(e) => viewFile(candidature._id, "lettre", e)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir Lettre
                </a>
              </div>

              <div className="status-section">
                <select value={candidature.statut} onChange={(e) => updateStatut(candidature._id, e.target.value)}>
                  <option value="en cours">En cours</option>
                  <option value="acceptée">Acceptée</option>
                  <option value="refusée">Refusée</option>
                </select>
              </div>

              <p className="date-postulation">
                Postulé le : {new Date(candidature.date_postulation).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

export default ManageCandidatures
