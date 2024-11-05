import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement:<p>Error</p>,
      children: [
        {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
            {
                path: '/category/:category',
                element: <ProductCards />,
                loader: () => fetch('../product.json'),
                },
        ]
        },
        {
            path: '/statistics',
            element: <Statistics />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                },
                
      ],
    },
  ]);

  export default routes