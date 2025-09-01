import React, { useState } from 'react';
import Crimg from '../Assests/sclogoyuva.jpg';
import { Link } from 'react-router-dom';
import bgImage from "../Assests/bg-9.jpg";
function Createaccount() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userType: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Account created:', formData);
    };

    return (
        <div className="create-container">
            <style jsx>{`
                .create-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('${bgImage}'); /* Add your image path here */
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    position: relative;
                    overflow: hidden;
                    padding: 20px 0;
                }

                .create-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 40px;
                    width: 450px;
                    text-align: center;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    position: relative;
                    z-index: 10;
                    animation: fadeInUp 0.8s ease;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .logo {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin: 0 auto 20px;
                    object-fit: cover;
                }

                .create-title {
                    color: white;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 30px;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .input-row {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                }

                .input-group {
                    position: relative;
                    margin-bottom: 20px;
                    flex: 1;
                }

                .input-group.full-width {
                    width: 100%;
                }

                .form-input, .form-select {
                    width: 100%;
                    padding: 15px 20px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    color: white;
                    font-size: 16px;
                    outline: none;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(5px);
                    box-sizing: border-box;
                }

                .form-input::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                }

                .form-select {
                    appearance: none;
                    background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
                    background-repeat: no-repeat;
                    background-position: right 20px center;
                    background-size: 20px;
                    padding-right: 50px;
                }

                .form-select option {
                    background: #333;
                    color: white;
                }

                .form-input:focus, .form-select:focus {
                    border-color: rgba(255, 255, 255, 0.6);
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .create-button {
                    width: 100%;
                    padding: 15px;
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    border: none;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 20px 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .create-button:hover {
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .back-link {
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.3s ease;
                    margin-top: 15px;
                    display: inline-block;
                }

                .back-link:hover {
                    color: white;
                    text-decoration: underline;
                }
            `}</style>

            <div className="create-card">
                <img src={Crimg} alt="Logo" className="logo" />
                <h2 className="create-title">Create Account</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group full-width">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="input-group full-width">
                        <select
                            name="userType"
                            value={formData.userType}
                            onChange={handleInputChange}
                            className="form-select"
                            required
                        >
                            <option value="">Select Account Type</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div className="input-group full-width">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="input-group full-width">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm Password"
                            className="form-input"
                            required
                        />
                    </div>

                    <button type="submit" className="create-button">
                        Create Account
                    </button>
                </form>

                <Link to="/role-selection" className="back-link">
                    Already have an account? Login here
                </Link>
            </div>
        </div>
    );
}

export default Createaccount;