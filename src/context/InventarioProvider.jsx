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



  return (
    <InventarioContext.Provider
      value={{
        modal,
        handleChangeModal,
        productos,
        setProductos,
        setModal,
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