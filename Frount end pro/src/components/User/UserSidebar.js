import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UserDashboard.css';

const UserSidebar = () => {
  const location = useLocation();

  const navItems = [
    { key: '/UserDashboard', label: 'Dashboard', icon: '📊' },
    { key: '/AllReports', label: 'All Reports', icon: '📄' },
    { key: '/Bookmarks', label: 'Bookmarks', icon: '🔖' },
    { key: '/UserSettings', label: 'Settings', icon: '⚙️' },
    { key: '/UserProfile', label: 'Profile', icon: '👤' },
    { key: '/Help', label: 'Help', icon: '❓' }
  ];

  return (
    <div className="sidebar">
      <div style={{ padding: '1rem', color: 'var(--brand-green-dark)', fontWeight: '600' }}>
        Quick Access
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.key}
            className={`nav-item ${location.pathname === item.key ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default UserSidebar;
