// HOOKS
import { useEffect } from "react";
import usePedidos from "../hooks/usePedidos"
// COMPONENTS 
import PedidosCard from '../components/PedidosCard'
import { Link } from "react-router-dom";
// ICONS
import { IoMdArrowRoundBack } from "react-icons/io";


const Pedidos = () => {
  const { pedidos, handleChangeModalPedido } = usePedidos();
  
  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
  }, [pedidos])

  useEffect(() => {
    JSON.parse(localStorage.getItem('pedidos'))
  }, [pedidos])

  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      <div className='flex justify-start w-full'>
        <div className='p-2 rounded-lg'>
          <Link
            className='text-gray-500 flex items-center gap-2 hover:text-white cursor-pointer hover:drop-shadow'
            to='/'
          >
            <IoMdArrowRoundBack className='text-3xl' />
            <span className='text-lg font-semibold uppercase'>Volver</span>
          </Link>
        </div>
        <div id='boton_agregar' className='w-full flex justify-center md:justify-end'>
          <button
            className='text-gray-700 bg-emerald-100 hover:bg-emerald-300 cursor-pointer hover:shadow p-2 rounded-lg font-semibold'
            onClick={() => { handleChangeModalPedido() }}
          >Nuevo pedido</button>
        </div>
      </div>
      {pedidos?.length ? pedidos.map(pedido => (<PedidosCard key={pedido.id} datos={pedido} />))
        : (<h2 className='text-white font-bold text-xl text-center col-span-3 p-10'>Todavia no hay pedidos agregados.</h2>)}
    </main>
  )
}

export default Pedidos