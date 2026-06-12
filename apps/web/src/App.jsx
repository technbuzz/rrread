import React from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree })

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
