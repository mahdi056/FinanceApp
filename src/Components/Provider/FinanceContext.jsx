import { createContext, useState } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [role, setRole] = useState('admin'); 
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-05", amount: 120, category: "Food", type: "expense" },
    // ... add more mock data here
  ]);

  return (
    <FinanceContext.Provider value={{ role, setRole, transactions, setTransactions }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceContext;