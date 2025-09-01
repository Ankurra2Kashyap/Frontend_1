import React from "react";
import "./Adminhelp.css";
import logo from "../../Assests/sclogoshiva.png";
import { Link } from "react-router-dom";

function Help() {
  const contactInfo = {
    emergency: {
      title: "Emergency Support",
      phone: "+65 6596 7000",
      email: "emergency.support@sc.com",
      hours: "24/7 Available"
    },
    technical: {
      title: "Technical Support",
      phone: "+65 6596 7100",
      email: "tech.support@sc.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM"
    },
    website: {
      title: "Website Issues",
      email: "website.issues@sc.com",
      responseTime: "Within 24 hours"
    },
    customerCare: {
      title: "Customer Care",
      phone: "+65 6596 7777",
      email: "customer.care@sc.com",
      hours: "Monday - Friday: 8:00 AM - 8:00 PM, Saturday: 8:00 AM - 1:00 PM"
    }
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="help-container">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h2>Help & Support</h2>
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
              <li><Link to="/Adminaccount" className="menu-link">Account</Link></li>
              <li className="active">Help</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="help-header">
            <h1>Need Assistance?</h1>
            <p>Get in touch with our support team for any issues or questions</p>
          </div>

          <div className="contact-grid">
            {/* Emergency Support */}
            <div className="contact-card priority">
              <div className="card-icon emergency">🚨</div>
              <h3>{contactInfo.emergency.title}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="label">Phone:</span>
                  <button 
                    className="contact-link phone" 
                    onClick={() => handlePhoneClick(contactInfo.emergency.phone)}
                  >
                    {contactInfo.emergency.phone}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Email:</span>
                  <button 
                    className="contact-link email" 
                    onClick={() => handleEmailClick(contactInfo.emergency.email)}
                  >
                    {contactInfo.emergency.email}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Availability:</span>
                  <span className="hours emergency-hours">{contactInfo.emergency.hours}</span>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="contact-card">
              <div className="card-icon technical">🔧</div>
              <h3>{contactInfo.technical.title}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="label">Phone:</span>
                  <button 
                    className="contact-link phone" 
                    onClick={() => handlePhoneClick(contactInfo.technical.phone)}
                  >
                    {contactInfo.technical.phone}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Email:</span>
                  <button 
                    className="contact-link email" 
                    onClick={() => handleEmailClick(contactInfo.technical.email)}
                  >
                    {contactInfo.technical.email}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Hours:</span>
                  <span className="hours">{contactInfo.technical.hours}</span>
                </div>
              </div>
            </div>

            {/* Website Issues */}
            <div className="contact-card">
              <div className="card-icon website">🌐</div>
              <h3>{contactInfo.website.title}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="label">Email:</span>
                  <button 
                    className="contact-link email" 
                    onClick={() => handleEmailClick(contactInfo.website.email)}
                  >
                    {contactInfo.website.email}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Response Time:</span>
                  <span className="hours">{contactInfo.website.responseTime}</span>
                </div>
                <div className="website-note">
                  <p>For website-related issues, please include:</p>
                  <ul>
                    <li>Browser and version</li>
                    <li>Screenshot of the issue</li>
                    <li>Steps to reproduce</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Care */}
            <div className="contact-card">
              <div className="card-icon customer">📞</div>
              <h3>{contactInfo.customerCare.title}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="label">Phone:</span>
                  <button 
                    className="contact-link phone" 
                    onClick={() => handlePhoneClick(contactInfo.customerCare.phone)}
                  >
                    {contactInfo.customerCare.phone}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Email:</span>
                  <button 
                    className="contact-link email" 
                    onClick={() => handleEmailClick(contactInfo.customerCare.email)}
                  >
                    {contactInfo.customerCare.email}
                  </button>
                </div>
                <div className="contact-item">
                  <span className="label">Hours:</span>
                  <span className="hours">{contactInfo.customerCare.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How do I reset my password?</h4>
                <p>Navigate to Settings → Profile Settings and click "Edit Profile" to change your password.</p>
              </div>
              <div className="faq-item">
                <h4>How do I assign users to AD groups?</h4>
                <p>Go to Settings → User Management, select a user and AD group, then click "Assign Access".</p>
              </div>
              <div className="faq-item">
                <h4>How do I manage report access?</h4>
                <p>Use the Report Access section to assign specific reports to users and set their access levels.</p>
              </div>
              <div className="faq-item">
                <h4>What if the system is slow or unresponsive?</h4>
                <p>Contact Technical Support immediately. Clear your browser cache and try again while waiting for assistance.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Help;