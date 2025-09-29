import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import App2 from './App2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to React Router</div>,
  },
  {path: "/about",
    element: <div>This is about page</div>
  },
  {
    path: "/service",
    element: <div>This is service page</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "app2",
    element: <App2></App2>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
