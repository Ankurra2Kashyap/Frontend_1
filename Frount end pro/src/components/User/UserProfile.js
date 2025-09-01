import React from "react";
import "./UserDashboard.css";

const UserProfile = () => {
  const userDetails = {
    username: "XYZ",
    fullName: "ABC XYZ",
    email: "xyz@work.com",
    phone: "+1 (555) 123-4567",
    role: "User",
    department: "Financial Analysis",
    joinDate: "January 15, 2023",
    employeeId: "EMP001",
    lastLogin: "August 22, 2025 - 10:30 AM",
    reportsGenerated: 24,
    bookmarkedReports: 8,
  };

  return (
    <div className="profile-page">
      <h2 className="page-title">👤 Profile</h2>

      {/* Profile Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #28a745, #20c997)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          👤
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: "2rem", color: "#28a745" }}>
            {userDetails.fullName}
          </h1>
          <p
            style={{
              margin: "0.5rem 0",
              fontSize: "1.1rem",
              color: "#6c757d",
            }}
          >
            @{userDetails.username}
          </p>
          <p style={{ margin: 0, fontSize: "1rem", color: "#6c757d" }}>
            {userDetails.role} - {userDetails.department}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Contact Information
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#e8f5e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#28a745",
              }}
            >
              ✉️
            </div>
            <div>
              <div style={{ fontWeight: "600", color: "#495057" }}>Email</div>
              <div style={{ color: "#6c757d" }}>{userDetails.email}</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#e8f5e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#28a745",
              }}
            >
              📞
            </div>
            <div>
              <div style={{ fontWeight: "600", color: "#495057" }}>Phone</div>
              <div style={{ color: "#6c757d" }}>{userDetails.phone}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Activity Summary
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background: "#f8f9fa",
              borderRadius: "8px",
              textAlign: "center",
              border: "2px solid #e9ecef",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#28a745",
                marginBottom: "0.5rem",
              }}
            >
              {userDetails.reportsGenerated}
            </div>
            <div style={{ color: "#6c757d", fontWeight: "600" }}>
              Total Reports Generated
            </div>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "#f8f9fa",
              borderRadius: "8px",
              textAlign: "center",
              border: "2px solid #e9ecef",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#28a745",
                marginBottom: "0.5rem",
              }}
            >
              {userDetails.bookmarkedReports}
            </div>
            <div style={{ color: "#6c757d", fontWeight: "600" }}>
              Bookmarked Reports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
