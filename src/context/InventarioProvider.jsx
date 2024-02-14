/* eslint-disable react/prop-types */
import { createContext } from "react";

const InventarioContext = createContext();

const InventarioProvider = ({children}) => {

const prueba = () => {
  console.log('hola')
}

  return(
    <InventarioContext.Provider
      value={{
        prueba
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