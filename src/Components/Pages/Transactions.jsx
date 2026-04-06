import { useContext, useState } from "react";
import FinanceContext from "../Provider/FinanceContext";

const Transactions = () => {
  const { role, transactions } = useContext(FinanceContext);


  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); 

 
  const displayedTransactions = transactions.filter((t) => {
    const matchesSearch = t.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center p-6 rounded-xl shadow-sm gap-4">
        <h2 className="text-xl font-bold">Financial History</h2>
        
        <div className="flex gap-2">
        
          <input
            type="text"
            placeholder="Search category..."
            className="input input-bordered input-sm w-full max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

         
          <select 
            className="select select-bordered select-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {role === 'admin' ? (
          <button className="btn btn-primary btn-sm">+ Add New</button>
        ) : (
          <div className="badge badge-outline">Transactions</div>
        )}
      </div>

      <div className="bg-base-100 rounded-xl shadow overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              {role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
     
            {displayedTransactions.length > 0 ? (
              displayedTransactions.map((t) => (
                <tr key={t.id} className="hover">
                  <td>{t.date}</td>
                  <td className="font-semibold">{t.category}</td>
                  <td>
                    <span className={`badge badge-sm ${t.type === 'income' ? 'badge-success' : 'badge-error'}`}>
                      {t.type}
                    </span>
                  </td>
                  <td className={t.type === 'income' ? 'text-success' : 'text-error'}>
                    ${t.amount}
                  </td>
                  
                  {role === 'admin' && (
                    <td className="flex gap-2">
                      <button className="btn btn-ghost btn-xs text-info">Edit</button>
                      <button className="btn btn-ghost btn-xs text-error">Delete</button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
            
              <tr>
                <td colSpan={role === 'admin' ? 5 : 4} className="text-center py-10 text-gray-400">
                  No matches found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;