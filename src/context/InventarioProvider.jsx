/* eslint-disable react/prop-types */
import { createContext } from "react";
//
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const InventarioContext = createContext();

const InventarioProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);


console.log(producto)
  const handleSubmit = e => {
    e.preventDefault()
    console.log('enviando info')
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleSubmitNuevoProd = e => {
    e.preventDefault()
    setProductos([...productos, producto])
  }

  return(
    <InventarioContext.Provider
      value={{
        modal,
        handleChangeModal,
        handleSubmit,
        handleSubmitNuevoProd,
        setProducto
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