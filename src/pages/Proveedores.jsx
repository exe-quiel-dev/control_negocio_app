// HOOKS
import { useEffect } from "react";
import useProveedor from "../hooks/useProveedor";

// COMPONENTS
import { Link } from "react-router-dom";
import ProveedorCard from "../components/ProveedorCard";

// ICONS
import { IoMdArrowRoundBack } from "react-icons/io";


const Proveedores = () => {
  const { provs } = useProveedor();
  const { handleChangeModalProveedor } = useProveedor();

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(provs))
  }, [provs])

  useEffect(() => {
    JSON.parse(localStorage.getItem('provs'))
  }, [provs])

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
            onClick={() => { handleChangeModalProveedor() }}
          >Nuevo proveedor</button>
        </div>
      </div>
      {provs?.length ? provs.map(proveedor => (<ProveedorCard key={proveedor.id} datos={proveedor} />))
        : (<h2 className='text-white font-bold text-xl text-center col-span-3 p-10'>Todavia no hay proveedores agregados.</h2>)}
    </main>
  )
}

export default Proveedores