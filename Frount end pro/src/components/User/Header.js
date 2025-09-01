import React from "react";

import "../../User.css";
export default function Header() {
  return (
    <div className="top-banner d-flex justify-content-between align-items-center p-3">
      <img
            src="/logo.png"
            style={{ height: "20px", marginRight: "10px" }}
          />
      <h5 className="mb-0">REPORTS - USER</h5>
      <div className="d-flex align-items-center gap-3">
        <span>Username</span>
        <button className="logout-btn btn btn-sm">Logout</button>
      </div>
    </div>
  );
}