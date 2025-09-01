import React, { useState } from "react";
import logo from "../Assests/sclogo.jpeg";
import { Link } from "react-router-dom";
import bgImage from "../Assests/bg-9.jpg";
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp = () => {
        if (!email) {
            alert("Please enter your email or username");
            return;
        }
        setOtpSent(true);
        alert(`OTP sent to ${email}`);
    };

    const handleVerify = () => {
        if (!otp) {
            alert("Please enter the OTP");
            return;
        }
        alert(`OTP verified: ${otp}`);
    };

    return (
        <div className="forgot-container">
            <style jsx>{`
                .forgot-container {
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
                }

                .forgot-card {
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

                .forgot-title {
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

                .form-input:focus {
                    border-color: rgba(255, 255, 255, 0.6);
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .action-button {
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
                    margin: 15px 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .action-button:hover {
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .verify-button {
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
                    margin: 15px 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-decoration: none;
                    display: inline-block;
                    box-sizing: border-box;
                }

                .verify-button:hover {
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    color: #333;
                    text-decoration: none;
                }
            `}</style>

            <div className="forgot-card">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h2 className="forgot-title">Forgot Password</h2>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter Email / Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>

                <button
                    onClick={handleSendOtp}
                    className="action-button"
                >
                    Send OTP
                </button>

                {otpSent && (
                    <>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <Link 
                            to="/ResetPassword"
                            className="verify-button"
                            onClick={handleVerify}
                        >
                            Verify & Continue
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;