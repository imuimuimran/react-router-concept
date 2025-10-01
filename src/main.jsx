import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import App2 from './App2.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Laptops from './components/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component:Laptops},
    ]
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
  </StrictMode>
)
