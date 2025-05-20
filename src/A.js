"use client"

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
  const [activeTab, setActiveTab] = useState("all") // all, recruiters, candidates, offers, admin
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, type: "", id: "" })
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [dataLoading, setDataLoading] = useState({ users: true, offers: true, admin: true })
  const [adminInfo, setAdminInfo] = useState(null)

  useEffect(() => {
    fetchAdminInfo()
    fetchUsers()
    fetchOffers()
  }, [])

  // Fetch Admin info
  const fetchAdminInfo = async () => {
    setDataLoading(prev => ({ ...prev, admin: true }))
    try {
      const response = await fetch("http://localhost:5050/admin")
      if (!response.ok) throw new Error("Failed to fetch admin info")
      const data = await response.json()
      setAdminInfo(data)
    } catch (error) {
      console.error("Error fetching admin info:", error)
      showNotification("Failed to load admin info", "error")
    } finally {
      setDataLoading(prev => ({ ...prev, admin: false }))
    }
  }

  // Fetch users (recruiters + candidates)
  const fetchUsers = async () => {
    setDataLoading(prev => ({ ...prev, users: true }))
    try {
      const response = await fetch("http://localhost:5050/users")
      if (!response.ok) throw new Error("Failed to fetch users")
      const data = await response.json()
      const allUsers = [...data.recruteurs, ...data.candidats]
      setUsers(allUsers)
    } catch (error) {
      console.error("Error fetching users:", error)
      showNotification("Failed to load users", "error")
    } finally {
      setDataLoading(prev => ({ ...prev, users: false }))
    }
  }

  // Fetch offers
  const fetchOffers = async () => {
    setDataLoading(prev => ({ ...prev, offers: true }))
    try {
      const response = await fetch("http://localhost:5050/offres")
      if (!response.ok) throw new Error("Failed to fetch offers")
      const data = await response.json()
      setOffers(data)
    } catch (error) {
      console.error("Error fetching offers:", error)
      showNotification("Failed to load job offers", "error")
    } finally {
      setDataLoading(prev => ({ ...prev, offers: false }))
    }
  }

  const getRecruiterName = (recruteurId) => {
    const recruiter = users.find(user => user._id === recruteurId)
    return recruiter ? `${recruiter.nom} ${recruiter.prenom}` : "Unknown Recruiter"
  }

  const handleDelete = (type, id) => {
    setDeleteConfirm({ show: true, type, id })
  }

  const handleEdit = (type, item) => {
    // You can open a modal or navigate to edit page here
    // This is just a placeholder function to be implemented by you
    showNotification(`Edit ${type} feature not implemented yet`, "info")
    console.log("Edit requested for:", type, item)
  }

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000)
  }

  const confirmDelete = async () => {
    const { type, id } = deleteConfirm
    setLoading(true)
    try {
      let endpoint = ""
      if (type === "offer") {
        endpoint = `http://localhost:5050/offres/${id}`
      } else if (type === "user") {
        endpoint = `http://localhost:5050/users/${id}`
      } else if (type === "admin") {
        endpoint = `http://localhost:5050/admin/${id}`
      }
      // Your API call to DELETE here, e.g.:
      // const response = await fetch(endpoint, { method: "DELETE" })

      // Simulate success (remove from state)
      if (type === "offer") {
        setOffers(prev => prev.filter(offer => offer._id !== id))
        showNotification("Job offer deleted successfully", "success")
      } else if (type === "user") {
        setUsers(prev => prev.filter(user => user._id !== id))
        showNotification("User deleted successfully", "success")
      } else if (type === "admin") {
        setAdminInfo(null) // or refetch admin info
        showNotification("Admin deleted successfully", "success")
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error)
      showNotification(`Failed to delete ${type}: ${error.message}`, "error")
    } finally {
      setLoading(false)
      setDeleteConfirm({ show: false, type: "", id: "" })
    }
  }

  const cancelDelete = () => setDeleteConfirm({ show: false, type: "", id: "" })

  const isRecruiter = (user) => user.role === "recruteur" || user.hasOwnProperty("entreprise")

  const filteredUsers = () => {
    if (activeTab === "recruiters") return users.filter(user => isRecruiter(user))
    if (activeTab === "candidates") return users.filter(user => !isRecruiter(user))
    return users
  }

  return (
    <div className="admin-container">
      {/* Admin Header */}
      <div className="admin-header">
        <div className="admin-avatar">
          <FaUserCircle size={80} className="admin-icon" />
        </div>
        <div className="admin-title">
          <h2>Admin Dashboard</h2>
          <p className="admin-subtitle">Manage users, job offers, and admin</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button className={`admin-tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
          <FaUsers className="tab-icon" size={20} />
          <span>All Users</span>
        </button>
        <button className={`admin-tab ${activeTab === "recruiters" ? "active" : ""}`} onClick={() => setActiveTab("recruiters")}>
          <FaUserTie className="tab-icon" size={20} />
          <span>Recruiters</span>
        </button>
        <button className={`admin-tab ${activeTab === "candidates" ? "active" : ""}`} onClick={() => setActiveTab("candidates")}>
          <FaUserGraduate className="tab-icon" size={20} />
          <span>Candidates</span>
        </button>
        <button className={`admin-tab ${activeTab === "offers" ? "active" : ""}`} onClick={() => setActiveTab("offers")}>
          <FaBriefcase className="tab-icon" size={20} />
          <span>Job Offers</span>
        </button>
        <button className={`admin-tab ${activeTab === "info" ? "active" : ""}`} onClick={() => setActiveTab("info")}>
          <FaInfoCircle className="tab-icon" size={20} />
          <span>Admin Info</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="admin-content">
        {/* Admin Info Section */}
        {activeTab === "info" && (
          <div className="admin-info-section">
            <h3>Admin Information</h3>
            {dataLoading.admin ? (
              <p>Loading admin information...</p>
            ) : adminInfo ? (
              <div className="admin-info-details">
                <p><strong>Name:</strong> {adminInfo.nom}</p>
                <p><strong>First Name:</strong> {adminInfo.prenom}</p>
                <p><strong>Email:</strong> {adminInfo.email}</p>
                <p><strong>Phone Number:</strong> {adminInfo.phone}</p>
                {/* Edit and Delete buttons for admin */}
                <div className="user-card-actions">
                  <button
                    className="action-button edit-button"
                    title="Edit Admin"
                    onClick={() => handleEdit("admin", adminInfo)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="action-button delete-button"
                    title="Delete Admin"
                    onClick={() => handleDelete("admin", adminInfo._id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <p>No admin information available.</p>
            )}
          </div>
        )}

        {/* Users List */}
        {(activeTab === "all" || activeTab === "recruiters" || activeTab === "candidates") && (
          <>
            <div className="section-header">
              <h3>
                {activeTab === "recruiters" ? "Recruiters" : activeTab === "candidates" ? "Candidates" : "All Users"}
              </h3>
              <span className="count-badge">{filteredUsers().length}</span>
            </div>

            {dataLoading.users ? (
              <div className="loading-indicator">
                <FaSpinner className="spin" size={24} />
                <span>Loading users...</span>
              </div>
            ) : filteredUsers().length === 0 ? (
              <p>No users found.</p>
            ) : (
              <div className="user-list">
                {filteredUsers().map(user => (
                  <div key={user._id} className="user-card">
                    <FaUserCircle size={40} className="user-icon" />
                    <div className="user-details">
                      <h4>{user.nom} {user.prenom}</h4>
                      <p>{user.email}</p>
                      <p>Role: {isRecruiter(user) ? "Recruiter" : "Candidate"}</p>
                      {isRecruiter(user) && user.entreprise && <p>Company: {user.entreprise}</p>}
                    </div>
                    <div className="user-card-actions">
                      <button
                        className="action-button edit-button"
                        title="Edit User"
                        onClick={() => handleEdit("user", user)}
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        className="action-button delete-button"
                        title="Delete User"
                        onClick={() => handleDelete("user", user._id)}
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Offers List */}
        {activeTab === "offers" && (
          <>
            <div className="section-header">
              <h3>Job Offers</h3>
              <span className="count-badge">{offers.length}</span>
            </div>

            {dataLoading.offers ? (
              <div className="loading-indicator">
                <FaSpinner className="spin" size={24} />
                <span>Loading job offers...</span>
              </div>
            ) : offers.length === 0 ? (
              <p>No job offers found.</p>
            ) : (
              <div className="offer-list">
                {offers.map(offer => (
                  <div key={offer._id} className="offer-card">
                    <h4>{offer.titre}</h4>
                    <p>{offer.description}</p>
                    <p><strong>Recruiter:</strong> {getRecruiterName(offer.recruteur)}</p>
                    <p><strong>Location:</strong> {offer.lieu}</p>
                    <p><strong>Salary:</strong> {offer.salaire}</p>
                    <div className="offer-card-actions">
                      <button
                        className="action-button edit-button"
                        title="Edit Offer"
                        onClick={() => handleEdit("offer", offer)}
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        className="action-button delete-button"
                        title="Delete Offer"
                        onClick={() => handleDelete("offer", offer._id)}
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Confirm Delete</h4>
            <p>Are you sure you want to delete this {deleteConfirm.type}?</p>
            <div className="modal-buttons">
              <button
                className="btn btn-danger"
                disabled={loading}
                onClick={confirmDelete}
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
              <button className="btn btn-secondary" disabled={loading} onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  )
}

export default AdminSpace
