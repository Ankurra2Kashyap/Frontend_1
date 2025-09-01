import React from "react";
import "./UserDashboard.css";

const Help = () => {
  return (
    <div className="help-page">
      <h2 className="page-title">❓ Help & Support</h2>

      <div className="faq-section">
        <h4>Frequently Asked Questions</h4>
        <ul>
          <li><strong>How do I download reports?</strong> → Go to “All Reports” and click the download button.</li>
          <li><strong>How do I bookmark a report?</strong> → Click the ⭐ button next to the report.</li>
          <li><strong>How do I change my password?</strong> → Go to “Settings” and update your password.</li>
        </ul>
      </div>

      <div className="contact-section mt-4">
        <h4>Contact Support</h4>
        <p>If you need more help, contact us at:</p>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
      </div>
    </div>
  );
};

export default Help;
