import { Outlet, useLocation } from "react-router-dom"
// HOOKS
import useInventario from "../hooks/useInventario";
// COMPONENTS
import Modal from "react-modal";
import FormularioNuevoProducto from "./FormularioNuevoProducto";


const Layout = () => {
  const { modal } = useInventario();
  let location = useLocation();

  const eliminarSlash = () => {
    let path = location.pathname;
    if (path === '/') {
      return 'Inicio'
    } else {
      if (path.includes('producto')) {
        return 'Editar Producto'
      } else {
        path = path[0] == '/' ? path.substring(1) : path;
        return path
      }
    }
  }
  eliminarSlash()

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

  return (
    <>
      <nav className="p-2 bg-emerald-400 text-white shadow">
        <h1 className="font-black text-3xl text-center">STOCK APP | BY EXE DEV</h1>
        <h2 className="text-xl uppercase font-semibold text-center">{eliminarSlash()}</h2>
      </nav>
      <Outlet />

      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <FormularioNuevoProducto />
        </Modal>
      )}
    </>
  )
}

export default Layout