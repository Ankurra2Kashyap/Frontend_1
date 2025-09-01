import { Link, useNavigate } from "react-router-dom";
import logo from "../Assests/sclogo.jpeg";
import { useEffect, useState } from "react";

import Neversettle from "../Assests/Neversettleimg.jpg";
import Dotherightthing from "../Assests/Dotherightthingimg.jpg";
import BetterTogether from "../Assests/betterimg.jpg";
function LandingPage() {
  const words = ["Welcome", "to", "RW", "Tool"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) =>
          prev ? prev + " " + words[index] : words[index]
        );
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [index, words]);

  const featureCards = [
    {
      title: "Better Together",
      desc: "We believe in the power of collaboration and diversity. Working together, we achieve more and create lasting value for our clients and communities.",
      btn: "Collaborate",
      icon: "🤝",
      bg: "linear-gradient(135deg, #004B87, #0066B3)",
      bgImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), linear-gradient(135deg, #004B87, #0066B3)",
    },
    {
      title: "Never Settle",
      desc: "We continuously push boundaries and strive for excellence. Innovation drives us forward as we seek better solutions for tomorrow's challenges.",
      btn: "Innovate",
      icon: "🚀",
      bg: "linear-gradient(135deg, #00A85A, #00C46A)",
      bgImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), linear-gradient(135deg, #00A85A, #00C46A)",
    },
    {
      title: "Do the Right Thing",
      desc: "Integrity and ethical behavior guide every decision we make. We're committed to being a responsible partner in everything we do.",
      btn: "Learn More",
      icon: "⚖️",
      bg: "linear-gradient(135deg, #004B87, #006B9A)",
      bgImage: "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), linear-gradient(135deg, #004B87, #006B9A)",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  const styles = {
    heroSection: {
      textAlign: "center",
      padding: "5rem 1rem",
      color: "white",
      background: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center/cover no-repeat`,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "80px",
    },
    container: {
      position: "relative",
    },
    heroTitle: {
      fontSize: "4rem",
      fontWeight: "bold",
      textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
      minHeight: "120px",
      Textcolor: "black"
    },
    heroSubtitle: {
      fontSize: "1.4rem",
      color: "#F0F8FF",
      fontWeight: 300,
    },
    heroSubtext: {
      fontStyle: "italic",
      fontSize: "1.2rem",
      color: "#E8F4FD",
    },
    btnBase: {
      borderRadius: "50px",
      padding: "15px 35px",
      fontWeight: "bold",
      fontSize: "1.2rem",
      transition: "0.3s",
      border: "3px solid white",
      cursor: "pointer",
    },
    heroBtn: {
      background: "#00A85A",
      color: "white",
    },
    heroBtnHover: {
      background: "white",
      color: "#00A85A",
      transform: "translateY(-3px)",
    },
    heroBtnSecondary: {
      background: "#004B87",
      color: "white",
    },
    heroBtnSecondaryHover: {
      background: "white",
      color: "#004B87",
      transform: "translateY(-3px)",
    },
  };
  return (
    <>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "12px 0",
          borderBottom: "1px solid #E8F4FD",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand d-flex align-items-center fw-bold"
            href="#"
            style={{ color: "#004B87" }}
          >
            <img
              src={logo}
              alt="Logo"
              width="45"
              height="45"
              className="me-3"
              style={{ borderRadius: "8px" }}
            />
            <span style={{ fontSize: "24px", fontWeight: "600" }}>RW Tool</span>
          </a>

          <div className="navbar-nav d-flex align-items-center">
            <button
              className="nav-link btn btn-link fw-bold me-4"
              onClick={() => scrollToSection('about-us')}
              style={{
                color: "#004B87",
                textDecoration: "none",
                border: "none",
                background: "none",
                fontSize: "16px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#00A85A"}
              onMouseLeave={(e) => e.target.style.color = "#004B87"}
            >
              About Us
            </button>
            <button
              className="nav-link btn btn-link fw-bold me-4"
              onClick={() => scrollToSection('contact-us')}
              style={{
                color: "#004B87",
                textDecoration: "none",
                border: "none",
                background: "none",
                fontSize: "16px",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#00A85A"}
              onMouseLeave={(e) => e.target.style.color = "#004B87"}
            >
              Contact Us
            </button>
            <Link
              to="/role-selection"
              className="btn fw-bold"
              style={{
                backgroundColor: "#00A85A",
                border: "none",
                borderRadius: "30px",
                padding: "10px 25px",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0, 168, 90, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#008A4A";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#00A85A";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Building Image */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>{displayText}</h1>
          <p style={styles.heroSubtitle} >
            Efficiently manage files, generate reports, and track activity securely.
            <br />
            <span style={styles.heroSubtext}  >
              Here for good. Your right partner in digital transformation.
            </span>
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              style={{ ...styles.btnBase, ...styles.heroBtnSecondary }}
              onClick={() => navigate("/wealth-retail")}
              onMouseOver={(e) =>
                Object.assign(e.target.style, styles.heroBtnSecondaryHover)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, styles.heroBtnSecondary)
              }
            >
              Wealth & Retail Banking
            </button>
          </div>
        </div>
      </section>
      {/* Feature Cards Section */}
      {/* Feature Cards Section */}
      <section className="py-5" style={{ backgroundColor: "#F8FBFE" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 
              className="fw-bold mb-3" 
              style={{ color: "#004B87", fontSize: "2.8rem" }}
            >
              Our Values
            </h2>
            <p 
              className="lead" 
              style={{ 
                color: "#666", 
                maxWidth: "700px", 
                margin: "auto",
                fontSize: "1.2rem" 
              }}
            >
              The principles that guide us every day in delivering excellence and building trust
            </p>
          </div>
          <div className="row text-center g-4">
            {featureCards.map((card, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="card shadow-lg h-100 border-0 text-white position-relative overflow-hidden"
                  style={{
                    background: card.bgImage,
                    borderRadius: "25px",
                    transition: "all 0.4s ease",
                    minHeight: "380px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                  }}
                >
                  {/* Professional Pattern Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
                      opacity: 0.3,
                    }}
                  ></div>
                  
                  {/* Geometric decoration */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-30px",
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      border: "2px solid rgba(255,255,255,0.1)"
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "-20px",
                      width: "80px",
                      height: "80px",
                      background: "rgba(255,255,255,0.05)",
                      transform: "rotate(45deg)",
                      borderRadius: "8px"
                    }}
                  ></div>
                  
                  <div className="card-body p-4 d-flex flex-column justify-content-between position-relative" style={{ zIndex: 2 }}>
                    <div>
                      <div 
                        className="mb-4"
                        style={{ 
                          fontSize: "3.5rem",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                        }}
                      >
                        {card.icon}
                      </div>
                      <h5 
                        className="fw-bold mb-4" 
                        style={{ 
                          fontSize: "1.6rem",
                          textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
                        }}
                      >
                        {card.title}
                      </h5>
                      <p 
                        className="mb-4" 
                        style={{ 
                          fontSize: "1.05rem", 
                          lineHeight: "1.7",
                          color: "#F5F9FF",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
                        }}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <Link
                      to="/role-selection"
                      className="btn fw-bold mt-auto align-self-center"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        border: "2px solid rgba(255,255,255,0.8)",
                        borderRadius: "30px",
                        padding: "12px 30px",
                        color: "#004B87",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                        fontWeight: "600",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.transform = "scale(1.08)";
                        e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "rgba(255,255,255,0.95)";
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                      }}
                    >
                      {card.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about-us" className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3
                className="fw-bold mb-4"
                style={{ color: "#004B87", fontSize: "2.5rem" }}
              >
                About RW Tool
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem"
                }}
              >
                Built on Standard Chartered's legacy of excellence spanning over 170 years,
                RW Tool represents the next generation of secure file management and reporting solutions.
                We combine traditional banking values with cutting-edge technology.
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 style={{ color: "#00A85A", fontWeight: "bold" }}>170+</h4>
                    <p style={{ color: "#666", fontSize: "0.95rem" }}>Years of Heritage</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3">
                    <h4 style={{ color: "#00A85A", fontWeight: "bold" }}>99.9%</h4>
                    <p style={{ color: "#666", fontSize: "0.95rem" }}>Uptime Guarantee</p>
                  </div>
                </div>
              </div>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="me-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#00A85A",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#555", fontSize: "1.1rem" }}>Enterprise-grade security and compliance</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="me-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#00A85A",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#555", fontSize: "1.1rem" }}>Advanced reporting and analytics</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="me-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#00A85A",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "12px"
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#555", fontSize: "1.1rem" }}>24/7 global support network</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div
                className="p-5"
                style={{
                  background: "linear-gradient(135deg, #E8F4FD, #F0F8FF)",
                  borderRadius: "25px",
                  border: "1px solid #B3D9F2",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: "rgba(0, 168, 90, 0.1)",
                    borderRadius: "50%"
                  }}
                ></div>
                <h4 style={{ color: "#004B87", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
                  Ready to Transform Your Workflow?
                </h4>
                <p style={{ color: "#666", marginBottom: "2rem", fontSize: "1.1rem" }}>
                  Join thousands of organizations already using RW Tool to streamline
                  their file management and reporting processes.
                </p>
                <Link
                  to="/role-selection"
                  className="btn"
                  style={{
                    backgroundColor: "#004B87",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    padding: "15px 35px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    boxShadow: "0 6px 20px rgba(0,75,135,0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#00A85A";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#004B87";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Us Section */}
      <footer
        id="contact-us"
        className="py-5"
        style={{
          backgroundColor: "#004B87",
          color: "#ffffff"
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Contact Us</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={logo}
                  alt="Logo"
                  width="40"
                  height="40"
                  className="me-3"
                  style={{ borderRadius: "6px" }}
                />
                <h5 className="mb-0 fw-bold">RW Tool</h5>
              </div>
              <p style={{ color: "#B3D9F2", fontSize: "1rem", lineHeight: "1.6" }}>
                Driving commerce and prosperity through innovative file management solutions.
                <br />
                <em style={{ fontSize: "0.95rem" }}>Here for good. Your right partner.</em>
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>Get in Touch</h6>
              <div className="mb-3">
                <strong style={{ color: "#B3D9F2" }}>Email:</strong>
                <br />
                <a href="mailto:support@rwtool.com" style={{ color: "#ffffff", textDecoration: "none" }}>
                  support@rwtool.com
                </a>
              </div>
              <div className="mb-3">
                <strong style={{ color: "#B3D9F2" }}>Phone:</strong>
                <br />
                <span style={{ color: "#ffffff" }}>+1 (555) 123-4567</span>
              </div>
              <div className="mb-3">
                <strong style={{ color: "#B3D9F2" }}>Support:</strong>
                <br />
                <span style={{ color: "#ffffff" }}>Available 24/7</span>
              </div>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button
                    onClick={() => scrollToSection('about-us')}
                    style={{
                      color: "#B3D9F2",
                      textDecoration: "none",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer"
                    }}
                  >
                    About Us
                  </button>
                </li>
                <li className="mb-2">
                  <a href="#" style={{ color: "#B3D9F2", textDecoration: "none" }}>
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" style={{ color: "#B3D9F2", textDecoration: "none" }}>
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" style={{ color: "#B3D9F2", textDecoration: "none" }}>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ backgroundColor: "#B3D9F2", margin: "3rem 0 1.5rem 0" }} />
          <div className="text-center">
            <p className="mb-0" style={{ color: "#B3D9F2", fontSize: "0.95rem" }}>
              &copy; {new Date().getFullYear()} RW Tool. All rights reserved.
              Built with Standard Chartered's values of excellence and integrity.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;