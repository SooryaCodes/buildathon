import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import UserLayout from './components/user/UserLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import Map from './components/Map';
import Mapbox from 'react-map-gl/dist/esm/mapbox/mapbox';
import CrisisDashboard from './pages/CrisisDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <div className='font-Sora'>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="settings" element={<h2>Admin Settings</h2>} />
        </Route>

        {/* User Routes */}
        <Route path="/" element={<UserLayout></UserLayout>}>
          <Route index element={<Home />} />
          <Route path="crisis-view" element={<CrisisDashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* Default Routes */}
      </Routes>
    </div>
  )
}

export default App
