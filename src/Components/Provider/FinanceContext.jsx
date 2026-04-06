import { createContext, useEffect, useState } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [role, setRole] = useState('user'); 
  const [theme, setTheme] = useState('light');
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-05", amount: 120, category: "Food", type: "expense" },
    { id: 3, date: "2026-03-07", amount: 1200, category: "Bill", type: "expense" },
    { id: 4, date: "2026-03-10", amount: 1020, category: "Food", type: "expense" },
    { id: 5, date: "2026-03-12", amount: 320, category: "Tax", type: "expense" },
    
  ]);

useEffect(()=> {
  document.documentElement.setAttribute('data-theme', theme)
},[theme]);

const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
}


  return (
    <FinanceContext.Provider value={{ role, setRole, transactions, setTransactions, theme, toggleTheme }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceContext;