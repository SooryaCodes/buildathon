// src/components/UserLayout.js
import { Outlet, Link } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/user/dashboard">User Dashboard</Link></li>
            <li><Link to="/user/profile">User Profile</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Render the user route here */}
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
