// HOOKS
import { useState } from 'react';
// COMPONENTS
import { Link } from 'react-router-dom';
import ProductoInventario from '../components/ProductoInventario'


import productos from "../constants/ProductosInventario"

import { IoMdArrowRoundBack } from "react-icons/io";


const Inventario = () => {
  const [selected, setSelected] = useState(false);
  console.log(selected)
  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      <div className='flex justify-start w-full'>
        <div className='hover:bg-emerald-300 p-2 rounded-lg'>
          <Link
            className='text-gray-500 flex gap-2 hover:text-gray-700 cursor-pointer hover:drop-shadow'
            to='/'
          >
            <IoMdArrowRoundBack className='text-3xl' />
            <span className='text-lg font-semibold uppercase'>Volver</span>
          </Link>
        </div>
      </div>
      <div className='container mx-auto'>
        <form className='p-4 bg-gray-100 rounded w-full flex justify-center gap-4'>
          <input
            type='search'
            placeholder='Buscar producto'
            className='text-gray-700 w-1/3 p-2 border-2 border-gray-300 rounded outline-none'
            onFocus={() => {setSelected(true)}}
            onBlur={() => {setSelected(false)}}
          />
          <input
            type='submit'
            value='buscar'
            className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
          />
        </form>
      </div>
      {productos.map(producto => (
        <ProductoInventario key={producto.id} producto={producto} />
      ))}
    </main>
  )
}

export default Inventario