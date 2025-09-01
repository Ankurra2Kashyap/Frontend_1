import React from "react";
import "../User.css";
export default function Sidebar() {
  return (
    <div className="sidebar-panel p-3" style={{ width: "220px" }}>
      <h6>Quick Access</h6>
      <button className="quick-btn">All Reports</button>
      <button className="quick-btn">Settings</button>
      <button className="quick-btn">Recent</button>
      <button className="quick-btn">Generate New</button>

      <div className="mt-4">
        <h6>Categories</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="c1" />
          <label htmlFor="c1" className="form-check-label">AML Reports</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="c2" />
          <label htmlFor="c2" className="form-check-label">Risk Reports</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="c3" />
          <label htmlFor="c3" className="form-check-label">Customer Reports</label>
        </div>
      </div>
    </div>
  );
}