// HOOKS
import { useState } from 'react';
import useInventario from '../hooks/useInventario'
// COMPONENTS
import { Link } from 'react-router-dom';
import ProductoInventario from '../components/ProductoInventario'

// import productos from "../constants/ProductosInventario"


import { IoMdArrowRoundBack } from "react-icons/io";


const Inventario = () => {
  const [selected, setSelected] = useState(false);
  const { handleChangeModal, handleSubmit, productos } = useInventario();
  


  const renderInventario = () => {
    if (productos?.length > 0) {
      return productos?.map(producto => (<ProductoInventario key={producto.id} producto={producto} />))
    }else{
      return <h2>Agregue productos</h2>
    }
  }

  // useEffect (() => {
  //   // renderInventario()
  //   console.log(productos)
  // }, [productos])


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
        <form
          className='w-full flex justify-around md:inline'
          onSubmit={e => { handleSubmit(e) }}
        >
          <input
            type='search'
            placeholder='Buscar producto'
            className={`text-gray-700 w-full md:w-1/2 lg:w-1/2 p-2 border-2 rounded outline-none me-4 ${selected ? 'border-emerald-300' : 'border-gray-300'}`}
            onFocus={() => { setSelected(true) }}
            onBlur={() => { setSelected(false) }}
          />
          <input
            type='submit'
            value='buscar'
            className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
          />
        </form>
        <div id='boton_agregar' className='w-full flex justify-center md:justify-end'>
          <button
            className='text-gray-700 bg-emerald-100 hover:bg-emerald-300 cursor-pointer hover:shadow p-2 rounded-lg font-semibold'
            onClick={() => { handleChangeModal() }}
          >Nuevo producto</button>
        </div>
      </div>
      <div id="productos" className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {renderInventario()}
      </div>
    </main>
  )
}

export default Inventario