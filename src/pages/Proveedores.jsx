// COMPONENTS
import ProveedorCard from "../components/ProveedorCard"

import { proveedores } from "../constants/Proveedores"

const Proveedores = () => {
  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      {proveedores.map(proveedor => (
        <ProveedorCard key={proveedor.id} datos={proveedor} />
      ))}
    </main>
  )
}

export default Proveedores