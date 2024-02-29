/* eslint-disable react/prop-types */
import { createContext } from "react";
//HOOKS
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const InventarioContext = createContext();

const InventarioProvider = ({ children }) => {

  const productosLS = JSON.parse(localStorage.getItem('productos')) ?? [];

  const [modal, setModal] = useState(null);
  const [productos, setProductos] = useState(productosLS);

  const handleChangeModalInventario = () => {
    setModal('inventario')
    if(modal === 'inventario') {
      setModal(null)
    }
  }

  const generarId = () => {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return random + fecha
  }

  const formatearDinero = num => {
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <InventarioContext.Provider
      value={{
        modal,
        handleChangeModalInventario,
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