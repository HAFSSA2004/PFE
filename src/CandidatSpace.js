"use client"

import { useEffect, useState } from "react"
import {
  FaEnvelope,
  FaUserCircle,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa"
import "./CandidatSpace.css"
//impob
function CandidatSpace() {
  const [candidat, setCandidat] = useState(null)
  const [applications, setApplications] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchCandidat = async () => {
      try {
        if (!token) {
          throw new Error("Token d'authentification manquant")
        }

        const response = await fetch("https://pfe-api-8b8e.vercel.app/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        setCandidat(data.user)
      } catch (error) {
        console.error("Erreur lors du chargement des infos:", error.message)
        setCandidat(null)
      }
    }

    const fetchApplications = async () => {
      try {
        if (!token) {
          throw new Error("Token d'authentification manquant")
        }
        const response = await fetch("https://pfe-api-8b8e.vercel.app/mes-candidatures", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        setApplications(data)
      } catch (error) {
        console.error("Erreur lors du chargement des candidatures:", error.message)
        setApplications([])
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(() => {
      fetchCandidat()
      fetchApplications()
    }, 100)

    return () => clearTimeout(timer)
  }, [token])

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Chargement de votre espace...</p>
      </div>
    )
  }

  if (!candidat) {
    return (
      <div className="error-container">
        <FaTimesCircle size={40} />
        <p>Impossible de charger les informations du candidat.</p>
        <div className="error-details">
          <p>Causes possibles:</p>
          <ul>
            <li>Le serveur n'est pas accessible (https://pfe-api-8b8e.vercel.app)</li>
            <li>Votre session a expiré</li>
            <li>Problème de connexion réseau</li>
          </ul>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Réessayer
          </button>
        </div>
      </div>
    )
  }

  const getStatusInfo = (status) => {
    switch (status) {
      case "en attente":
        return { class: "status-pending", icon: <FaRegClock />, text: "En attente" }
      case "entretien":
        return { class: "status-interview", icon: <FaCalendarAlt />, text: "Entretien prévu" }
      case "refusée":
        return { class: "status-rejected", icon: <FaTimesCircle />, text: "Refusée" }
      case "acceptée":
        return { class: "status-accepted", icon: <FaCheckCircle />, text: "Acceptée" }
      default:
        return { class: "status-pending", icon: <FaRegClock />, text: status }
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("fr-FR", options)
  }

  return (
    <div>
      <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="profile-section">
          <div className="profile-avatar">
            <FaUserCircle />
          </div>
          <div className="profile-info">
            <h1>
              {candidat.prenom} {candidat.nom}
            </h1>
            <div className="profile-contact">
              <span>
                <FaEnvelope /> {candidat.email}
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1>Mes Candidature</h1>
      <div className="dashboard-content">
       {applications.length === 0 ? (
  <div className="dashboard-card applications-card">
    <div className="card-body">
      <p>Vous n'avez pas encore de candidatures.</p>
    </div>
  </div>
) : (
  applications.map((application, index) => {
    const statusInfo = getStatusInfo(application.statut)
    return (
      <div className="dashboard-card applications-card" key={index}>
        <div className="card-header">
          <h2>
            <FaBriefcase /> {application.id_offre?.titre || "Poste non spécifié"}
          </h2>
        </div>
        <div className="card-body">
          <div className="application-item">
            <div className="application-header">
              <div className="company-name">
                <FaBuilding /> {application.id_offre?.entreprise || "Entreprise non spécifiée"}
              </div>
              <div className={`application-status ${statusInfo.class}`}>
                {statusInfo.icon} {statusInfo.text}
              </div>
            </div>
            <div className="application-details">
              <div className="application-date">
                <FaCalendarAlt /> Postulé le {formatDate(application.date_postulation)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
)}
       </div>
      </div>
   
       {/*****<div className="dashboard-card applications-card">
          <div className="card-header">
    <h2>
      <FaBriefcase /> Informations personnelles
    </h2>
  </div>
  <div className="card-body">
    <div className="application-item">
     
      <div className="application-details">
        <p>
          <strong>Nom d'utilisateur:</strong> {candidat.nom || "Non disponible"}
        </p>
        <p>
          <strong>Prénom:</strong> {candidat.prenom}
        </p>
        <p>
          <strong>Email:</strong> {candidat.email}
        </p>
      </div>
    </div>
  </div> */}
    </div>
 
  )
}

export default CandidatSpace
