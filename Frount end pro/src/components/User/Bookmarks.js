import React from 'react';
import './UserDashboard.css';

const Bookmarks = ({ reports = [], setReports = () => {} }) => {
  const toggleBookmark = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id
          ? { ...report, bookmarked: !report.bookmarked }
          : report
      )
    );
  };

  const bookmarkedReports = reports.filter((report) => report.bookmarked);

  return (
    <div className="bookmarks-page">
      <h2 className="page-title">⭐ Bookmarked Reports</h2>

      {bookmarkedReports.length === 0 ? (
        <div style={{ color: '#6c757d', padding: '2rem' }}>
          You haven’t bookmarked any reports yet.
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Report Name</th>
                <th>Category</th>
                <th>File Type</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {bookmarkedReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.category}</td>
                  <td>{report.fileType}</td>
                  <td>
                    <button
                      className="bookmark-star active"
                      onClick={() => toggleBookmark(report.id)}
                    >
                      ⭐
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
