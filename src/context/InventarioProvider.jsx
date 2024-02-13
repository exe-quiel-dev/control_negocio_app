/* eslint-disable react/prop-types */
import { createContext } from "react";

const InventarioContext = createContext();

const InventarioProvider = ({children}) => {

  return(
    <InventarioContext.Provider
      value={{
        
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