import React, { useState, useEffect } from 'react';
import './Form.css';
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../Assests/sclogoshiva.png";

const Form = ({ users, setUsers }) => {
    const [selectedEmail, setSelectedEmail] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [label, setLabel] = useState("");
    const [drop, setDrop] = useState("");

    // Fetch users from backend
    useEffect(() => {
        axios.get("http://localhost:8080/api/user-management")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, [setUsers]);

    // Sync email dropdown when name is selected
    const handleNameChange = (e) => {
        const name = e.target.value;
        setSelectedName(name);

        const user = users.find(
            u => `${u.firstname} ${u.lastname}` === name
        );
        if (user) {
            setSelectedEmail(user.email);
        } else {
            setSelectedEmail("");
        }
    };

    // Sync name dropdown when email is selected
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setSelectedEmail(email);

        const user = users.find(u => u.email === email);
        if (user) {
            setSelectedName(user.firstname + " " + user.lastname);
        } else {
            setSelectedName("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedEmail) {
            alert("Please select a user!");
            return;
        }

        axios.put(`http://localhost:8080/api/user-management/email/${selectedEmail}`, {
            status: label,
            department: drop   // maps to adGroup
        })
        .then(() => {
            alert("User updated successfully!");

            // ✅ Update local state so Details.js shows updated info instantly
            const updatedUsers = users.map(user =>
                user.email === selectedEmail
                    ? { ...user, status: label, department: drop }
                    : user
            );
            setUsers(updatedUsers);

            setSelectedEmail("");
            setSelectedName("");
            setLabel("");
            setDrop("");
        })
        .catch(err => {
            console.error(err);
            alert("Failed to update user.");
        });
    };

    return (
        <div className="form-container">
            {/* Top Bar */}
            <header className="top-bar">
                <div className="top-bar-left">
                    <h2>Admin: User Management</h2>
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
                            <li><Link to="/Admindashboard" className="menu-link">Dashboard</Link></li>
                            <li className="active">User Management</li>
                            <li><Link to="/ReportAccess" className="menu-link">Report Access</Link></li>
                            <li><Link to="/Admindashboardsettings" className="menu-link">Settings</Link></li>
                            <li><Link to="/Adminaccount" className="menu-link">Account</Link></li>
                            <li><Link to="/Adminhelp" className="menu-link">Help</Link></li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <div className="action-buttons">
                        <Link to="/details" className="details-link">View Details</Link>
                    </div>

                    <div className="form-card">
                        <form className="custom-form" onSubmit={handleSubmit}>
                            <h2 className="form-title">Update User</h2>

                            {/* Name Dropdown */}
                            <div className="form-group">
                                <label>Select Name</label>
                                <select
                                    className="form-control"
                                    value={selectedName}
                                    onChange={handleNameChange}
                                    required
                                >
                                    <option value="">-- Select Name --</option>
                                    {users.map(user => (
                                        <option
                                            key={user.email}
                                            value={`${user.firstname} ${user.lastname}`}
                                        >
                                            {user.firstname} {user.lastname}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Email Dropdown */}
                            <div className="form-group">
                                <label>Select Email</label>
                                <select
                                    className="form-control"
                                    value={selectedEmail}
                                    onChange={handleEmailChange}
                                    required
                                >
                                    <option value="">-- Select Email --</option>
                                    {users.map(user => (
                                        <option key={user.email} value={user.email}>
                                            {user.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Status */}
                            <div className="form-group">
                                <label>Status</label>
                                <div className="status-options">
                                    <label className="status-label">
                                        <input
                                            type="radio"
                                            name="statusOptions"
                                            value="active"
                                            checked={label === "active"}
                                            onChange={(e) => setLabel(e.target.value)}
                                            required
                                        />
                                        Active
                                    </label>
                                    <label className="status-label">
                                        <input
                                            type="radio"
                                            name="statusOptions"
                                            value="inactive"
                                            checked={label === "inactive"}
                                            onChange={(e) => setLabel(e.target.value)}
                                            required
                                        />
                                        Inactive
                                    </label>
                                </div>
                            </div>

                            {/* AD Group */}
                            <div className="form-group">
                                <label htmlFor="adGroup">AD Group</label>
                                <select
                                    className="form-control"
                                    id="adGroup"
                                    value={drop}
                                    onChange={(e) => setDrop(e.target.value)}
                                    required
                                >
                                    <option value="">-- Select AD Group --</option>
                                    <option value="wealth-compliance">Wealth Compliance</option>
                                    <option value="wealth-user-admin">Wealth User Admin</option>
                                    <option value="global-user">Global User</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-submit">Update</button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Form;
