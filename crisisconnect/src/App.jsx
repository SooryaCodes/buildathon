// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import UserLayout from './components/user/UserLayout';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="settings" element={<h2>Admin Settings</h2>} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="profile" element={<h2>User Profile</h2>} />
        </Route>

        {/* Default Routes */}
        <Route path="/" element={<h2>Home Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
