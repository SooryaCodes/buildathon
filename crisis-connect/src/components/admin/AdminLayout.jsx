// src/components/AdminLayout.js
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
            <li><Link to="/admin/settings">Admin Settings</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Render the admin route here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;