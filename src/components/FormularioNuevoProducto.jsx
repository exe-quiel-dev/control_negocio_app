/* eslint-disable react-hooks/exhaustive-deps */
// ICONS
import { IoIosCloseCircleOutline } from "react-icons/io";

// HOOKS
import useInventario from "../hooks/useInventario";
import { useState } from "react";
// COMPONENTS
import Alerta from "./Alerta";

const FormularioNuevoProducto = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(Number(0));
  const [precio, setPrecio] = useState(Number(0));
  const [descripcion, setDescripcion] = useState("");
  const [alerta, setAlerta] = useState('');


  const {
    handleChangeModal,
    setProductos,
    productos,
    generarId
  } = useInventario();


  class Producto {
    constructor(nombre, cantidad, precio, descripcion) {
      this.nombre = nombre.toLowerCase();
      this.cantidad = cantidad;
      this.precio = precio;
      this.descripcion = descripcion;
      this.id = generarId();
    }


  }

  const handleSubmitNuevoProd = e => {
    e.preventDefault()

    const nuevoProducto = new Producto(nombre, cantidad, precio, descripcion);

    if ([nombre, cantidad, precio, descripcion].includes('')) {
      setAlerta('error')
      setTimeout(() => {
        setAlerta('')
      }, 1500);

      return;
    } else {
      setProductos([...productos, nuevoProducto])
      setAlerta('success')
      setTimeout(() => {
        setAlerta('')
        handleChangeModal()
      }, 1500);
    }
  }


  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      <div className="w-2/3">
          <IoIosCloseCircleOutline
            className="text-white rounded-full shadow hover:bg-red-500 text-2xl text-center cursor-pointer mb-2"
            onClick={() => { handleChangeModal() }}
          />
      </div>
      {alerta && (
        <Alerta msg={`${alerta === 'error' ? 'Tenes que completar todos los campos.' : 'Producto guardado con exito.'}`} tipo={alerta} />
      )}
      <form
        className="flex flex-col items-center gap-4 w-2/3"
        onSubmit={e => {
          handleSubmitNuevoProd(e)
        }}
      >
        <label htmlFor="nombre_producto" className="text-gray-300 w-full text-start">Nombre del producto</label>
        <input
          type="text"
          id="nombre_producto"
          name="nombre_producto"
          className="text-lg p-2 outline-none rounded-lg w-full"
          value={nombre || ''}
          onChange={e => setNombre(e.target.value)}
        />

        <label htmlFor="cantidad" className="text-gray-300 w-full text-start">Cantidad de productos</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          className="text w-full-md:lg p-2 outline-none rounded-lg w-full"
          value={cantidad || ''}
          onChange={e => setCantidad(e.target.value)}
        />

        <label htmlFor="precio" className="text-gray-300 w-full text-start">Precio del producto</label>
        <input
          type="number"
          id="precio"
          name="precio"
          className="text-lg p-2 outline-none rounded-lg w-full"
          value={precio || ''}
          onChange={e => setPrecio(e.target.value)}
        />


        <label htmlFor="descripcion" className="text-gray-300 w-full text-start">Descripcion del producto</label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="text-lg p-2 outline-none rounded-lg w-full"
          maxLength={100}
          value={descripcion || ''}
          onChange={e => setDescripcion(e.target.value)}
        ></textarea>

        <input
          type="submit"
          value='Añadir producto'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </div>
  )
}

export default FormularioNuevoProducto