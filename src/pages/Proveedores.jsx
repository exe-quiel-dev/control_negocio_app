// COMPONENTS
import { Link } from "react-router-dom";
import ProveedorCard from "../components/ProveedorCard"

// ICONS
import { IoMdArrowRoundBack } from "react-icons/io";

import { proveedores } from "../constants/Proveedores"

const Proveedores = () => {
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
      </div>
      {proveedores.map(proveedor => (
        <ProveedorCard key={proveedor.id} datos={proveedor} />
      ))}
    </main>
  )
}

export default Proveedores