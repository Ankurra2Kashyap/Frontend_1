// 

import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import logo from "../../Assests/sclogoshiva.png";
import axios from "axios";

const Details = () => {
  const [info, setInfo] = useState([]);

  // 🔹 Fetch all users from backend on mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setInfo(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // 🔹 Handle edit
  const handleEdit = async (item, index) => {
    const newName = prompt("Enter new name:", item.name);
    const newEmail = prompt("Enter new email:", item.email);
    const newStatus = prompt("Enter new status (active/inactive):", item.status);
    const newAdGroup = prompt("Enter new AD Group:", item.adGroup);
    const newDepartment = prompt("Enter new Department:", item.department);

    if (newName && newEmail && newStatus && newAdGroup && newDepartment) {
      const updatedUser = {
        ...item,
        name: newName,
        email: newEmail,
        status: newStatus,
        adGroup: newAdGroup,
        department: newDepartment,
      };

      try {
        await axios.put(`http://localhost:8080/users/${item.id}`, updatedUser);

        const updated = [...info];
        updated[index] = updatedUser;
        setInfo(updated);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  // 🔹 Handle delete
  const handleDelete = async (item) => {
    if (window.confirm(`Are you sure you want to delete this user: ${item.name}?`)) {
      try {
        await axios.delete(`http://localhost:8080/users/${item.id}`);
        const newData = info.filter((det) => det.id !== item.id);
        setInfo(newData);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="details-container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Standard Chartered - User Management</h2>
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
              <li className="active">User Management</li>
              <li><Link to="/ReportAccess" className="menu-link">Report Access</Link></li>
              <li><Link to="/Settings" className="menu-link">Settings</Link></li>
              <li><Link to="/Adminaccount" className="menu-link">Account</Link></li>
              <li><Link to="/Adminhelp" className="menu-link">Help</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="action-buttons">
            <Link to="/AdminUser" className="back-link">← Back to Add User</Link>
          </div>

          <div className="details-card">
            <h2>User Details</h2>
            <div className="table-wrapper">
              <table className="details-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>AD Group</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {info.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center", padding: "40px" }}>
                        No data available, please add a user first.
                      </td>
                    </tr>
                  ) : (
                    info.map((i, index) => (
                      <tr key={i.id}>
                        <td>{index + 1}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>
                          <span className={i.status === "active" ? "status-active" : "status-inactive"}>
                            {i.status}
                          </span>
                        </td>
                        <td>{i.adGroup}</td>
                        <td>{i.department}</td>
                        <td className="action-buttons-cell">
                          <button
                            type="button"
                            className="btn btn-edit"
                            onClick={() => handleEdit(i, index)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-delete"
                            onClick={() => handleDelete(i)}
                          >
                            Delete
                          </button>
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
};

export default Details;
