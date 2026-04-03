import { Link } from 'react-router';

import { Outlet } from 'react-router';
import FinanceContext from '../Provider/FinanceContext';
import { useContext } from 'react';

const Layout = () => {
  const { role } = useContext(FinanceContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen p-8">
        {/* Navbar for Mobile */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden mb-4">Open Menu</label>
        
        {/* Page Content Rendered Here */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Financial Dashboard</h1>
          <div className="badge badge-secondary uppercase">{role} Mode</div>
        </header>
        
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r">
          <li className="menu-title text-lg font-bold text-primary mb-4">FinanceApp</li>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/insights">Insights</Link></li>
          <div className="divider">Settings</div>
          <li><Link to="/roles">Role Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;