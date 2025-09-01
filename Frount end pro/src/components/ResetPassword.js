import React, { useState } from "react";
import logo from "../Assests/sclogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../Assests/bg-9.jpg";

function ResetPassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        newPassword: '',
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
        
        if (!formData.newPassword || !formData.confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        if (formData.newPassword.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        
        alert("Password reset successfully!");
        // Redirect to role selection page after successful reset
        setTimeout(() => {
            navigate('/role-selection');
        }, 1000);
    };

    return (
        <div className="reset-container">
            <style jsx>{`
                .reset-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('${bgImage}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    position: relative;
                    overflow: hidden;
                }

                .reset-card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 40px;
                    width: 400px;
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

                .logo-container {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: white;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .logo {
                    width: 90%;
                    height: 90%;
                    object-fit: contain;
                }

                .reset-title {
                    color: white;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 40px;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .input-group {
                    position: relative;
                    margin-bottom: 25px;
                }

                .form-input {
                    width: 100%;
                    padding: 15px 50px 15px 20px;
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

                .form-input:focus {
                    border-color: rgba(255, 255, 255, 0.6);
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .input-icon {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 18px;
                }

                .reset-button {
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

                .reset-button:hover {
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .back-to-login {
                    color: rgba(255, 255, 255, 0.8);
                    margin-top: 20px;
                    font-size: 14px;
                }

                .login-link {
                    color: white;
                    text-decoration: underline;
                    font-weight: bold;
                    transition: color 0.3s ease;
                }

                .login-link:hover {
                    color: #ffd700;
                }

                .password-requirements {
                    text-align: left;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                    margin-bottom: 20px;
                    padding: 15px;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    backdrop-filter: blur(5px);
                }

                .password-requirements ul {
                    margin: 0;
                    padding-left: 20px;
                }

                .password-requirements li {
                    margin-bottom: 5px;
                }
            `}</style>

            <div className="reset-card">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h2 className="reset-title">Reset Password</h2>

                <div className="password-requirements">
                    <strong style={{ color: 'white' }}>Password Requirements:</strong>
                    <ul>
                        <li>Minimum 6 characters</li>
                        <li>Must match confirmation</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="New Password"
                            className="form-input"
                            required
                        />
                        <span className="input-icon">🔒</span>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm New Password"
                            className="form-input"
                            required
                        />
                        <span className="input-icon">🔒</span>
                    </div>

                    <button
                        type="submit"
                        className="reset-button"
                    >
                        Reset Password
                    </button>
                </form>

                <div className="back-to-login">
                    Remember your password? <Link to="/role-selection" className="login-link">Back to Login</Link>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;