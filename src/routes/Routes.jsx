import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement:<p>Error</p>,
      children: [
        {
        path: '/',
        element: <Home />
        },
        {
            path: '/statistics',
            element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
                },
      ],
    },
  ]);

  export default routes