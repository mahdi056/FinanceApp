import { useContext } from "react";
import FinanceContext from "../Provider/FinanceContext";


const Transactions = () => {
  const { role, transactions } = useContext(FinanceContext);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold">Financial History</h2>
        
    
        {role === 'admin' ? (
          <button className="btn btn-primary">+ Add New Transaction</button>
        ) : (
          <div className="text-black badge badge-outline">All Transactions</div>
        )}
      </div>

      
      <div className="bg-base-100 rounded-xl shadow overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            
              {role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td className={t.type === 'income' ? 'text-success' : 'text-error'}>
                  ${t.amount}
                </td>
                
                {role === 'admin' && (
                  <td>
                    <button className="btn btn-ghost btn-xs text-info">Edit</button>
                    <button className="btn btn-ghost btn-xs text-error">Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Transactions;