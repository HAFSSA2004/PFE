import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

const CLIENT_ID = "508571841606-vht7f4v6d0qg5bedfhct1k1krmsfmr7l.apps.googleusercontent.com";
const API_KEY = "AIzaSyB7XugS7slIAgcHijhwRnVu-ln47EhU1OM";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

function GoogleCalendar() {
    const [signedIn, setSignedIn] = useState(false);
    const [candidatures, setCandidatures] = useState([]);
    const [recruteurId, setRecruteurId] = useState(null);
    const [emailCandidat, setEmailCandidat] = useState("");
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setRecruteurId(payload.id);
        }
    }, []);

    useEffect(() => {
        if (recruteurId) {
            axios.get(`http://localhost:5050/candidatures/confirmees/${recruteurId}`)
                .then(response => setCandidatures(response.data))
                .catch(error => console.error("Erreur lors de la récupération des candidatures :", error));
        }
    }, [recruteurId]);

    useEffect(() => {
        function start() {
            gapi.load("client:auth2", async () => {
                try {
                    await gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES,
                    });
                    const authInstance = gapi.auth2.getAuthInstance();
                    setSignedIn(authInstance.isSignedIn.get());
                    authInstance.isSignedIn.listen(setSignedIn);
                } catch (error) {
                    console.error("Erreur d'initialisation GAPI :", error);
                }
            });
        }
        start();
    }, []);

    const signIn = async () => {
        try {
            await gapi.auth2.getAuthInstance().signIn();
            setSignedIn(true);
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    const signOut = async () => {
        try {
            await gapi.auth2.getAuthInstance().signOut();
            setSignedIn(false);
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    const scheduleInterview = async () => {
        if (!emailCandidat) {
            alert("Veuillez entrer l'email du candidat");
            return;
        }

        const event = {
            summary: "Entretien d'embauche",
            location: "Google Meet",
            description: "Entretien d'embauche avec le recruteur",
            start: {
                dateTime: new Date().toISOString(),
                timeZone: "Europe/Paris",
            },
            end: {
                dateTime: new Date(new Date().getTime() + 30 * 60000).toISOString(),
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
        };

        try {
            await gapi.client.calendar.events.insert({
                calendarId: "primary",
                resource: event,
            });
            alert("Entretien planifié et invitation envoyée");
        } catch (error) {
            console.error("Erreur lors de la planification :", error);
        }
    };

    return (
        <div>
            {!signedIn ? (
                <button onClick={signIn}>Se connecter avec Google</button>
            ) : (
                <div>
                    <button onClick={signOut}>Se déconnecter</button>
                    <h2>Planifier un entretien</h2>
                    <input
                        type="email"
                        placeholder="Email du candidat"
                        value={emailCandidat}
                        onChange={(e) => setEmailCandidat(e.target.value)}
                    />
                    <button onClick={scheduleInterview}>Planifier</button>
                    <h2>Candidatures Confirmées</h2>
                    <table border="1">
                        <thead>
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
                                candidatures.map((candidature) => (
                                    <tr key={candidature._id}>
                                        <td>{candidature.id_offre ? candidature.id_offre.titre : "N/A"}</td>
                                        <td>
                                            <a href={`http://localhost:5050/${candidature.cv}`} target="_blank" rel="noopener noreferrer">Voir CV</a>
                                        </td>
                                        <td>
                                            <a href={`http://localhost:5050/${candidature.lettre_motivation}`} target="_blank" rel="noopener noreferrer">Voir Lettre</a>
                                        </td>
                                        <td>{candidature.statut}</td>
                                        <td>{new Date(candidature.date_postulation).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Aucune candidature confirmée trouvée.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default GoogleCalendar;
