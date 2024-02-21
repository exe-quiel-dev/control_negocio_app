/* eslint-disable react/prop-types */
import { createContext } from "react";
// HOOKS
import { useState } from "react";

const ProveedorContext = createContext();

const ProveedorProvider = ({ children }) => {
  const proveedoresLS = JSON.parse(localStorage.getItem('productos')) ?? [];

  const [provs, setProvs] = useState(proveedoresLS);

  return (
    <ProveedorContext.Provider
      value={{
        provs,
        setProvs
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