// HOOKS
import { useState } from "react";
import useInventario from "../hooks/useInventario";
import useProveedor from "../hooks/useProveedor";

// COMPONENTS
import Alerta from "./Alerta";

// ICONS
import { IoIosCloseCircleOutline } from "react-icons/io";

const FormularioNuevoProveedor = () => {
  const [nombre, setNombre] = useState("");
  const [pagado, setPagado] = useState(Number(0));
  const [saldo, setSaldo] = useState(Number(0));
  const [alerta, setAlerta] = useState('');

  const { generarId } = useInventario();
  const {provs, setProvs, handleChangeModalProveedor} = useProveedor();

  class Proveedor {
    constructor(nombre, saldo, pagado) {
      this.nombre = nombre;
      this.pagado = pagado;
      this.saldo = saldo;
      this.id = generarId();
    }
  }

  const handleSubmitNuevoProveedor = e => {
    e.preventDefault()

    const nuevoProveedor = new Proveedor(nombre, saldo, pagado);

    if ([nombre, saldo, pagado].includes('')) {
      setAlerta('error')
      setTimeout(() => {
        setAlerta('')
      }, 1500);

      return;
    } else {
      setProvs([...provs, nuevoProveedor])
      setAlerta('success')
      setTimeout(() => {
        setAlerta('')
        handleChangeModalProveedor(null)
      }, 1500);
    }
  }


return (
  <div className="flex flex-col items-center justify-center container mx-auto">
      <div className="w-2/3">
          <IoIosCloseCircleOutline
            className="text-white rounded-full shadow hover:bg-red-500 text-2xl text-center cursor-pointer mb-2"
            onClick={() => { handleChangeModalProveedor() }}
          />
      </div>
      {alerta && (
        <Alerta msg={`${alerta === 'error' ? 'Tenes que completar todos los campos.' : 'Proveedor agregado con exito.'}`} tipo={alerta} />
      )}
      <form
        className="flex flex-col items-center gap-4 w-2/3"
        onSubmit={e => {
          handleSubmitNuevoProveedor(e)
        }}
      >
        <label htmlFor="nombre_proveedor" className="text-gray-300 w-full text-start">Nombre del proveedor</label>
        <input
          type="text"
          id="nombre_proveedor"
          name="nombre_proveedor"
          className="text-lg p-2 outline-none rounded-lg w-full"
          value={nombre || ''}
          onChange={e => setNombre(e.target.value)}
        />

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
          value='Añadir proveedor'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </div>
)
  }

export default FormularioNuevoProveedor