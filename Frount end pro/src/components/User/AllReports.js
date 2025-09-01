import React, { useState } from 'react';
import './UserDashboard.css';

const AllReports = ({ reports = [], setReports = () => {} }) => {
  const [filters, setFilters] = useState({ dateRange: '', category: '', search: '' });

  const toggleBookmark = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id
          ? { ...report, bookmarked: !report.bookmarked }
          : report
      )
    );
  };

  const deleteReport = (id) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setReports(reports.filter((report) => report.id !== id));
    }
  };

  const filteredReports = reports.filter((report) => {
    if (filters.category && report.category !== filters.category) return false;
    if (
      filters.search &&
      !report.name.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="all-reports-page">
      <h2 className="page-title">All Reports</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-group">
          <label className="form-label">Date Range</label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/YY → MM/YY"
            value={filters.dateRange}
            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="AML Reports">AML Reports</option>
            <option value="Risk Reports">Risk Reports</option>
            <option value="Customer Reports">Customer Reports</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="form-label">Search Report</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search reports..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label className="form-label" style={{ opacity: 0 }}>
            Actions
          </label>
          <button className="generate-new-btn">Generate New</button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Report Name</th>
              <th>Category</th>
              <th>File Type</th>
              <th>View/Download</th>
              <th>Delete</th>
              <th>Bookmark</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#6c757d',
                  }}
                >
                  No reports match your filters.
                </td>
              </tr>
            ) : (
              filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.category}</td>
                  <td>{report.fileType}</td>
                  <td>
                    <div className="action-icons">
                      <button className="icon-btn" title="View">
                        👁️
                      </button>
                      <button className="icon-btn" title="Download">
                        ⬇️
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="icon-btn delete"
                      title="Delete"
                      onClick={() => deleteReport(report.id)}
                    >
                      🗑️
                    </button>
                  </td>
                  <td>
                    <button
                      className={`bookmark-star ${
                        report.bookmarked ? 'active' : ''
                      }`}
                      title={
                        report.bookmarked
                          ? 'Remove Bookmark'
                          : 'Add Bookmark'
                      }
                      onClick={() => toggleBookmark(report.id)}
                    >
                      ⭐
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReports;
