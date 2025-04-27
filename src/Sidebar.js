import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faCalendar,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";


function Sidebar() {
    const [admin, setAdmin] = useState({ name: "Admin", email: "admin@gmail.com" });
    const navigate = useNavigate();
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setAdmin({ name: user.nom, email: user.email });
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("🚪 Déconnexion réussie !");
        navigate("/login"); 
    };
    return (
            <div className="sidebar">
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
                    <Link to="/PostJob" className="nav-item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Publier une Offre</span>
                    </Link>
                    <Link to="/GoogleCalendar" className="nav-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span style={{fontSize:'15px'}}>Planning  Entretiens</span>
                    </Link>
                     <button className="logout-button nav-item pd-4" onClick={handleLogout}>
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                            <span>Se déconnecter</span>
                                        </button>
                </nav>
            </div>

    );
}

export default Sidebar;
