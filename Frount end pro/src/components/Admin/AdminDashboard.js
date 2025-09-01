import React from "react";
import "./AdminDashboard.css";
import logo from "../../Assests/sclogoshiva.png";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Admin Dashboard</h2>
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
              <li className="active">Dashboard</li>
              <li><Link to="/AdminUser" className="menu-link">User Management</Link></li>
          
              <li><Link to="/ReportAccess" className="menu-link">Report Access</Link></li>
              <li><Link to="/Admindashboardsettings" className="menu-link">Settings</Link></li>
              <li><Link to="/Adminaccount" className="menu-link">Account</Link></li>
              <li><Link to="/Adminhelp" className="menu-link">Help</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Stats Section */}
          <section className="stats-section">
            <div className="stat-card">
              <h3>Active Users</h3>
              <p className="stat-number">12</p>
            </div>
            <div className="stat-card">
              <h3>Pending Requests</h3>
              <p className="stat-number">4</p>
            </div>
            <div className="stat-card">
              <h3>Recent Activity</h3>
              <p className="stat-number">3</p>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="recent-activities">
            <h3>Recent Activities</h3>
            <div className="activity-card">
              <p><strong>Admin User</strong> removed a user from AD group</p>
              <span>1 hour ago</span>
            </div>
            <div className="activity-card">
              <p><strong>Admin User</strong> added a new report</p>
              <span>3 hours ago</span>
            </div>
            <div className="activity-card">
              <p><strong>Admin User</strong> assigned access to a user</p>
              <span>1 day ago</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;