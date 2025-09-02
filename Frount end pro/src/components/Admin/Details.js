import React, { useState } from "react";
import axios from "axios";

export default function Details({ data, setData }) {
  const handleEdit = (index) => {
    const user = data[index];

    const newFirstName = prompt("Enter new First Name:", user.firstName || "");
    const newLastName = prompt("Enter new Last Name:", user.lastName || "");
    const newEmail = prompt("Enter new Email:", user.email);
    const newStatus = prompt("Enter new Status:", user.status);
    const newAdGroup = prompt("Enter new Department (Ad Group):", user.adGroup);

    if (
      newFirstName &&
      newLastName &&
      newEmail &&
      newStatus &&
      newAdGroup
    ) {
      const updatedUser = {
        ...user,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        status: newStatus,
        adGroup: newAdGroup,
      };

      // Update UI
      const updatedData = [...data];
      updatedData[index] = updatedUser;
      setData(updatedData);

      // Update backend
      axios
        .put(`http://localhost:8080/users/${user.email}`, {
          firstName: newFirstName,
          lastName: newLastName,
          email: newEmail,
          status: newStatus,
          adGroup: newAdGroup, // department
        })
        .then(() => alert("User updated successfully"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Department (Ad Group)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.adGroup}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
