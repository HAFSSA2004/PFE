import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  // Lire l'utilisateur connecté
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src="/RH.png" alt="Logo" className="me-2" style={{ height: '40px' }} />
          RecrutPro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-nowrap" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>

            {/* Affichage conditionnel selon le rôle */}
            {user?.role === 'recruteur' && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            )}
            {user?.role === 'candidat' && (
              <li className="nav-item">
                <Link className="nav-link" to="/candidat-space">Espace Candidat</Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center flex-nowrap">
            {!user && (
              <>
                <Link to="/Login" className="btn btn-primary btnS me-2">Sign In</Link>
                <Link to="/Signup" className="btn btn-outline-primary me-3">Register</Link>
              </>
            )}

            {user && (
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent p-0"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Ouvrir le menu profil"
                >
                  <img
                    src="/images.png"
                    alt="profil"
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover', cursor: 'pointer' }}
                  />
                </button>

                <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="profileDropdown">
                  <li className="dropdown-item text-muted">Bienvenue, {user.email}</li>

                  {user.role === 'candidat' && (
                    <li>
                      <Link className="dropdown-item" to="/candidat-space">
                        Espace Candidat
                      </Link>
                    </li>
                  )}

                  {user.role === 'recruteur' && (
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard Recruteur
                      </Link>
                    </li>
                  )}

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        window.location.href = '/';
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="vr mx-2"></div>

            <Link to="/PostJob" className="ms-2 text-decoration-none text-muted text-nowrap">
              Entreprises/Publier Une Offre D'Emploi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
