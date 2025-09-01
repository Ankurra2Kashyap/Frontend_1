import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import "../styles/dashboard.css";
export default function AdminLayout() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-section">
          <img className="logo" src="\sclogoshiva.png" alt="Standard Chartered" />
        </div>

        <div className="menu-section">
          <ul className="sidebar-nav">
            <li>
              <span className="icon">🏠</span>
              <span>Dashboard</span>
            </li>
            <li>
              <span className="icon">👥</span>
              <span>User Management</span>
            </li>
            <li>
              <span className="icon">👤</span>
              <span>AD Group Access</span>
            </li>
            <li className="active">
              <span className="icon">📄</span>
              <span>Report Access</span>
            </li>
            <li>
              <span className="icon">⚙️</span>
              <span>Settings</span>
            </li>
            <li className="mt-auto">
              <span className="icon">🧾</span>
              <span>Account</span>
            </li>
            <li>
              <span className="icon">❓</span>
              <span>Help</span>
            </li>
          </ul>
        </div>
      </aside>

      <main className="main-content">
        <HeaderBar />
        <div className="main-scroll">
          <Outlet />
        </div>
      </main>
    </div>
  );
}