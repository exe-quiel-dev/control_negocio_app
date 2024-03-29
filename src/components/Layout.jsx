import { Link, Outlet, useLocation } from "react-router-dom"
// HOOKS
import useInventario from "../hooks/useInventario";
// COMPONENTS
import Modal from "react-modal";
import FormularioNuevoProducto from "./FormularioNuevoProducto";
import FormulanioNuevoProveedor from "./FormularioNuevoProveedor";
import FormularioNuevoPedido from "./FormularioNuevoPedido";


const Layout = () => {
  const { modal } = useInventario();
  let location = useLocation();

  const pathname = () => {
    let path = location.pathname;
    if (path === '/') {
      return 'Inicio'
    }
    if (path.includes('producto')) {
      return 'Editar Producto'
    }

    if (path.includes('proveedor')) {
      return 'Editar proveedor'
    } 
    if (path.includes('pedido')) {
      return 'Editar Pedido'
    } else {
      path = path[0] == '/' ? path.substring(1) : path;
      return path
    }
  }
  pathname()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(15 ,23 ,42)',
      width: '75%',
      padding: '16px'
    },
  };
  Modal.setAppElement('#root');

  const renderModal = () => {
    if (modal === 'inventario') {
      return (
        <Modal
          isOpen={true}
          style={customStyles}
        >
          <FormularioNuevoProducto />
        </Modal>
      )
    }
    if (modal === 'proveedor') {
      return (
        <Modal
          isOpen={true}
          style={customStyles}
        >
          <FormulanioNuevoProveedor />
        </Modal>
      )
    }
    if (modal === 'pedido') {
      return (
        <Modal
          isOpen={true}
          style={customStyles}
        >
          <FormularioNuevoPedido />
        </Modal>
      )
    }
  }

  return (
    <>
      <nav className="p-2 bg-emerald-400 text-white shadow">
        <Link to='/'> <h1 className="font-black text-3xl text-center">CONTROL NEGOCIO | BY EXE DEV</h1> </Link>
        <h2 className="text-xl uppercase font-semibold text-center">{pathname()}</h2>
      </nav>
      <Outlet />

      {modal && renderModal()}
    </>
  )
}

export default Layout