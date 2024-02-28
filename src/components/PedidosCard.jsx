/* eslint-disable react/prop-types */
// HOOKS
import useInventario from "../hooks/useInventario";
import usePedidos from "../hooks/usePedidos";
// ICONS
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";


const PedidosCard = ({ datos }) => {
  const { nombre, saldo, pagado, pedido, id } = datos;

  const { formatearDinero } = useInventario();
  const { pedidos, setPedidos } = usePedidos();

  const eliminarPedido = (e, id) => {
    e.preventDefault()
    const proveedorEliminado = pedidos.filter(pedido => pedido.id !== id);
    setPedidos(proveedorEliminado)
  }

  return (
    <div id="info_proveedor" className="bg-gray-200 text-gray-700 w-full md:w-1/2 shadow flex flex-col justify-around items-center rounded-lg p-5 gap-4 text-center">
      <h2 className="font-black text-2xl uppercase">{nombre}</h2>
      <p className="text-xl"><span className="font-bold">Pedido:</span> {pedido}</p>
      <p className="text-xl"><span className="font-bold">Pagado:</span> {formatearDinero(Number(pagado))}</p>
      <p className="text-xl"><span className="font-bold">Saldo:</span> {formatearDinero(Number(saldo))}</p>
      <div id="editar_eliminar" className="flex justify-center gap-4">
        <FaRegTrashAlt className="text-2xl hover:text-red-500 cursor-pointer"
          onClick={e => { eliminarPedido(e, id) }}
        />
        <GoPencil
          className="text-2xl hover:text-blue-500 cursor-pointer"
        // onClick={() => navigate(`/pedido/${id}/editar`)}
        />
      </div>
    </div>
  )
}

export default PedidosCard