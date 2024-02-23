/* eslint-disable react/prop-types */
import { createContext } from "react";
// HOOKS
import { useState } from "react";
import useInventario from "../hooks/useInventario";

const ProveedorContext = createContext();

const ProveedorProvider = ({ children }) => {
  const proveedoresLS = JSON.parse(localStorage.getItem('productos')) ?? [];

  const [provs, setProvs] = useState(proveedoresLS);

  const { setModal, modal } = useInventario();

  const handleChangeModalProveedor = () => {
    setModal('proveedor')
    if(modal === 'proveedor') {
      setModal(null)
    }
  }

  return (
    <ProveedorContext.Provider
      value={{
        provs,
        setProvs,
        handleChangeModalProveedor
      }}
    >
      {children}
    </ProveedorContext.Provider>
  )
}

export {
  ProveedorProvider
}

export default ProveedorContext