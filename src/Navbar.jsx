import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
        <img src="/L2.png" alt="Logo" className="me-2 navbar-logo"  />
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/contact">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            
           

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
            {user?.role === 'Admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/Admin-space">Admin Panel</Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center">
            {!user ? (
              <>
                <Link to="/Login" className="btnL">Sign In</Link>
                <Link to="/Signup" className="btn btn-outline-primary me-3">Register</Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn bg-transparent border-0 p-0"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images.png"
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover',marginTop:'-20px' }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="profileDropdown" style={{ width: '320px' }}>
                  <li className="dropdown-item text-muted">Welcome, {user.email}</li>

                  {user.role === 'candidat' && (
                    <li><Link className="dropdown-item" to="/candidat-space">Espace Candidat</Link></li>
                  )}
                  {user.role === 'recruteur' && (
                    <li><Link className="dropdown-item" to="/dashboard">Dashboard Recruteur</Link></li>
                  )}
                  {user.role === 'Admin' && (
                    <li><Link className="dropdown-item" to="/Admin-space">Admin Panel</Link></li>
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

            <div className="vr mx-3 d-none d-lg-block"></div>

            <Link
              to="/PostJob"
              className="text-decoration-none text-muted fw-semibold text-nowrap"
            >
              Entreprises / Publier une offre
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
