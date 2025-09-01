import React, { useState } from "react";
import "./UserDashboard.css";

const UserSettings = () => {
  const [settings, setSettings] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    autoDownload: true,
    notifications: {
      newReport: true,
      reportTransferFailed: false,
    },
  });

  const handleInputChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationChange = (type) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  const handlePasswordChange = () => {
    if (settings.newPassword !== settings.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    setSettings((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  return (
    <div className="settings-page">
      <h2 className="page-title">⚙️ Settings</h2>

      {/* Personal Info */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Personal Information
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={settings.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={settings.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={settings.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      {/* Change Password */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Change Password
        </h3>

        <div style={{ marginBottom: "1rem" }}>
          <label className="form-label">Current Password</label>
          <input
            type="password"
            className="form-control"
            value={settings.currentPassword}
            onChange={(e) =>
              handleInputChange("currentPassword", e.target.value)
            }
            placeholder="Enter current password"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={settings.newPassword}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              value={settings.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handlePasswordChange}>
          Change Password
        </button>
      </div>

      {/* Report Settings */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Report Settings
        </h3>

        <div style={{ marginBottom: "1rem" }}>
          <label
            className="form-label"
            style={{ fontSize: "16px", fontWeight: "600" }}
          >
            Auto Download Reports After Generation
          </label>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <button
              className={`btn ${
                settings.autoDownload ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => handleInputChange("autoDownload", true)}
            >
              Yes
            </button>
            <button
              className={`btn ${
                !settings.autoDownload ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => handleInputChange("autoDownload", false)}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="activity-section">
        <h3
          style={{
            marginBottom: "1.5rem",
            color: "#28a745",
            borderBottom: "2px solid #28a745",
            paddingBottom: "0.5rem",
          }}
        >
          Email Notifications
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              id="newReport"
              checked={settings.notifications.newReport}
              onChange={() => handleNotificationChange("newReport")}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="newReport"
              className="form-label"
              style={{ margin: 0, cursor: "pointer" }}
            >
              New Report Generated
            </label>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              id="reportTransferFailed"
              checked={settings.notifications.reportTransferFailed}
              onChange={() => handleNotificationChange("reportTransferFailed")}
              style={{ width: "18px", height: "18px" }}
            />
            <label
              htmlFor="reportTransferFailed"
              className="form-label"
              style={{ margin: 0, cursor: "pointer" }}
            >
              Report Transfer Failed
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleSave}
          style={{ marginTop: "1rem" }}
        >
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
