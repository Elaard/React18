import React from 'react';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Routes';
import BatchingPage from './pages/BatchingPage';
import SuspensePage from './pages/SuspensePage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Default,
        element: <div>basic page</div>,
      },
      {
        path: Routes.Batching,
        element: <BatchingPage />,
      },
      {
        path: Routes.Suspense,
        element: <SuspensePage />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
