import { useContext } from "react";
import FinanceContext from "../Provider/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);


  const expenseTransactions = transactions.filter(t => t.type === 'expense');
  
  const categoryTotals = expenseTransactions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) => 
    categoryTotals[a] > categoryTotals[b] ? a : b, "None"
  );


  const marchExpenses = transactions
    .filter(t => t.date.includes('2026-03') && t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);


  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const savingsRate = totalIncome > 0 
    ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Financial Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
     
        <div className="card bg-base-100 shadow-xl border-t-4 border-error">
          <div className="card-body">
            <h3 className="card-title text-gray-500 text-sm uppercase">Highest Spending Category</h3>
            <p className="text-3xl font-black text-error">{highestCategory}</p>
            <p className="text-sm opacity-70">
              You spent <strong>${categoryTotals[highestCategory] || 0}</strong> on {highestCategory} this period.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
          <div className="card-body">
            <h3 className="card-title text-gray-500 text-sm uppercase">Monthly Spend (March)</h3>
            <p className="text-3xl font-black text-primary">${marchExpenses}</p>
            <p className="text-sm opacity-70">Based on your latest recorded transactions.</p>
          </div>
        </div>

    
        <div className="card bg-base-100 shadow-xl border-t-4 border-success">
          <div className="card-body">
            <h3 className="card-title text-gray-500 text-sm uppercase">Savings Rate</h3>
            <p className="text-3xl font-black text-success">{savingsRate}%</p>
            <p className="text-sm opacity-70">
              {savingsRate > 20 ? "Great job! You are saving a healthy portion of your income." : "Consider reviewing your expenses to increase savings."}
            </p>
          </div>
        </div>
      </div>

     
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mt-8">
        <h3 className="font-bold text-blue-800 text-lg mb-2">Smart Observation</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-900">
          <li>Your total income is <strong>${totalIncome}</strong>.</li>
          <li>Your total expenses are <strong>${totalExpenses}</strong>.</li>
          {totalIncome < totalExpenses && (
            <li className="text-error font-bold">Warning: Your expenses exceed your income!</li>
          )}
          <li>Most of your transactions are related to <strong>{highestCategory}</strong>.</li>
        </ul>
      </div>
    </div>
  );
};

export default Insights;