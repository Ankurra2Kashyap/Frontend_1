import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">Total Reports</div>
          <div className="stat-number">24</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">Bookmarked Reports</div>
          <div className="stat-number">8</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">Recent Activity</div>
          <div className="stat-number">3</div>
        </div>
      </div>

      <div className="activity-section">
        <h3 className="section-title">📋 Latest Report Notifications</h3>
        <div className="activity-list">
          <div style={{ color: '#6c757d', padding: '1rem 0' }}>
            No new notifications.
          </div>
        </div>
      </div>

      <div className="activity-section">
        <h3 className="section-title">📁 Recently Accessed Reports</h3>
        <div className="activity-list">
          <div style={{ color: '#6c757d', padding: '1rem 0' }}>
            No recent reports opened.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
