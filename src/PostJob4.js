import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Post4.css";

const PostJob4 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recruteurId = localStorage.getItem("id_recruteur");
    console.log(recruteurId)
    if (!recruteurId) {
      alert("Erreur : vous devez être connecté pour publier une offre !");
      return;
    }

    const updatedFormData = { ...formData, id_recruteur: recruteurId };

    try {
      const response = await fetch("http://localhost:5050/offres", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert("Offre publiée avec succès !");
        localStorage.removeItem("formData"); // Nettoyage après succès
        navigate("/dashboard");
      } else {
        alert("Erreur lors de la publication de l'offre.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Problème de connexion au serveur.");
    }
  };

  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      <div className="header-container d-flex align-items-center justify-content-between p-3">
        <h2 className="fw-bold">Décrivez le poste</h2>
        <img src="/image3.jpg" alt="Description du poste" className="header-image" />
      </div>

      <div className="mt-4">
        <label htmlFor="jobDescription" className="form-label fw-semibold">Description du poste *</label>
        <p className="text-muted">Cette description de poste a été générée par OpenAI. Vous pouvez la modifier ou la remplacer.</p>
        <textarea id="jobDescription" className="form-control" rows="8" defaultValue={formData.description || ""} />
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={() => navigate("/postJob")}>← Retour</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Publier →</button>
      </div>
    </div>
  );
};

export default PostJob4;
