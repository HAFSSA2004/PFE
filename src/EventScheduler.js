import React from "react";
import { gapi } from "gapi-script";

function EventScheduler() {
    const createEvent = async () => {
        try {
            const token = gapi.auth.getToken();
            if (!token) {
                alert("Veuillez vous connecter d'abord.");
                return;
            }

            const event = {
                summary: "Entretien d'embauche",
                location: "En ligne",
                description: "Entretien pour le poste de développeur.",
                start: {
                    dateTime: new Date(new Date().setHours(new Date().getHours() + 1)).toISOString(),
                    timeZone: "Europe/Paris",
                },
                end: {
                    dateTime: new Date(new Date().setHours(new Date().getHours() + 2)).toISOString(),
                    timeZone: "Europe/Paris",
                },
                attendees: [{ email: "candidat@example.com" }],
                reminders: {
                    useDefault: false,
                    overrides: [{ method: "email", minutes: 30 }],
                },
            };

            const response = await gapi.client.calendar.events.insert({
                calendarId: "primary",
                resource: event,
            });

            alert("Entretien planifié !");
            console.log("Événement ajouté :", response);
        } catch (error) {
            console.error("Erreur lors de la création de l’événement :", error);
        }
    };

    return <button onClick={createEvent}>Planifier l'entretien</button>;
}

export default EventScheduler;
