import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Dashboard, ProtectedRoute, RecoverDocument, NotFound404 } from "./pages";

//Provieder

import { AuthProvider } from './context/Auth.context';
import { UserProvider } from './context/User.context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/recover/:id",
    element: <RecoverDocument />
  },
  {
    path: "*",
    element: <NotFound404 />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
