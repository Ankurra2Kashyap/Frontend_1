import React, { useState } from "react";
import "./ReportAccess.css";
import logo from "../Assests/sclogoshiva.png";
import { Link } from "react-router-dom";

function ReportAccess() {
  const [reportAccess, setReportAccess] = useState([
    {
      id: 1,
      username: "john.smith",
      createdAt: "2025-08-20",
      report: "KYC Reports",
      access: "View",
      actions: "Edit/Delete"
    },
    {
      id: 2,
      username: "priya.sharma",
      createdAt: "2025-08-19",
      report: "AML Reports",
      access: "View/Download",
      actions: "Edit/Delete"
    }
  ]);

  return (
    <div className="report-access-container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Report Access Management</h2>
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
              
              <li className="active">Report Access</li>
              <li><Link to="/Admindashboardsettings" className="menu-link">Settings</Link></li>
              <li><Link to="/Adminaccount" className="menu-link">Account</Link></li>
              <li><Link to="/Adminhelp" className="menu-link">Help</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="access-form-card">
            <h2>Assign Report Access</h2>
            <div className="form-grid">
              <select className="form-control">
                <option>Choose a user...</option>
                <option>john.smith</option>
                <option>priya.sharma</option>
                <option>david.lee</option>
              </select>
              
              <select className="form-control">
                <option>Choose a report...</option>
                <option>KYC Reports</option>
                <option>AML Reports</option>
                <option>Dormant Reports</option>
                <option>Active User Reports</option>
                <option>Inactive User Reports</option>
              </select>
              
              <select className="form-control">
                <option>View</option>
                <option>View/Download</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="assign-btn">Assign Access</button>
            </div>
          </div>

          <div className="access-table-card">
            <h2>Current Report Access</h2>
            <div className="table-wrapper">
              <table className="access-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Created At</th>
                    <th>Report</th>
                    <th>Access</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reportAccess.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center", padding: "40px" }}>
                        No records yet.
                      </td>
                    </tr>
                  ) : (
                    reportAccess.map((item) => (
                      <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.report}</td>
                        <td>
                          <span className="access-badge">{item.access}</span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-edit">Edit</button>
                            <button className="btn-delete">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ReportAccess;