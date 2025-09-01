import React from "react";
import UserTopbar from "./UserTopbar";
import UserSidebar from "./UserSidebar";
import "./UserDashboard.css";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <UserTopbar />
      <div className="d-flex">
        <UserSidebar />
        <main className="flex-grow-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
