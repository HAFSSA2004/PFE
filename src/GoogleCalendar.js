"use client"

import { useEffect, useState } from "react"
import { gapi } from "gapi-script"
import axios from "axios"
import "./GoogleCalendar.css"

const CLIENT_ID = "508571841606-vht7f4v6d0qg5bedfhct1k1krmsfmr7l.apps.googleusercontent.com"
const API_KEY = "AIzaSyB7XugS7slIAgcHijhwRnVu-ln47EhU1OM"
const SCOPES = "https://www.googleapis.com/auth/calendar.events"
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]

const GoogleCalendar = () => {
  const [signedIn, setSignedIn] = useState(false)
  const [candidatures, setCandidatures] = useState([])
  const [recruteurId, setRecruteurId] = useState(null)
  const [emailCandidat, setEmailCandidat] = useState("")
  const [dateEntretien, setDateEntretien] = useState("")
  const [duree, setDuree] = useState(30)
  const [lieu, setLieu] = useState("Google Meet")

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
        .get(`https://pfe-api-8b8e.vercel.app/candidatures/confirmees/${recruteurId}`)
        .then((response) => {
          console.log("Candidatures confirmées:", response.data)
          setCandidatures(response.data)
        })
        .catch((error) => console.error("Erreur lors de la récupération des candidatures :", error))
    }
  }, [recruteurId])

  useEffect(() => {
    const start = async () => {
      try {
        gapi.load("client:auth2", async () => {
          await gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
          const authInstance = gapi.auth2.getAuthInstance()
          setSignedIn(authInstance.isSignedIn.get())
          authInstance.isSignedIn.listen(setSignedIn)
        })
      } catch (error) {
        console.error("Erreur d'initialisation GAPI :", error)
      }
    }
    start()
  }, [])

  const signIn = async () => {
    try {
      await gapi.auth2.getAuthInstance().signIn()
      setSignedIn(true)
    } catch (error) {
      console.error("Erreur lors de la connexion :", error)
    }
  }

  const signOut = async () => {
    try {
      await gapi.auth2.getAuthInstance().signOut()
      setSignedIn(false)
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error)
    }
  }

  const scheduleInterview = async () => {
    if (!emailCandidat.trim() || !dateEntretien || !duree || !lieu.trim()) {
      alert("Veuillez remplir tous les champs.")
      return
    }

    const startDateTime = new Date(dateEntretien)
    const endDateTime = new Date(startDateTime.getTime() + duree * 60000)

    const event = {
      summary: "Entretien d'embauche",
      location: lieu,
      description: `HireBridge
Entretien d'embauche
Date : ${startDateTime.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
Heure : ${startDateTime.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })} - ${endDateTime.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })} (UTC+1)
Expéditeur :HireBridge@gmail.com

Merci de confirmer votre participation à cet entretien.`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "Europe/Paris",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "Europe/Paris",
      },
      attendees: [{ email: emailCandidat }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    }

    try {
      await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      })
      alert("Entretien planifié et invitation envoyée !")
      setEmailCandidat("")
      setDateEntretien("")
      setDuree(30)
      setLieu("Google Meet")
    } catch (error) {
      console.error("Erreur lors de la planification :", error)
    }
  }

  // Updated function to handle embedded file data
  const viewFile = (fileObject, fileType, e) => {
    e.preventDefault()
    try {
      if (!fileObject || typeof fileObject !== "object") {
        alert(`${fileType} non disponible`)
        return
      }

      const { filename, contentType, data } = fileObject

      if (!data) {
        alert(`Données du ${fileType} non disponibles`)
        return
      }

      console.log(`Ouverture du ${fileType}:`, filename)

      // Convert base64 to blob
      const binaryString = atob(data)
      const bytes = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
      }

      const blob = new Blob([bytes], { type: contentType || "application/pdf" })
      const blobUrl = URL.createObjectURL(blob)

      const newWindow = window.open(blobUrl, "_blank")

      if (!newWindow) {
        alert("Popup bloqué. Veuillez autoriser les popups pour ce site.")
        URL.revokeObjectURL(blobUrl)
        return
      }

      // Clean up after a delay
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl)
      }, 10000)
    } catch (error) {
      console.error(`❌ Erreur lors de l'ouverture du ${fileType}:`, error)
      alert(`Erreur lors de l'ouverture du ${fileType}: ${error.message}`)
    }
  }

  return (
    <div className="container">
        <div className="mb-3">
     <a href="/dashboard" className=" back-button">
  <i className="bi bi-arrow-left"></i> 
</a>

    </div>
      <h2>Candidatures Confirmées</h2>
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Offre</th>
            <th>CV</th>
            <th>Lettre de Motivation</th>
            <th>Statut</th>
            <th>Date de Postulation</th>
          </tr>
        </thead>
        <tbody>
          {candidatures.length > 0 ? (
            candidatures.map(({ _id, id_offre, cv, lettre_motivation, statut, date_postulation }) => (
              <tr key={_id}>
                <td>{id_offre?.titre || "N/A"}</td>
                <td>
                  {cv ? (
                    <a
                      className="btn btn-outline-primary btn-sm"
                      onClick={(e) => viewFile(cv, "CV", e)}
                      type="button"
                    >
                      <i className="bi bi-file-earmark-text"></i> Voir CV
                    </a>
                  ) : (
                    <span className="text-muted">CV non disponible</span>
                  )}
                </td>
                <td>
                  {lettre_motivation ? (
                    <a
                      className="btn btn-outline-secondary btn-sm"
                      onClick={(e) => viewFile(lettre_motivation, "Lettre", e)}
                      type="button"
                    >
                      <i className="bi bi-file-earmark-richtext"></i> Voir Lettre
                    </a>
                  ) : (
                    <span className="text-muted">Lettre non disponible</span>
                  )}
                </td>
                <td
                  className={
                    statut === "Accepté"
                      ? "text-success fw-bold"
                      : statut === "Rejeté"
                        ? "text-danger fw-bold"
                        : "text-warning fw-bold"
                  }
                >
                  {statut}
                </td>
                <td>{new Date(date_postulation).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-muted">
                Aucune candidature confirmée trouvée.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {!signedIn ? (
        <button className="btn-login" onClick={signIn}>
          Se connecter avec Google
        </button>
      ) : (
        <div>
          <h2>Planifier un entretien</h2>
          <div className="form-group d-flex flex-column gap-2">
            <input
              type="email"
              placeholder="Email du candidat"
              value={emailCandidat}
              onChange={(e) => setEmailCandidat(e.target.value)}
              className="input-field"
            />
            <input
              type="datetime-local"
              value={dateEntretien}
              onChange={(e) => setDateEntretien(e.target.value)}
              className="input-field"
            />
            <input
              type="number"
              min="5"
              placeholder="Durée (minutes)"
              value={duree}
              onChange={(e) => setDuree(Number.parseInt(e.target.value))}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Lieu (Google Meet, Bureau...)"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
              className="input-field"
            />
            <button className="btn-planifier" onClick={scheduleInterview}>
              Planifier
            </button>
          </div>
          <div className="logout-container">
            <button className="btn btn-outline-dark rounded-pill px-4 py-2 fw-semibold shadow-sm" onClick={signOut}>
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GoogleCalendar
