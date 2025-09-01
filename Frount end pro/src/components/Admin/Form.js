import React from 'react';
import './Form.css';
import { useState } from 'react';
import Details from './Details';
import { Link } from "react-router-dom";
import logo from "../../Assests/sclogoshiva.png";

const Form = ({ data, setData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [label, setLabel] = useState('');
    const [drop, setDrop] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, { name, email, status: label, adGroup: drop }]);
        setName('');
        setEmail('');
        setLabel('');
        setDrop('');
        alert('Data Added Successfully');
    }

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
                            <h2 className="form-title">Add User</h2>

                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="nameInput">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="emailInput">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

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

                            <div className="form-group">
                                <label htmlFor="adGroup">AD Group</label>
                                <select className="form-control" id="adGroup" value={drop} onChange={(e) => setDrop(e.target.value)} required>
                                    <option value="">-- Select AD Group --</option>
                                    <option value="wealth-compliance">Wealth Compliance</option>
                                    <option value="wealth-user-admin">Wealth User Admin</option>
                                    <option value="global-user">Global User</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Form;