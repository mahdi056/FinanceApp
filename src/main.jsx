import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout/Layout';
import Overview from './Components/Pages/Overview';
import { FinanceProvider } from './Components/Provider/FinanceContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index: true,
        element: <Overview></Overview>
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
