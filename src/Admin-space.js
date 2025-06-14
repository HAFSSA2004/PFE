"use client"
import Navbar from './Navbar';
import { useEffect, useState } from "react"
import {
  FaUserCircle,
  FaTrash,
  FaEdit,
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaUserGraduate,
  FaSpinner,
  FaInfoCircle
} from "react-icons/fa"
import "./Admin.css"

function AdminSpace() {
  const [users, setUsers] = useState([])
  const [offers, setOffers] = useState([])
  const [activeTab, setActiveTab] = useState("all") // all, recruiters, candidates, offers
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, type: "", id: "" })
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [dataLoading, setDataLoading] = useState({ users: true, offers: true })
const [adminInfo, setAdminInfo] = useState(null)

  useEffect(() => {
    fetchUsers()
    fetchOffers()
  }, [])
useEffect(() => {
  fetchAdminInfo()
  fetchUsers()
  fetchOffers()
}, [])

const fetchAdminInfo = async () => {
  try {
    const response = await fetch("https://pfe-api-8b8e.vercel.app/admin")
    if (!response.ok) {
      throw new Error("Failed to fetch admin info")
    }
    const data = await response.json()
    setAdminInfo(data)
  } catch (error) {
    console.error("Error fetching admin info:", error)
  }
}

  const fetchUsers = async () => {
    setDataLoading((prev) => ({ ...prev, users: true }))
    try {
      const response = await fetch("https://pfe-api-8b8e.vercel.app/users")
      if (!response.ok) {
        throw new Error("Failed to fetch users")
      }
      const data = await response.json()
      const allUsers = [...data.recruteurs, ...data.candidats]
      setUsers(allUsers)
    } catch (error) {
      console.error("Error fetching users:", error)
      showNotification("Failed to load users", "error")
    } finally {
      setDataLoading((prev) => ({ ...prev, users: false }))
    }
  }

  const fetchOffers = async () => {
    setDataLoading((prev) => ({ ...prev, offers: true }))
    try {
      const response = await fetch("https://pfe-api-8b8e.vercel.app/offres")
      if (!response.ok) {
        throw new Error("Failed to fetch offers")
      }
      const data = await response.json()
      setOffers(data)
    } catch (error) {
      console.error("Error fetching offers:", error)
      showNotification("Failed to load job offers", "error")
    } finally {
      setDataLoading((prev) => ({ ...prev, offers: false }))
    }
  }

  const getRecruiterName = (recruteurId) => {
    const recruiter = users.find((user) => user._id === recruteurId)
    return recruiter ? `${recruiter.nom} ${recruiter.prenom}` : "Unknown Recruiter"
  }

  const handleDelete = async (type, id) => {
    setDeleteConfirm({ show: true, type, id })
  }

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)
  }

  const confirmDelete = async () => {
    const { type, id } = deleteConfirm
    setLoading(true)

    try {
      let endpoint = ""
      if (type === "offer") {
        endpoint = `https://pfe-api-8b8e.vercel.app/offres/${id}`
      } else if (type === "user") {
        endpoint = `https://pfe-api-8b8e.vercel.app/users/${id}`
      }

      const response = await fetch(endpoint, {
        method: "DELETE",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to delete ${type}`)
      }

      if (type === "offer") {
        setOffers(offers.filter((offer) => offer._id !== id))
        showNotification("Job offer deleted successfully", "success")
      } else if (type === "user") {
        setUsers(users.filter((user) => user._id !== id))
        showNotification("User deleted successfully", "success")
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error)
      showNotification(`Failed to delete ${type}: ${error.message}`, "error")
    } finally {
      setLoading(false)
      setDeleteConfirm({ show: false, type: "", id: "" })
    }
  }

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, type: "", id: "" })
  }

  const isRecruiter = (user) => {
    return user.role === "recruteur" || user.hasOwnProperty("entreprise")
  }

  const filteredUsers = () => {
    if (activeTab === "recruiters") {
      return users.filter((user) => isRecruiter(user))
    } else if (activeTab === "candidates") {
      return users.filter((user) => !isRecruiter(user))
    }
    return users
  }

  return (
    <div>
      <Navbar/>
       <div className="admin-container">
      {/* Admin Header */}
      <div className="admin-header">
        <div className="admin-avatar">
          <FaUserCircle size={80} className="admin-icon" />
        </div>
        <div className="admin-title">
          <h2>Espace Administrateur</h2>
          
          <p className="admin-subtitle">Gérez les utilisateurs et les offres d'emploi</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button className={`admin-tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
          <FaUsers className="tab-icon" size={20} />
          <span>Utilisateurs</span>
        </button>
        <button
          className={`admin-tab ${activeTab === "recruiters" ? "active" : ""}`}
          onClick={() => setActiveTab("recruiters")}
        >
          <FaUserTie className="tab-icon" size={20} />
          <span>Recruteurs</span>
        </button>
        <button
          className={`admin-tab ${activeTab === "candidates" ? "active" : ""}`}
          onClick={() => setActiveTab("candidates")}
        >
          <FaUserGraduate className="tab-icon" size={20} />
          <span>Candidats</span>
        </button>
        <button
          className={`admin-tab ${activeTab === "offers" ? "active" : ""}`}
          onClick={() => setActiveTab("offers")}
        >
          <FaBriefcase className="tab-icon" size={20} />
          <span>Offres d'emploi</span>
        </button>


        <button
          className={`admin-tab ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          <FaInfoCircle className="tab-icon" size={20} />
          <span>Infos  Admin </span>
        </button>
      </div>

      {/* Content Area */}
      <div className="admin-content">
        {/* Admin Info Section */}
{activeTab === "info" && (
  <div className="admin-info-section">
    <h3>Informations Administrateur</h3>
    {adminInfo ? (
      <div className="admin-info-details">
         <p><strong>Nom :</strong> {adminInfo.nom}</p>
        <p><strong>Prénom :</strong> {adminInfo.prenom}</p>
        <p><strong>Email :</strong> {adminInfo.email}</p>
        <p><strong>Téléphone :</strong> {adminInfo.phone}</p>
        {/* Add other admin fields you want to show */}
      </div>
    ) : (
      <p>Loading admin information...</p>
    )}
  </div>
)}

        {/* Users List */}
        {(activeTab === "all" || activeTab === "recruiters" || activeTab === "candidates") && (
          <div className="section-header">
            <h3>
              {activeTab === "recruiters" ? "Recruiters" : activeTab === "candidates" ? "Candidates" : "All Users"}
            </h3>
            <span className="count-badge">{filteredUsers().length}</span>
          </div>
        )}

        {/* Users Loading State */}
        {dataLoading.users && (activeTab === "all" || activeTab === "recruiters" || activeTab === "candidates") && (
          <div className="loading-container">
            <FaSpinner className="spinner" size={30} />
            <p>Loading users...</p>
          </div>
        )}

        {/* Users Content */}
        {!dataLoading.users && (activeTab === "all" || activeTab === "recruiters" || activeTab === "candidates") && (
          <div className="user-grid">
            {filteredUsers().length > 0 ? (
              filteredUsers().map((user) => (
                <div key={user._id} className="user-card">
                  <div className="user-card-header">
                    <div className="user-avatar">
                      <FaUserCircle size={50} className={isRecruiter(user) ? "recruiter-icon" : "candidate-icon"} />
                    </div>
                    <div className="user-type-badge">{isRecruiter(user) ? "Recruiter" : "Candidate"}</div>
                  </div>
                  <div className="user-card-body">
                    <h4 className="user-name">
                      {user.nom} {user.prenom}
                    </h4>
                    <p className="user-email">{user.email}</p>
                    {isRecruiter(user) && user.entreprise && <p className="user-company">{user.entreprise}</p>}
                  </div>
                  <div className="user-card-actions">
                    
                    <button
                      className="action-button delete-button"
                      title="Delete User"
                      onClick={() => handleDelete("user", user._id)}
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No users found.</p>
              </div>
            )}
          </div>
        )}

        {/* Job Offers Section */}
        {activeTab === "offers" && (
          <>
            <div className="section-header">
              <h3>Job Offers</h3>
              <span className="count-badge">{offers.length}</span>
            </div>

            {/* Offers Loading State */}
            {dataLoading.offers && (
              <div className="loading-container">
                <FaSpinner className="spinner" size={30} />
                <p>Loading job offers...</p>
              </div>
            )}

            {/* Offers Content */}
            {!dataLoading.offers && (
              <div className="offers-list">
                {offers.length > 0 ? (
                  offers.map((offer) => (
                    <div key={offer._id} className="offer-card">
                      <div className="offer-card-header">
                        <h4>{offer.titre}</h4>
                        <div className="offer-actions">
                          
                          <button
                            className="action-button delete-button"
                            title="Delete Offer"
                            onClick={() => handleDelete("offer", offer._id)}
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="offer-card-body">
                        <p className="offer-description">{offer.description}</p>
                        <div className="offer-details">
                          <div className="offer-detail">
                            <span className="detail-label">Company:</span>
                            <span className="detail-value">{offer.entreprise}</span>
                          </div>
                          <div className="offer-detail">
                            <span className="detail-label">Location:</span>
                            <span className="detail-value">{offer.lieu}</span>
                          </div>
                          <div className="offer-detail">
                            <span className="detail-label">Salary:</span>
                            <span className="detail-value">{offer.salaire} DH</span>
                          </div>
                          <div className="offer-detail">
                            <span className="detail-label">Posted:</span>
                            <span className="detail-value">
                              {new Date(offer.date_publication).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="offer-detail">
                            <span className="detail-label">Recruiter:</span>
                            <span className="detail-value">{getRecruiterName(offer.id_recruteur)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <p>No job offers available.</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h4>Confirm Deletion</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this {deleteConfirm.type}? This action cannot be undone.</p>
              {deleteConfirm.type === "user" && (
                <p className="warning-text">
                  Warning: Deleting a user will also delete all their associated data
                  {isRecruiter(users.find((u) => u._id === deleteConfirm.id))
                    ? " including all job offers and applications."
                    : " including all their applications."}
                </p>
              )}
              {deleteConfirm.type === "offer" && (
                <p className="warning-text">
                  Warning: Deleting a job offer will also delete all applications for this position.
                </p>
              )}
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={cancelDelete} disabled={loading}>
                Cancel
              </button>
              <button className="confirm-button" onClick={confirmDelete} disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="spinner" size={14} />
                    <span>Deleting...</span>
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && <div className={`notification ${notification.type}`}>{notification.message}</div>}
    </div>
  
    </div>
  )
}

export default AdminSpace
