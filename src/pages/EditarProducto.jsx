/* eslint-disable react-refresh/only-export-components */
// HOOKS
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useInventario from "../hooks/useInventario";

export function loader({ params }) {
  return params;
}

const EditarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const { productos, setProductos } = useInventario();
  const datos = useLoaderData();

  const prodFiltrado = productos.filter(producto => producto.id === datos.productoId)

  const handleEditarProducto = e => {
    e.preventDefault()
    const objProdActualizado = {
      nombre, 
      cantidad,
      precio,
      descripcion
    }
    setProductos([...productos, objProdActualizado])
    console.log(objProdActualizado)
  }

  return (
    <form
      className="flex flex-col items-center gap-2 p-2 lg:p-0 md:container md:mx-auto"
      onSubmit={e => {
        handleEditarProducto(e)
      }}
    >
      <label htmlFor="nombre_producto" className="text-gray-300 pt-2 text-start">Nombre del producto</label>
      <input
        type="text"
        id="nombre_producto"
        name="nombre_producto"
        className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
        defaultValue={prodFiltrado[0]?.nombre}
        onChange={e => {setNombre(e.target.value)}}
      />

      <label htmlFor="cantidad" className="text-gray-300 w-full-md:4 pt-2 text-start">Cantidad de productos</label>
      <input
        type="number"
        id="cantidad"
        name="cantidad"
        className="text w-full-md:lg p-2 outline-none rounded-lg w-full md:w-1/2"
        defaultValue={prodFiltrado[0]?.cantidad}
        onChange={e => {setCantidad(e.target.value)}}
      />

      <label htmlFor="precio" className="text-gray-300 pt-2 text-start">Precio del producto</label>
      <input
        type="number"
        id="precio"
        name="precio"
        className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
        defaultValue={prodFiltrado[0]?.precio}
        onChange={e => {setPrecio(e.target.value)}}
      />


      <label htmlFor="descripcion" className="text-gray-300 pt-2 text-start">Descripcion del producto</label>
      <textarea
        id="descripcion"
        name="descripcion"
        className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
        maxLength={100}
        defaultValue={prodFiltrado[0]?.descripcion}
        onChange={e => {setDescripcion(e.target.value)}}
      ></textarea>

      <input
        type="submit"
        value='Añadir producto'
        className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
      />
    </form>
  )
}

export default EditarProducto