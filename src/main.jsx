import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CONTEXT
import { InventarioProvider } from './context/InventarioProvider'

// COMPONENTS
import Layout from './components/Layout'
import Index from './pages/Index'
import Inventario from './pages/Inventario'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/inventario',
        element: <Inventario />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InventarioProvider>
      <RouterProvider router={router} />
    </InventarioProvider>
  </React.StrictMode>,
)
