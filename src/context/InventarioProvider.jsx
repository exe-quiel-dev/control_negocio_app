/* eslint-disable react/prop-types */
import { createContext } from "react";
//HOOKS
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const InventarioContext = createContext();

const InventarioProvider = ({ children }) => {

  const productosLS = JSON.parse(localStorage.getItem('productos')) ?? [];

  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState(productosLS);

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const generarId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return random + fecha
  }

  const formatearDinero = precio => {
    return precio.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <InventarioContext.Provider
      value={{
        modal,
        handleChangeModal,
        productos,
        setProductos,
        setModal,
        generarId,
        formatearDinero
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