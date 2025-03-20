import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import EventScheduler from "./EventScheduler";

const CLIENT_ID = "508571841606-vht7f4v6d0qg5bedfhct1k1krmsfmr7l.apps.googleusercontent.com";
const API_KEY = "AIzaSyB7XugS7slIAgcHijhwRnVu-ln47EhU1OM";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

function GoogleCalendar() {
    const [signedIn, setSignedIn] = useState(false);

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

    return (
        <div>
            {!signedIn ? (
                <button onClick={signIn}>Se connecter avec Google</button>
            ) : (
                <div>
                    <button onClick={signOut}>Se déconnecter</button>
                    <EventScheduler />
                </div>
            )}
        </div>
    );
}

export default GoogleCalendar;     