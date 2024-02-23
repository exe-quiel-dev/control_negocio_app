import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CONTEXT
import { InventarioProvider } from './context/InventarioProvider'
import { ProveedorProvider } from './context/ProveedorProvider'

// COMPONENTS
import Layout from './components/Layout'
// PAGES
import Index from './pages/Index'
import Inventario from './pages/Inventario'
import Proveedores from './pages/Proveedores'
import EditarProducto, {loader as editarProductoLoader} from './pages/EditarProducto'
import EditarProveedor from './pages/EditarProveedor'

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
      },
      {
        path: '/proveedores',
        element: <Proveedores />
      },
      {
        path: '/pedidos',
        element: <Proveedores />
      },
      {
        path: '/producto/:productoId/editar',
        loader: editarProductoLoader,
        element: <EditarProducto />
      },
      {
        path: '/proveedor/:proveedorId/editar',
        // loader: editarProveedorLoader,
        element: <EditarProveedor />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InventarioProvider>
      <ProveedorProvider>
      <RouterProvider router={router} />
      </ProveedorProvider>
    </InventarioProvider>
  </React.StrictMode>,
)
