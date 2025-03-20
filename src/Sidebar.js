import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './slid.css';

function Sidebar() {
    const [admin, setAdmin] = useState({ name: "Admin", email: "admin@gmail.com" });

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setAdmin({ name: user.nom, email: user.email });
        }
    }, []);

    return (
        <div className="content">
            <div className="c">
                {/* Section Profil */}
                <h2 className="font-bold">{admin.name}</h2>
                <p className="text">{admin.email}</p>

                {/* Navigation */}
                <nav>
                    <Link to="/" className="item">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                    <Link to="/manage-candidatures" className="item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Manage Candidatures</span>
                    </Link>
                    <Link to="/post-job" className="item">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span>Post job</span>
                    </Link>
                    <Link to="/GoogleCalendar" className="item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Planning des Entretiens</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
