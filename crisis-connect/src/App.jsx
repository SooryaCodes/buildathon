import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import UserLayout from './components/user/UserLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import Map from './components/Map';


function App() {

  return (
    <div>
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
          <Route path="/" element={<Map  />} />
        </Routes>
    </div>
  )
}

export default App
