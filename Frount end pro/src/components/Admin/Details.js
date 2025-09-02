import React from "react";
import axios from "axios";

export default function Details({ data, setData }) {
  const handleEdit = (user) => {
    const fullName = prompt("Enter full name", `${user.firstName} ${user.lastName}`);
    const newEmail = prompt("Enter email", user.email);
    const newStatus = prompt("Enter status", user.status);
    const newAdGroup = prompt("Enter department/adGroup", user.adGroup);

    if (fullName && newEmail && newStatus && newAdGroup) {
      const [newFirstName, ...rest] = fullName.split(" ");
      const newLastName = rest.join(" ");

      const updateUser = {
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        status: newStatus,
        adGroup: newAdGroup,
      };

      axios
        .put(`http://localhost:8080/users/${user.email}`, updateUser)
        .then(() => {
          alert("User updated successfully");
          setData((prev) =>
            prev.map((u) => (u.email === user.email ? updateUser : u))
          );
        })
        .catch((err) => console.error(err));
    }
  };

  const handleDelete = (userEmail) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:8080/users/${userEmail}`)
        .then(() => {
          alert("User deleted successfully");
          setData((prev) => prev.filter((u) => u.email !== userEmail));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="details-container">
      {/* Top Bar */}
      <div className="top-bar">User Management System</div>

      <div className="content-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h2>User Details</h2>
          <table className="details-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Department (AdGroup)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={
                        user.status === "Active" ? "status-active" : "status-inactive"
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.adGroup}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
