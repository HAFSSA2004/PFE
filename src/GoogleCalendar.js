import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "TON_CLIENT_ID";
const API_KEY = "TA_CLE_API";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function GoogleCalendar() {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        function start() {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: SCOPES,
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(setSignedIn);
                setSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    const signIn = () => gapi.auth2.getAuthInstance().signIn();
    const signOut = () => gapi.auth2.getAuthInstance().signOut();

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
