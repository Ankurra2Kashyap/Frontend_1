import React from "react";
import "../../User.css";
export default function Filters() {
  return (
    <div className="d-flex gap-3 align-items-end">
      <div>
        <label>Range</label>
        <input className="form-control" placeholder="MM/YY ⇒ MM/YY" />
      </div>

      <div>
        <label>Category</label>
        <select className="form-select">
          <option>Category</option>
        </select>
      </div>

      <div>
        <label>Status</label>
        <select className="form-select">
          <option>Status</option>
        </select>
      </div>

      <div>
        <label>Search Report</label>
        <div className="d-flex">
          <input className="form-control" />
          <button className="search-btn btn">🔍</button>
        </div>
      </div>

      <button className="btn btn-light">Generate New</button>
      <button className="btn btn-light">Bookmark Selected ⭐</button>
    </div>
  );
}