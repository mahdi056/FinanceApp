import { Link } from 'react-router';
import { HiBars3 } from "react-icons/hi2";
import { Outlet } from 'react-router';
import { useContext } from 'react';
import FinanceContext from '../Provider/FinanceContext';



const Layout = () => {

  const {theme, toggleTheme} = useContext(FinanceContext);

 

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-200 min-h-screen p-4">
      
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden mb-4"><HiBars3></HiBars3></label>
        
      
        
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

          <div className="divider">Theme</div>
          <li className="flex flex-row items-center justify-between px-4">
            <span className="text-sm font-medium">
              {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </span>
            <input 
              type="checkbox" 
              className="toggle toggle-primary toggle-sm" 
              checked={theme === "dark"}
              onChange={toggleTheme} 
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;