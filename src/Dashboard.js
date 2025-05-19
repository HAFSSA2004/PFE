//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome, faFileAlt, faCalendar, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
//import {  useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import './slid.css';
function Dashboard() {
    const [admin, setAdmin] = useState({ name: "Admin", email: "admin@gmail.com" });
    const [stats, setStats] = useState({ en_cours: 0, refusees: 0, acceptees: 0 });
    const [recruteurId, setRecruteurId] = useState(null);
    const [loading, setLoading] = useState(true);
   // const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                console.log("🔑 ID Recruteur récupéré:", payload.id);
                setRecruteurId(payload.id);
            } catch (error) {
                console.error("⚠️ Erreur lors du décodage du token :", error);
            }
        } else {
            console.error("⚠️ Aucun token trouvé !");
        }
    }, []);

    useEffect(() => {
        if (recruteurId) {
            console.log("📡 Envoi de la requête API avec ID:", recruteurId);
            fetch(`https://pfe-api-8b8e.vercel.app/candidatures/statistiques/${recruteurId}`)
                .then(response => {
                    if (!response.ok) throw new Error("Erreur de récupération des statistiques");
                    return response.json();
                })
                .then(data => {
                    console.log("📊 Données reçues :", data);
                    if (data.statistiques) {
                        setStats(data.statistiques);
                    }
                })
                .catch(error => console.error("❌ Erreur API :", error))
                .finally(() => setLoading(false));
        }
    }, [recruteurId]);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setAdmin({ name: user.nom, email: user.email });
        }
    }, []);

    /**const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("🚪 Déconnexion réussie !");
        navigate("/login"); 
    }; */
    return (
        <div className="manage-candidatures-container">
        <Sidebar />
        <div className="cards-container">
         <div className="dashboard-content">
                        <h1>Tableau de Bord</h1>
                        <div className="dashboard-widgets">
                            {loading ? (
                                <p>Chargement des statistiques...</p>
                            ) : (
                                <>
                                    <div className="widget">
                                        <h3>Candidatures en attente</h3>
                                        <p>{stats.en_cours}</p>
                                    </div>
                                    <div className="widget">
                                        <h3>Candidatures refusées</h3>
                                        <p>{stats.refusees}</p>
                                    </div>
                                    <div className="widget">
                                        <h3>Candidatures acceptées</h3>
                                        <p>{stats.acceptees}</p>
                                    </div>
                                </>
                            )}
                        </div>
</div>
        </div>
        </div>
    );
}

export default Dashboard;
