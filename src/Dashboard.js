import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './slid.css';

function Dashboard() {
    const [admin, setAdmin] = useState({ name: "Admin", email: "admin@gmail.com" });

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setAdmin({ name: user.nom, email: user.email });
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
                        <span>Gérer les Candidatures</span>
                    </Link>
                    <Link to="/post-job" className="nav-item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Publier une Offre</span>
                    </Link>
                    <Link to="/GoogleCalendar" className="nav-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Planning des Entretiens</span>
                    </Link>
                </nav>
            </aside>

            {/* Contenu principal */}
            <main className="dashboard-content">
                <h1>Tableau de Bord</h1>

                {/* Partie Tableau de Bord */}
                <div className="dashboard-widgets">
                    <div className="widget">
                        <h3>Candidatures en attente</h3>
                        <p>25</p>
                    </div>
                    <div className="widget">
                        <h3>Entretiens programmés</h3>
                        <p>10</p>
                    </div>
                    <div className="widget">
                        <h3>Offres actives</h3>
                        <p>7</p>
                    </div>
                    <div className="widget">
                        <h3>Nouveaux candidats</h3>
                        <p>5</p>
                    </div>
                </div>

                {/* Partie Statistiques */}
                <div className="dashboard-statistics">
                    <div className="statistic-item">
                        <h3>Statistique 1</h3>
                        <p>Data dynamique ici</p>
                    </div>
                    <div className="statistic-item">
                        <h3>Statistique 2</h3>
                        <p>Data dynamique ici</p>
                    </div>
                    <div className="statistic-item">
                        <h3>Statistique 3</h3>
                        <p>Data dynamique ici</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
