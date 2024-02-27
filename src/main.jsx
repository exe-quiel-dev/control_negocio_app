import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CONTEXT
import { InventarioProvider } from './context/InventarioProvider'
import { ProveedorProvider } from './context/ProveedorProvider'
import { PedidosProvider } from './context/PedidosProvider'
// COMPONENTS
import Layout from './components/Layout'
// PAGES
import Index from './pages/Index'
import Inventario from './pages/Inventario'
import Proveedores from './pages/Proveedores'
import EditarProducto, { loader as editarProductoLoader } from './pages/EditarProducto'
import EditarProveedor, { loader as editarProveedorLoader } from './pages/EditarProveedor'
import Pedidos from './pages/Pedidos'

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
        element: <Pedidos />
      },
      {
        path: '/producto/:productoId/editar',
        loader: editarProductoLoader,
        element: <EditarProducto />
      },
      {
        path: '/proveedor/:proveedorId/editar',
        loader: editarProveedorLoader,
        element: <EditarProveedor />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InventarioProvider>
      <ProveedorProvider>
        <PedidosProvider>
          <RouterProvider router={router} />
        </PedidosProvider>
      </ProveedorProvider>
    </InventarioProvider>
  </React.StrictMode>,
)
