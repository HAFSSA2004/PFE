import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OffreDetail.css";

function OffreDetail() {
    const { id } = useParams(); // Récupération de l'ID depuis l'URL
    const [offre, setOffre] = useState(null);
    const [cv, setCv] = useState(null);
    const [lettre, setLettre] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5050/offre/${id}`)
            .then(response => setOffre(response.data))
            .catch(error => console.error("Erreur lors de la récupération de l'offre :", error));
    }, [id]);

    const handleFileChange = (event, setFile) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!cv || !lettre) {
            alert("Veuillez sélectionner un CV et une lettre de motivation.");
            return;
        }
    
        const formData = new FormData();
        formData.append("id_offre", id);
        formData.append("cv", cv);
        formData.append("lettre_motivation", lettre);
    
        try {
            const response = await axios.post("http://localhost:5050/candidature", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
    
            alert(response.data.message);
        } catch (error) {
            console.error("Erreur lors de l'envoi de la candidature :", error);
            alert("Erreur lors de l'envoi de la candidature.");
        }
    };
    
    return (
        <div className="offre-detail">
            {offre ? (
                <>
                    <h2>{offre.titre}</h2>
                    <p><strong>Entreprise :</strong> {offre.entreprise}</p>
                    <p><strong>Lieu :</strong> {offre.lieu}</p>
                    <p><strong>Description :</strong> {offre.description}</p>
                    <p><strong>Salaire :</strong> {offre.salaire}€</p>
                    <p><strong>Date de publication :</strong> {new Date(offre.date_publication).toLocaleDateString()}</p>

                    <h3>Postuler à cette offre</h3>
                    <form onSubmit={handleSubmit}>
                        <label>CV :</label>
                        <input type="file" onChange={(e) => handleFileChange(e, setCv)} required />
                        
                        <label>Lettre de motivation :</label>
                        <input type="file" onChange={(e) => handleFileChange(e, setLettre)} required />

                        <button type="submit">Envoyer la candidature</button>
                    </form>
                </>
            ) : (
                <p>Chargement de l'offre...</p>
            )}
        </div>
    );
}

export default OffreDetail;
