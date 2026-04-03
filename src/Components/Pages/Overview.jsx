import {  Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, LineChart } from 'recharts';
import FinanceContext from '../Provider/FinanceContext';
import { useContext } from 'react';

const Overview = () => {
  const { transactions } = useContext(FinanceContext);

  // --- Logic: Summary Cards ---
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;

  // --- Logic: Categorical Chart (Spending by Category) ---
  const chartData = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => {
      const existing = acc.find(item => item.name === curr.category);
      if (existing) existing.value += curr.amount;
      else acc.push({ name: curr.category, value: curr.amount });
      return acc;
    }, []);

  return (
    <div className="animate-fadeIn">
      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title text-gray-500 uppercase text-xs font-bold">Total Balance</div>
            <div className="stat-value text-primary">${balance.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title uppercase text-xs font-bold text-success">Income</div>
            <div className="stat-value text-success">${income.toLocaleString()}</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title uppercase text-xs font-bold text-error">Expenses</div>
            <div className="stat-value text-error">${expense.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* 2. Visualizations */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Time-Based Chart (Line) */}
        <div className="bg-base-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold mb-4 text-lg">Balance Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactions}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#570df8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Categorical Chart (Bar) */}
        <div className="bg-base-100 p-6 rounded-2xl shadow">
          <h3 className="font-bold mb-4 text-lg">Spending by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#570df8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;