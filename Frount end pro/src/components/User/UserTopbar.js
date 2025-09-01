import React from 'react';
import sclogo from "../../Assests/sclogo.jpeg";

const UserTopbar = ({ username = "Username" }) => {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "10px 20px", 
        backgroundColor: "#28a745", 
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      {/* Left Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img 
            src={sclogo} 
            alt="Standard Chartered Logo" 
            style={{ 
              maxHeight: "45px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              outline: "none",
              border: "none",
              boxShadow: "none",
              background: "transparent"
            }}
            draggable="false"
          />
        </div>
      </div>

      {/* Right User Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ fontSize: "22px" }}>👤</div>
        <span style={{ fontWeight: "600", color: "#fff" }}>{username}</span>
        <button 
          style={{ 
            padding: "6px 14px", 
            backgroundColor: "#fff", 
            color: "#28a745", 
            border: "none", 
            borderRadius: "6px", 
            cursor: "pointer", 
            fontWeight: "600", 
            transition: "0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#e6ffe6";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserTopbar;
