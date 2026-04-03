import { useContext } from "react";
import FinanceContext from "../Provider/FinanceContext";



const Role = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">Switch User Role</h2>
          <p className="text-sm text-gray-500 mb-6">
            Changing your role will instantly update the interface permissions across the dashboard.
          </p>

          <div className="space-y-4">
            {/* Admin Option */}
            <div 
              className={`form-control p-4 border rounded-xl cursor-pointer transition-all ${role === 'admin' ? 'border-primary bg-primary/5' : 'border-base-300'}`}
              onClick={() => setRole('admin')}
            >
              <label className="label cursor-pointer justify-start gap-4">
                <input 
                  type="radio" 
                  name="role-radio" 
                  className="radio radio-primary" 
                  checked={role === 'admin'} 
                  readOnly 
                />
                <div>
                  <span className="label-text font-bold text-lg block">Administrator</span>
                  <span className="label-text-alt text-gray-500">Can view, add, and edit all transactions.</span>
                </div>
              </label>
            </div>

            {/* User Option */}
            <div 
              className={`form-control p-4 border rounded-xl cursor-pointer transition-all ${role === 'user' ? 'border-secondary bg-secondary/5' : 'border-base-300'}`}
              onClick={() => setRole('User')}
            >
              <label className="label cursor-pointer justify-start gap-4">
                <input 
                  type="radio" 
                  name="role-radio" 
                  className="radio radio-secondary" 
                  checked={role === 'User'} 
                  readOnly 
                />
                <div>
                  <span className="label-text font-bold text-lg block">User</span>
                  <span className="label-text-alt text-gray-500">Read-only access to charts and data.</span>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-8 p-4 bg-base-200 rounded-lg flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full animate-pulse ${role === 'admin' ? 'bg-primary' : 'bg-secondary'}`}></div>
            <p className="text-sm font-medium">Currently active as: <span className="uppercase">{role}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
