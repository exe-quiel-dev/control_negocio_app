// HOOKS
import { useState } from "react" 
import { useLoaderData, useNavigate } from "react-router-dom";
import usePedidos from "../hooks/usePedidos";
// COMPONENTS
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
// ICONS
import { IoMdArrowRoundBack } from "react-icons/io";

export function loader ({params}) {
  return params;
}

const EditarPedido = () => {
  const {pedidos} = usePedidos();
  const datos = useLoaderData();
  const navigate = useNavigate();

  const pedidoFiltrado = pedidos.filter(pedido => pedido.id === datos.proveedorId);
  const { nombre, saldo, pagado } = pedidoFiltrado[0];

  const [nombreActualizado, setNombreActualizado] = useState(nombre);
  const [pagadoActualizado, setPagadoActualizado] = useState(pagado);
  const [saldoActualizado, setSaldoActualizado] = useState(saldo);
  const [alerta, setAlerta] = useState('');


  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      <div id="top" className='flex justify-start w-full'>
        <div className='p-2 rounded-lg'>
          <Link
            className='text-gray-500 flex items-center  hover:text-white cursor-pointer hover:drop-shadow'
            to='/inventario'
          >
            <IoMdArrowRoundBack className='text-2xl' />
            <span className='text-lg font-semibold uppercase'>Volver</span>
          </Link>
        </div>
      </div>

      {alerta && (
        <Alerta msg={`${alerta === 'error' ? 'Tenes que completar todos los campos.' : 'Producto guardado con exito.'}`} tipo={alerta} />
      )}

      <form
        className="flex flex-col items-center gap-2 p-2 lg:p-0 md:container md:mx-auto"
        onSubmit={e => {
          handdleEditarProveedor(e)
        }}
      >
        <label htmlFor="nombre_proveedor" className="text-gray-300 text-start">Nombre del proveedor</label>
        <input
          type="text"
          id="nombre_proveedor"
          name="nombre_proveedor"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={pedidoFiltrado[0]?.nombre}
          onChange={e => { setNombreActualizado(e.target.value) }}
        />

        <label htmlFor="pagado" className="text-gray-300 w-full-md:4 text-start">Total pagado</label>
        <input
          type="number"
          id="pagado"
          name="pagado"
          className="text w-full-md:lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={pedidoFiltrado[0]?.pagado}
          onChange={e => { setPagadoActualizado(e.target.value) }}
        />

        <label htmlFor="saldo" className="text-gray-300 text-start">Saldo pendiente</label>
        <input
          type="number"
          id="saldo"
          name="saldo"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={pedidoFiltrado[0]?.saldo}
          onChange={e => { setSaldoActualizado(e.target.value) }}
        />

        <input
          type="submit"
          value='Guardar Cambios'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </main>
  )
}

export default EditarPedido