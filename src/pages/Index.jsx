// COMPONENTS
import { Link } from "react-router-dom";

// ICONS
import { MdInventory } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaTruck } from "react-icons/fa6";

const Index = () => {
  return (
    <main className="bg-slate-900">
      <div className="h-screen container mx-auto grid grid-cols-3 place-items-center gap-4">
        <Link
          className="bg-emerald-100 hover:bg-emerald-300 hover:shadow-md w-3/4 h-1/3 flex flex-col items-center justify-center gap-4 rounded cursor-pointer hover:border-2 hover:border-emerald-400 text-gray-800 hover:text-emerald-100"
          to='/inventario'
        >
          <MdInventory className="text-8xl" />
          <h2 className="uppercase font-black text-2xl">Inventario</h2>
        </Link>
        <Link
          className="bg-emerald-100 hover:bg-emerald-300 hover:shadow-md w-3/4 h-1/3 flex flex-col items-center justify-center gap-4 rounded cursor-pointer hover:border-2 hover:border-emerald-400 text-gray-800 hover:text-emerald-100"
          to='/pedidos'
        >
          <GrTransaction className="text-8xl" />
          <h2 className="uppercase font-black text-2xl">Pedidos</h2>
        </Link>
        <Link
          className="bg-emerald-100 hover:bg-emerald-300 hover:shadow-md w-3/4 h-1/3 flex flex-col items-center justify-center gap-4 rounded cursor-pointer hover:border-2 hover:border-emerald-400 text-gray-800 hover:text-emerald-100"
          to='/proveedores'
        >
          <FaTruck className="text-8xl" />
          <h2 className="uppercase font-black text-2xl">Proveedores</h2>
        </Link>
      </div>
    </main>
  )
}

export default Index