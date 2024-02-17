/* eslint-disable react-hooks/exhaustive-deps */
import { IoIosCloseCircleOutline } from "react-icons/io";

// HOOKS
import useInventario from "../hooks/useInventario";
import { useState } from "react";

const FormularioNuevoProducto = () => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const {
    // handleSubmitNuevoProd,
    handleChangeModal,
    setProductos,
    productos,
    setModal,
    modal,
    // setNombre,
    // setCantidad,
    // setPrecio,
    // setDescripcion,
    // nombre,
    // cantidad,
    // precio,
    // descripcion
  } = useInventario();

  const handleSubmitNuevoProd = e => {
    e.preventDefault()

    const objProducto = {
      nombre,
      cantidad,
      precio,
      descripcion
    }

    if ([nombre, cantidad, precio, descripcion].includes('')) {
      console.log('Hay algun campo vacio')
    } else {
      console.log(objProducto)
      setProductos([...productos, objProducto])
      setModal(!modal)
    }
  }


  return (
    <>
      <div className="flex items-center justify-end">
        <IoIosCloseCircleOutline
          className="bg-red-500 text-white rounded-full shadow hover:bg-red-700 text-2xl text-center cursor-pointer"
          onClick={() => { handleChangeModal() }}
        />
      </div>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={e => {handleSubmitNuevoProd(e)}}
      >
        <label htmlFor="nombre_producto" className="text-gray-300 pt-2 text-start">Nombre del producto</label>
        <input
          type="text"
          id="nombre_producto"
          name="nombre_producto"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <label htmlFor="cantidad" className="text-gray-300 w-full-md:4 pt-2 text-start">Cantidad de productos</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          className="text w-full-md:lg p-2 outline-none rounded-lg w-full md:w-1/2"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />

        <label htmlFor="precio" className="text-gray-300 pt-2 text-start">Precio del producto</label>
        <input
          type="number"
          id="precio"
          name="precio"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          value={precio}
          onChange={e => setPrecio(e.target.value)}
        />

        <label htmlFor="descripcion" className="text-gray-300 pt-2 text-start">Descripcion del producto</label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          maxLength={100}
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        ></textarea>

        <input
          type="submit"
          value='Añadir producto'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </>
  )
}

export default FormularioNuevoProducto