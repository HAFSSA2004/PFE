import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './slid.css';

function Dashboard() {
    const [admin,setAdmin] = useState({ name: "Admin", email: "admin@gmail.com" });
    const [stats, setStats] = useState({ en_cours: 0, refusees: 0, acceptees: 0 });
    const [recruteurId, setRecruteurId] = useState(null);
    const [loading, setLoading] = useState(true); // État pour indiquer si les données chargent
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            console.log("🔑 ID Recruteur récupéré:", payload.id);
            setRecruteurId(payload.id);
        } else {
            console.error("⚠️ Aucun token trouvé !");
        }
    }, []);

// 2️⃣ Exécuter la requête API **uniquement** quand recruteurId est défini
useEffect(() => {
    if (recruteurId) {
        console.log("📡 Envoi de la requête API avec ID:", recruteurId);
        fetch(`http://localhost:5050/candidatures/statistiques/${recruteurId}`)
            .then(response => response.json())
            .then(data => {
                console.log("📊 Données reçues :", data);
                if (data.statistiques) {
                    setStats(data.statistiques);
                }
            })
            .catch(error => console.error("❌ Erreur API :", error))
            .finally(() => setLoading(false)); // Marquer la fin du chargement
    }
}, [recruteurId]); // Déclencher la requête seulement quand recruteurId change


    useEffect(() => {
        // Récupérer l'utilisateur connecté depuis le localStorage
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setAdmin({ name: user.nom, email: user.email });

            // Appel API pour récupérer les statistiques des candidatures
        }
    }, []);

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="admin-name">{admin.name}</h2>
                <p className="admin-email">{admin.email}</p>

                <nav>
                    <Link to="/" className="nav-item">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Accueil</span>
                    </Link>
                    <Link to="/manage-candidatures" className="nav-item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Gérer  Candidatures</span>
                    </Link>
                    <Link to="/PostJob" className="nav-item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Publier une Offre</span>
                    </Link>
                    <Link to="/GoogleCalendar" className="nav-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Des Entretiens</span>
                    </Link>
                </nav>
            </aside>

            {/* Contenu principal */}
            <main className="dashboard-content">
                <h1>Tableau de Bord</h1>

                {/* Partie Statistiques */}
                <div className="dashboard-widgets">
                    {loading ? (
                        <p>Chargement des statistiques...</p> // ✅ Affichage d'un message de chargement
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

            </main>
        </div>
    );
}

export default Dashboard;
