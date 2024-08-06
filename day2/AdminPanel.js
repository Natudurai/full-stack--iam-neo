import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: "Jane Smith",
    totalUsers: 124,
    activeSessions: 8,
    recentActivities: [
      "Approved new user registrations",
      "Updated system settings",
      "Reviewed recent login attempts",
    ],
    systemStatus: {
      serverHealth: "Good",
      lastBackup: "2024-07-28 15:00",
    },
    userManagement: {
      pendingRegistrations: 3,
      flaggedUsers: 2,
    },
    notifications: [
      "New feature update available",
      "System maintenance scheduled for 2024-08-01",
    ],
  });

  const [newUser, setNewUser] = useState("");
  const [userToDelete, setUserToDelete] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newUser.trim() === "") return;

    setAdminInfo(prevInfo => ({
      ...prevInfo,
      totalUsers: prevInfo.totalUsers + 1,
      recentActivities: [...prevInfo.recentActivities, `Added new user: ${newUser}`],
    }));
    setNewUser("");
  };

  const handleDeleteUser = (event) => {
    event.preventDefault();
    if (userToDelete.trim() === "") return;

    setAdminInfo(prevInfo => ({
      ...prevInfo,
      totalUsers: prevInfo.totalUsers - 1,
      recentActivities: [...prevInfo.recentActivities, `Deleted user: ${userToDelete}`],
    }));
    setUserToDelete("");
  };

  return (
    <section className="admin-panel">
      <header className="admin-panel-header">
        <h2>Admin Panel</h2>
      </header>

      <div className="admin-info">
        <h3>Welcome, Admin!</h3>
        <div className="admin-stats">
          <div className="stat-item">
            <h4>Total Users</h4>
            <p>{adminInfo.totalUsers}</p>
          </div>
          <div className="stat-item">
            <h4>Active Sessions</h4>
            <p>{adminInfo.activeSessions}</p>
          </div>
        </div>
      </div>

      <div className="system-status">
        <h3>System Status</h3>
        <p><strong>Server Health:</strong> {adminInfo.systemStatus.serverHealth}</p>
        <p><strong>Last Backup:</strong> {adminInfo.systemStatus.lastBackup}</p>
      </div>

      <div className="user-management">
        <h3>User Management</h3>
        <p><strong>Pending Registrations:</strong> {adminInfo.userManagement.pendingRegistrations}</p>
        <p><strong>Flagged Users:</strong> {adminInfo.userManagement.flaggedUsers}</p>

        <form onSubmit={handleAddUser} className="user-management-form">
          <h4>Add New User</h4>
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user's name"
            required
          />
          <button type="submit" className="btn">Add </button>
        </form>

        <form onSubmit={handleDeleteUser} className="user-management-form">
          <h4>Delete User</h4>
          <input
            type="text"
            value={userToDelete}
            onChange={(e) => setUserToDelete(e.target.value)}
            placeholder="Enter user to delete"
            required
          />
          <button type="submit" className="btn">Delete</button>
        </form>
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          {adminInfo.notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {adminInfo.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      <footer className="admin-panel-footer">
        <Link to="/login">
          <button type="button" className="btn btn-logout">Log Out</button>
        </Link>
      </footer>
    </section>
  );
};

export default AdminPanel;
