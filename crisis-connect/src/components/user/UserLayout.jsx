// src/components/UserLayout.js
import { Outlet, Link } from 'react-router-dom';
import UserHeader from './UserHeader/UserHeader';
import CrisisDashboard from '../../pages/CrisisDashboard';

const UserLayout = () => {
  return (
    <div>

        <UserHeader />
        <CrisisDashboard />
        {/* Render the user route here */}

      <Outlet />
    </div>
  );
};

export default UserLayout;
