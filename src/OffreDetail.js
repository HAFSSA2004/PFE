"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./OffreDetail.css"
import Navbar from "./Navbar"
function OffreDetail() {
  const { id } = useParams() // Récupération de l'ID depuis l'URL
  const [offre, setOffre] = useState(null)
  const [cv, setCv] = useState(null)
  const [lettre, setLettre] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5050/offre/${id}`)
      .then((response) => {
        setOffre(response.data)
        setError(null)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'offre :", error)
        setError("Impossible de charger les détails de l'offre. Veuillez réessayer plus tard.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    if (!token) {
      setError("Vous devez être connecté pour postuler à cette offre.")
    }
  }, [])

  const handleFileChange = (event, setFile) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!cv || !lettre) {
      setError("Veuillez sélectionner un CV et une lettre de motivation.")
      return
    }

    const formData = new FormData()
    formData.append("id_offre", id)
    formData.append("cv", cv)
    formData.append("lettre_motivation", lettre)

    try {
      setSubmitting(true)
      setError(null)

      // Get the token from localStorage
      const token = localStorage.getItem("token")

      if (!token) {
        setError("Vous devez être connecté pour postuler. Veuillez vous connecter.")
        setSubmitting(false)
        return
      }

      const response = await axios.post("http://localhost:5050/candidature", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })

      setSuccess(response.data.message || "Votre candidature a été envoyée avec succès !")
      setCv(null)
      setLettre(null)

      // Reset file inputs
      const fileInputs = document.querySelectorAll('input[type="file"]')
      fileInputs.forEach((input) => {
        input.value = ""
      })
    } catch (error) {
      console.error("Erreur lors de l'envoi de la candidature :", error)
      setError(error.response?.data?.message || "Erreur lors de l'envoi de la candidature. Veuillez réessayer.")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="offre-detail">
        <div className="loading-skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    )
  }

  if (error && !offre) {
    return (
      <div className="offre-detail">
        <div className="error-message">
          <h3>Erreur</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="offre-detail">
        {offre ? (
          <>
            <div className="offre-header">
              <h2>{offre.titre}</h2>
              <div className="offre-badge">{offre.salaire}€</div>
            </div>

            <div className="offre-meta">
              <div className="meta-item">
                <span className="meta-icon">🏢</span>
                <p>
                  <strong>Entreprise :</strong> {offre.entreprise}
                </p>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <p>
                  <strong>Lieu :</strong> {offre.lieu}
                </p>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <p>
                  <strong>Date de publication :</strong>{" "}
                  {new Date(offre.date_publication).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="offre-section">
              <h3 className="section-title">Description du poste</h3>
              <div className="offre-description">
                <p>{offre.description}</p>
              </div>
            </div>

            <div className="offre-section">
              <h3 className="section-title">Postuler à cette offre</h3>

              {success && (
                <div className="success-message">
                  <p>{success}</p>
                </div>
              )}

              {error && !loading && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="candidature-form">
                <div className="form-group">
                  <label htmlFor="cv">
                    CV <span className="required">*</span>
                  </label>
                  <div className="file-input-container">
                    <input
                      id="cv"
                      type="file"
                      onChange={(e) => handleFileChange(e, setCv)}
                      required
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="file-input-help">{cv ? cv.name : "Sélectionner votre CV (PDF, DOC, DOCX)"}</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lettre">
                    Lettre de motivation <span className="required">*</span>
                  </label>
                  <div className="file-input-container">
                    <input
                      id="lettre"
                      type="file"
                      onChange={(e) => handleFileChange(e, setLettre)}
                      required
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="file-input-help">
                      {lettre ? lettre.name : "Sélectionner votre lettre de motivation (PDF, DOC, DOCX)"}
                    </div>
                  </div>
                </div>

                <button type="submit" className={submitting ? "button-submitting" : ""} disabled={submitting}>
                  {submitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                </button>
              </form>
            </div>
          </>
        ) : (
          <p>Chargement de l'offre...</p>
        )}
      </div>
    </div>
  )
}

export default OffreDetail
