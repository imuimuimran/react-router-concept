import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import App2 from './App2.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import NewUsers from './components/NewUsers/NewUsers.jsx';
import NewUsers2 from './components/NewUsers/NewUsers2.jsx';
import UserDetail from './components/UserDetail/UserDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    // You can handle the error here, e.g., return an empty array or re-throw the error
    return []; 
  }
};
const newUserPromise = fetchUsers();

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops',Component:Laptops},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
        Component: Users
      },
      {
        path: 'new-users',
        element: <Suspense fallback='New Users Data...'>
          <NewUsers userPromise={userPromise}></NewUsers>
        </Suspense>
      },
      {
        path: 'new-users2',
        element: <Suspense fallback= 'New Users Data 2'>
          <NewUsers2 newUserPromise = {newUserPromise}></NewUsers2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetail
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        Component: PostDetail,
      },
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
  },
  {
    path: '*',
    element: <h3>Not Found: This is 404 issue</h3>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
