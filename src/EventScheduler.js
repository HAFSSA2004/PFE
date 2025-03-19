function EventScheduler() {
    const createEvent = () => {
        const event = {
            summary: "Entretien d'embauche",
            location: "En ligne",
            description: "Entretien pour le poste de développeur.",
            start: {
                dateTime: "2024-06-10T10:00:00-07:00", // Remplace par la vraie date
                timeZone: "Europe/Paris",
            },
            end: {
                dateTime: "2024-06-10T11:00:00-07:00",
                timeZone: "Europe/Paris",
            },
            attendees: [{ email: "candidat@example.com" }],
            reminders: {
                useDefault: false,
                overrides: [{ method: "email", minutes: 30 }],
            },
        };

        gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
        }).then((response) => {
            alert("Entretien planifié !");
            console.log("Événement ajouté :", response);
        }).catch((error) => {
            console.error("Erreur lors de la création de l’événement :", error);
        });
    };

    return <button onClick={createEvent}>Planifier l'entretien</button>;
}
