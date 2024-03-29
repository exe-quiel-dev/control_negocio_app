// HOOKS
import { useEffect } from 'react';
import useInventario from '../hooks/useInventario'
// COMPONENTS
import { Link } from 'react-router-dom';
import ProductoInventario from '../components/ProductoInventario'

// import productos from "../constants/ProductosInventario"


import { IoMdArrowRoundBack } from "react-icons/io";


const Inventario = () => {
  const { handleChangeModalInventario, productos } = useInventario();

  // let prodsFiltrar = [];

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos))
  }, [productos])

  useEffect(() => {
    JSON.parse(localStorage.getItem('productos'))
  }, [productos])


  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      <div id="top" className='flex justify-start w-full'>
        <div className='p-2 rounded-lg'>
          <Link
            className='text-gray-500 flex items-center gap-2 hover:text-white cursor-pointer hover:drop-shadow'
            to='/'
          >
            <IoMdArrowRoundBack className='text-2xl' />
            <span className='text-lg font-semibold uppercase'>Volver</span>
          </Link>
        </div>
      </div>
      <div id='contenedor_form' className='container mx-auto flex flex-col md:flex-row justify-around items-center gap-4'>
        <div id='boton_agregar' className='w-full flex justify-center md:justify-end'>
          <button
            className='text-gray-700 bg-emerald-100 hover:bg-emerald-300 cursor-pointer hover:shadow p-2 rounded-lg font-semibold'
            onClick={() => { handleChangeModalInventario() }}
          >Nuevo producto</button>
        </div>
      </div>
      <div id="productos" className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {productos?.length ? productos.map(producto => (<ProductoInventario key={producto.id} producto={producto} />))
          : (<h2 className='text-white font-bold text-xl text-center col-span-3 p-10'>Todavia no hay productos.</h2>)}

      </div>
    </main>
  )
}

export default Inventario