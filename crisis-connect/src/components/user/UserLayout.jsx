// src/components/UserLayout.js
import { Outlet, Link } from 'react-router-dom';
import UserHeader from './UserHeader/UserHeader';
import CrisisDashboard from '../../pages/CrisisDashboard';

const UserLayout = ({children}) => {
  return (
    <div>

        <UserHeader />
        
        {/* Render the user route here */}
        {/* {children} */}

      <Outlet />
    </div>
  );
};

export default UserLayout;
