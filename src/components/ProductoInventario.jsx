/* eslint-disable react/prop-types */
// HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInventario from "../hooks/useInventario";
// ICONS
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const ProductoInventario = ({ producto }) => {
  const { nombre, cantidad, precio, descripcion, id } = producto;
  const { productos, setProductos, formatearDinero } = useInventario();
  const [nuevaCantidad, setNuevacantidad] = useState(Number(cantidad));

  const navigate = useNavigate();

  const aumentarCantidad = id => {
    productos.map(producto => {
      if (producto.id === id) {
        producto.cantidad = parseInt(producto.cantidad) + 1;
        setNuevacantidad(producto.cantidad)
        localStorage.setItem('productos', JSON.stringify(productos))
      }
    })

  }
  const restarCantidad = id => {
    productos.map(producto => {
      if (producto.id === id) {
        if (producto.cantidad > 1) {
          producto.cantidad = parseInt(producto.cantidad) - 1;
          setNuevacantidad(producto.cantidad)
          localStorage.setItem('productos', JSON.stringify(productos))
        } else {
          return
        }
      }
    })
  }

  const eliminarProducto = (e, id) => {
    e.preventDefault()
    const productoEliminado = productos.filter(producto => producto.id !== id);
    setProductos(productoEliminado)
  }


  return (
    <div id="info_prod" className="bg-gray-200 text-gray-700 w-full flex flex-col justify-around items-center gap-4 rounded-lg p-5 shadow">
      <div className="text-center">
        <h2 className="font-black text-2xl uppercase">{nombre}</h2>
        <p className="text-xl">Cantidad: {nuevaCantidad}</p>
        <div className="flex gap-4 justify-center py-2">
          <button
            className="bg-green-500 text-white rounded-full shadow hover:bg-green-700 cursor-pointer"
            onClick={() => { aumentarCantidad(id) }}
          ><CiCirclePlus className="text-3xl" /></button>
          <button
            className="bg-red-500 text-white rounded-full shadow hover:bg-red-700 cursor-pointer"
            onClick={() => { restarCantidad(id) }}
          ><CiCircleMinus className="text-3xl" /></button>
        </div>
        <p className="text-lg py-2">Descripcion: {descripcion}</p>
        <p className="text-xl py-2 font-bold">Precio: {formatearDinero(Number(precio))}</p>
      </div>
      <div id="editar_eliminar" className="flex justify-center gap-4">
        <FaRegTrashAlt className="text-2xl hover:text-red-500 cursor-pointer" 
        onClick={e => { eliminarProducto(e, id)}}
        />
        <GoPencil
          className="text-2xl hover:text-blue-500 cursor-pointer"
          onClick={() => navigate(`/producto/${id}/editar`)}
        />
      </div>
    </div>
  )
}

export default ProductoInventario