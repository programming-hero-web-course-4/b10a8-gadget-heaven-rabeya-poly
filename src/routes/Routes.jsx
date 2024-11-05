import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import BrandDetails from "../pages/BrandDetails";
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
                path: '/',
                element: <ProductCards />,
                loader: () => fetch('../product.json'),
                },
                {
                    path: '/category/:category',
                    element: <ProductCards />,
                    loader: () => fetch('../product.json'),
                    },
        ],
        },
        {
            path: '/statistics',
            element: <Statistics />,
            loader: () => fetch('../product.json'),    
        },
            {
                path: '/dashboard',
                element: <Dashboard />,
                loader: () => fetch('../product.json'),
                },
                {
                    path: '/statistics/:id',
                    element: <BrandDetails />,
                    loader: () => fetch('../product.json'),
                    
                    },
                
      ],
    },
  ]);

  export default routes