import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main.jsx'
import Home from './Component/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import AuthProvider from './Component/AuthProvider'
import Order from './Component/Order'
import Private from './Component/Private'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/order",
        element: <Private><Order></Order></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
