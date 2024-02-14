/* eslint-disable react/prop-types */
import { createContext } from "react";
//
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const InventarioContext = createContext();

const InventarioProvider = ({children}) => {
  const [modal, setModal] = useState(false);


  const handleSubmit = e => {
    e.preventDefault()
    console.log('enviando info')
  }

  return(
    <InventarioContext.Provider
      value={{
        modal,
        setModal,
        handleSubmit
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