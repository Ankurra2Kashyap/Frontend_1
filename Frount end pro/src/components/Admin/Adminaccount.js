import React from "react";
import "./Adminaccount.css";
import logo from "../../Assests/sclogoshiva.png";
import { Link } from "react-router-dom";

function Account() {
  const adminDetails = {
    firstName: "Admin",
    lastName: "User",
    email: "admin@standardchartered.com",
    employeeId: "SC001234",
    department: "IT Administration",
    role: "System Administrator",
    phoneNumber: "+65 6596 7000",
    officeLocation: "Singapore",
    joinDate: "January 15, 2020",
    lastLogin: "August 22, 2025 - 10:30 AM",
    accountStatus: "Active",
    permissions: [
      "User Management",
      "Report Access Control", 
      "AD Group Management",
      "System Settings",
      "Audit Logs"
    ]
  };

  return (
    <div className="account-container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Account Information</h2>
        </div>
        <div className="top-bar-right">
          <div className="profile-section">
            <div className="profile-pic">
              <img src="https://via.placeholder.com/40" alt="Profile" />
            </div>
            <span className="username">Admin User</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-section">
            <img src={logo} alt="Standard Chartered" className="logo" />
          </div>
          <div className="menu-section">
            <ul>
              <li><Link to="/AdminDashboard" className="menu-link">Dashboard</Link></li>
              <li><Link to="/AdminUser" className="menu-link">User Management</Link></li>
              
              <li><Link to="/ReportAccess" className="menu-link">Report Access</Link></li>
              <li><Link to="/Admindashboardsettings" className="menu-link">Settings</Link></li>
              <li className="active">Account</li>
              <li><Link to="/Adminhelp" className="menu-link">Help</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="account-overview">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="https://via.placeholder.com/120" alt="Admin Profile" />
              </div>
              <div className="profile-info">
                <h1>{adminDetails.firstName} {adminDetails.lastName}</h1>
                <p className="role">{adminDetails.role}</p>
                <p className="department">{adminDetails.department}</p>
                <span className={`status-badge ${adminDetails.accountStatus.toLowerCase()}`}>
                  {adminDetails.accountStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="account-details">
            <div className="details-grid">
              <div className="details-card">
                <h3>Personal Information</h3>
                <div className="detail-item">
                  <label>Employee ID:</label>
                  <span>{adminDetails.employeeId}</span>
                </div>
                <div className="detail-item">
                  <label>Email Address:</label>
                  <span>{adminDetails.email}</span>
                </div>
                <div className="detail-item">
                  <label>Phone Number:</label>
                  <span>{adminDetails.phoneNumber}</span>
                </div>
                <div className="detail-item">
                  <label>Office Location:</label>
                  <span>{adminDetails.officeLocation}</span>
                </div>
              </div>

              <div className="details-card">
                <h3>Account Details</h3>
                <div className="detail-item">
                  <label>Join Date:</label>
                  <span>{adminDetails.joinDate}</span>
                </div>
                <div className="detail-item">
                  <label>Last Login:</label>
                  <span>{adminDetails.lastLogin}</span>
                </div>
                <div className="detail-item">
                  <label>Account Status:</label>
                  <span className={`status-text ${adminDetails.accountStatus.toLowerCase()}`}>
                    {adminDetails.accountStatus}
                  </span>
                </div>
              </div>

              <div className="details-card permissions-card">
                <h3>System Permissions</h3>
                <div className="permissions-list">
                  {adminDetails.permissions.map((permission, index) => (
                    <div key={index} className="permission-item">
                      <span className="permission-icon">✓</span>
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-card">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <Link to="/Admindashboardsettings" className="action-btn">
                    Edit Profile
                  </Link>
                  <button className="action-btn secondary">
                    Change Password
                  </button>
                  <button className="action-btn secondary">
                    Download Account Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Account;