/* eslint-disable react/prop-types */
import { createContext } from "react";
//
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const InventarioContext = createContext();

// const productoVacio = {
//   nombre: '',
//   cantidad: '',
//   precio: '',
//   descripcion: '',
// }

const InventarioProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  // const [nombre, setNombre] = useState('');
  // const [cantidad, setCantidad] = useState(0);
  // const [precio, setPrecio] = useState(0);
  // const [descripcion, setDescripcion] = useState('');
  // const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);



  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

console.log(productos)
 

  return (
    <InventarioContext.Provider
      value={{
        modal,
        handleChangeModal,
        handleSubmit,
        // handleSubmitNuevoProd,
        // setNombre,
        // setCantidad,
        // setDescripcion,
        // setPrecio,
        // nombre,
        // cantidad,
        // descripcion,
        // precio,
        productos,
        setProductos,
        setModal
      }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export {
  InventarioProvider
}

export default InventarioContext