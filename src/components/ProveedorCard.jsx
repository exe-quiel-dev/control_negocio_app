/* eslint-disable react/prop-types */
// HOOKS
import useInventario from "../hooks/useInventario";
import useProveedor from "../hooks/useProveedor";
import { useNavigate } from "react-router-dom";
// ICONS
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";


const ProveedorCard = ({datos}) => {
  const {nombre, saldo, pagado, id} = datos;
  
  const { formatearDinero } = useInventario();
  const {provs, setProvs} = useProveedor()

  const navigate = useNavigate();

  const eliminarProveedor = (e, id) => {
    e.preventDefault()
    const proveedorEliminado = provs.filter(proveedor => proveedor.id !== id);
    setProvs(proveedorEliminado)
  }


  return (
    <div id="info_proveedor" className="bg-gray-200 text-gray-700 w-full md:w-1/2 shadow flex flex-col justify-around items-center rounded-lg p-5 gap-4 text-center">
      <h2 className="font-black text-2xl uppercase">{nombre}</h2>
      <p className="text-xl"><span className="font-bold">Pagado:</span> {formatearDinero(Number(pagado))}</p>
      <p className="text-xl"><span className="font-bold">Saldo:</span> {formatearDinero(Number(saldo))}</p>
      <div id="editar_eliminar" className="flex justify-center gap-4">
        <FaRegTrashAlt className="text-2xl hover:text-red-500 cursor-pointer" 
        onClick={e => { eliminarProveedor(e, id)}}
        />
        <GoPencil
          className="text-2xl hover:text-blue-500 cursor-pointer"
          onClick={() => navigate(`/proveedor/${id}/editar`)}
        />
      </div>
    </div>
  )
}

export default ProveedorCard
