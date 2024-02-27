/* eslint-disable react/prop-types */
import { createContext } from "react";
// HOOKS 
import { useState } from "react";
import useInventario from "../hooks/useInventario";

const PedidosContext = createContext();

const PedidosProvider = ({children}) => {
  const pedidosLS = JSON.parse(localStorage.getItem('pedidos')) ?? [];
  const [pedidos, setPedidos] = useState(pedidosLS)

  const { setModal, modal } = useInventario();

  const handleChangeModalPedido = () => {
    setModal('pedido')
    if(modal === 'pedido') {
      setModal(null)
    }
  }

  return(
    <PedidosContext.Provider
      value={{
        pedidos,
        setPedidos,
        handleChangeModalPedido
      }}
    >
      {children}
    </PedidosContext.Provider>
  )
}

export {
  PedidosProvider
}

export default PedidosContext