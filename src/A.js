"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"
import "./ManageCandidature.css"

function ManageCandidatures() {
  const [candidatures, setCandidatures] = useState([])
  const [recruteurId, setRecruteurId] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]))
      setRecruteurId(payload.id)
    }
  }, [])

  useEffect(() => {
    if (recruteurId) {
      axios
        .get(`http://localhost:5050/candidatures/${recruteurId}`)
        .then((response) => {
          setCandidatures(response.data)
        })
        .catch((error) => console.error("❌ Erreur lors de la récupération des candidatures :", error))
    }
  }, [recruteurId])

  const updateStatut = (id, newStatut) => {
    axios
      .put(`http://localhost:5050/candidatures/${id}/statut`, { statut: newStatut })
      .then(() => {
        setCandidatures((prev) => prev.map((c) => (c._id === id ? { ...c, statut: newStatut } : c)))
      })
      .catch((error) => console.error("❌ Erreur lors de la mise à jour du statut :", error))
  }

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

      const url = `http://localhost:5050/candidature/${candidatureId}/${fileType}`

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

  return (
    <div className="manage-candidatures-container">
      <Sidebar />
      <div className="cards-container">
        {candidatures.map((candidature) => (
          <div className="card-candidature" key={candidature._id}>
            <div className={getBadgeClass(candidature.statut)}>{candidature.statut}</div>

            <h3>{candidature.id_offre?.titre || "Offre non disponible"}</h3>

            
            <div className="card-links">
              <a href="#" onClick={(e) => viewFile(candidature._id, "cv", e)} target="_blank" rel="noopener noreferrer">
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
        ))}

        {candidatures.length === 0 && (
          <div className="no-candidatures">
            <h3>Aucune candidature trouvée</h3>
            <p>Les candidatures apparaîtront ici une fois que des candidats auront postulé à vos offres.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageCandidatures
