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
        .get(`https://pfe-api-8b8e.vercel.app/candidatures/${recruteurId}`)
        .then((response) => {
          setCandidatures(response.data)
        })
        .catch((error) => console.error("❌ Erreur lors de la récupération des candidatures :", error))
    }
  }, [recruteurId])

  const updateStatut = (id, newStatut) => {
    axios
      .put(`https://pfe-api-8b8e.vercel.app/candidatures/${id}/statut`, { statut: newStatut })
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

    console.log(`🔍 Requesting ${fileType} for candidature:`, candidatureId)
    const url = `https://pfe-api-8b8e.vercel.app/candidature/${candidatureId}/${fileType}`

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
      timeout: 30000, // 30 second timeout
    })

    console.log(`✅ ${fileType} response received:`)
    console.log(`   Status: ${response.status}`)
    console.log(`   Content-Type: ${response.headers['content-type']}`)
    console.log(`   Content-Length: ${response.headers['content-length']}`)
    console.log(`   Blob size: ${response.data.size}`)
    console.log(`   Blob type: ${response.data.type}`)

    // Check if response is actually a blob and not an error JSON
    if (response.data.size === 0) {
      console.error("❌ Empty file received")
      alert("Le fichier est vide")
      return
    }

    // Check if we received JSON error instead of file
    if (response.data.type === 'application/json') {
      console.error("❌ Received JSON instead of file")
      const text = await response.data.text()
      console.error("❌ Error response:", text)
      alert("Erreur du serveur: " + text)
      return
    }

    // Create blob with explicit type
    const contentType = response.headers['content-type'] || response.data.type
    const blob = new Blob([response.data], { type: contentType })
    
    console.log(`✅ Final blob created:`)
    console.log(`   Size: ${blob.size}`)
    console.log(`   Type: ${blob.type}`)
    
    if (blob.size === 0) {
      console.error("❌ Final blob is empty")
      alert("Le fichier téléchargé est vide")
      return
    }

    const blobUrl = window.URL.createObjectURL(blob)
    console.log(`✅ Blob URL created: ${blobUrl}`)
    
    // Try to open in new window
    const newWindow = window.open(blobUrl, "_blank")
    if (!newWindow) {
      console.log("❌ Popup blocked, trying download instead")
      // Fallback to download
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `${fileType}_${candidatureId}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    // Clean up after a delay
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl)
      console.log(`✅ Blob URL revoked`)
    }, 5000)

  } catch (error) {
    console.error(`❌ Error fetching ${fileType}:`, error)
    
    if (error.response) {
      console.error(`❌ Response status: ${error.response.status}`)
      console.error(`❌ Response headers:`, error.response.headers)
      console.error(`❌ Response data:`, error.response.data)
      
      // Try to read error message if it's a blob
      if (error.response.data instanceof Blob) {
        try {
          const errorText = await error.response.data.text()
          console.error(`❌ Error blob content:`, errorText)
          alert(`Erreur du serveur: ${errorText}`)
        } catch (blobError) {
          console.error(`❌ Could not read error blob:`, blobError)
          alert(`Erreur lors de l'ouverture du ${fileType}`)
        }
      } else {
        alert(`Erreur ${error.response.status}: ${error.response.data?.message || 'Erreur inconnue'}`)
      }
    } else if (error.request) {
      console.error(`❌ No response received:`, error.request)
      alert("Aucune réponse du serveur. Vérifiez votre connexion.")
    } else {
      console.error(`❌ Request setup error:`, error.message)
      alert(`Erreur de requête: ${error.message}`)
    }
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
              <a href="#" onClick={(e) => viewFile(candidature._id, "cv", e)}
               target="_blank"
               rel="noopener noreferrer">
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
