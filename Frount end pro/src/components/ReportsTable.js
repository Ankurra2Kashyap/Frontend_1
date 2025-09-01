import React from "react";
import "../User.css";
export default function ReportsTable({ rows = [] }) {
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th style={{width: 80}}>ID</th>
            <th>Report Name</th>
            <th style={{width: 160}}>Category</th>
            <th style={{width: 120}}>File Type</th>
            <th style={{width: 140}}>Status</th>
            <th style={{width: 140}}>View/Download</th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center text-muted py-4">
                No reports match your filters.
              </td>
            </tr>
          )}

          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.category}</td>
              <td>PDF</td>
              <td>
                <span
                  className={
                    "badge rounded-pill badge-status " +
                    (r.status === "Generated"
                      ? "text-bg-success"
                      : r.status === "Queued"
                      ? "text-bg-warning"
                      : "text-bg-danger")
                  }
                >
                  {r.status}
                </span>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-light border btn-sm">
                    <i className="bi bi-eye" title="View" />
                  </button>
                  <button className="btn btn-light border btn-sm">
                    <i className="bi bi-download" title="Download" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}