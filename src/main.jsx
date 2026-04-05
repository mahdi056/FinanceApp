import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout/Layout';
import Overview from './Components/Pages/Overview';
import { FinanceProvider } from './Components/Provider/FinanceContext';
import Role from './Components/Pages/Role';
import Transactions from './Components/Pages/Transactions';
import Insights from './Components/Pages/Insights';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index: true,
        element: <Overview></Overview>
      },
      {
        path: '/roles',
        element: <Role></Role>
      },
      {
        path: '/transactions',
        element: <Transactions></Transactions>
      },
      {
        path: '/insights',
        element: <Insights></Insights>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinanceProvider>
      <RouterProvider router={router} />,

    </FinanceProvider>
  </StrictMode>,
)
