import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../providers/RootLayout/RootLayout';
import {
  CalculatorPage,
  CreateProductPage,
  ProductsPage,
  UpdateProductPage,
  WorkshopsPage,
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/workshops',
        element: <WorkshopsPage />,
      },
      {
        path: 'product/:id',
        element: <UpdateProductPage />,
      },
      {
        path: '/product/create',
        element: <CreateProductPage />,
      },
      {
        path: '/calculator',
        element: <CalculatorPage />,
      },
    ],
  },
]);
