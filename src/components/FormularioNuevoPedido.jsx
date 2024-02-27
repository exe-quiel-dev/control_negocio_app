// HOOKS
import { useState } from "react";
import useInventario from "../hooks/useInventario";
import usePedidos from "../hooks/usePedidos";
// COMPONENTS
import Alerta from "./Alerta";
// ICONS
import { IoIosCloseCircleOutline } from "react-icons/io";

const FormularioNuevoPedido = () => {
  const [nombre, setNombre] = useState("");
  const [pagado, setPagado] = useState(Number(0));
  const [saldo, setSaldo] = useState(Number(0));
  const [pedido, setPedido] = useState(Number(0))
  const [alerta, setAlerta] = useState('');

  const { generarId } = useInventario();
  const { handleChangeModalPedido, pedidos, setPedidos } = usePedidos();

  class Pedido {
    constructor(nombre, saldo, pagado, pedido) {
      this.nombre = nombre
      this.saldo = saldo
      this.pagado = pagado
      this.pedido = pedido
      this.id = generarId()
    }
  }

  const handleSubmitNuevoPedido = e => {
    e.preventDefault()

    const nuevoPedido = new Pedido(nombre, saldo, pagado, pedido);

    if ([nombre, saldo, pagado].includes('')) {
      setAlerta('error')
      setTimeout(() => {
        setAlerta('')
      }, 1500);

      return;
    } else {
      setPedidos([...pedidos, nuevoPedido])
      setAlerta('success')
      setTimeout(() => {
        setAlerta('')
        handleChangeModalPedido(null)
      }, 1500);
    }
  }



  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      <div className="w-2/3">
        <IoIosCloseCircleOutline
          className="text-white rounded-full shadow hover:bg-red-500 text-2xl text-center cursor-pointer mb-2"
          onClick={() => { handleChangeModalPedido() }}
        />
      </div>
      {alerta && (
        <Alerta msg={`${alerta === 'error' ? 'Tenes que completar todos los campos.' : 'Pedido agregado con exito.'}`} tipo={alerta} />
      )}
      <form
        className="flex flex-col items-center gap-4 w-2/3"
        onSubmit={e => {
          handleSubmitNuevoPedido(e)
        }}
      >
        <label htmlFor="nombre_comprador" className="text-gray-300 w-full text-start">Nombre del comprador</label>
        <input
          type="text"
          id="nombre_comprador"
          name="nombre_comprador"
          className="text-lg p-2 outline-none rounded-lg w-full"
          value={nombre || ''}
          onChange={e => setNombre(e.target.value)}
        />

        <label htmlFor="pedido" className="text-gray-300 w-full text-start">Descripcion del pedido</label>
        <textarea
          id="pedido"
          name="pedido"
          className="text-lg p-2 outline-none rounded-lg w-full"
          maxLength={300}
          value={pedido || ''}
          onChange={e => setPedido(e.target.value)}
        ></textarea>

        <label htmlFor="pagado" className="text-gray-300 w-full text-start">Total pagado</label>
        <input
          type="number"
          id="pagado"
          name="pagado"
          className="text w-full-md:lg p-2 outline-none rounded-lg w-full"
          value={pagado || ''}
          onChange={e => setPagado(e.target.value)}
        />

        <label htmlFor="saldo" className="text-gray-300 w-full text-start">Saldo pendiente</label>
        <input
          type="number"
          id="saldo"
          name="saldo"
          className="text-lg p-2 outline-none rounded-lg w-full"
          value={saldo || ''}
          onChange={e => setSaldo(e.target.value)}
        />

        <input
          type="submit"
          value='Añadir pedido'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </div>
  )
}

export default FormularioNuevoPedido