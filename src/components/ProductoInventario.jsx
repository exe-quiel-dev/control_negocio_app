/* eslint-disable react/prop-types */
import { useState } from "react";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const ProductoInventario = ({ producto }) => {
  const { nombre, cantidad, precio, descripcion } = producto
  const [nuevaCantidad, setNuevacantidad] = useState(Number(cantidad));

  const formatearDinero = precio => {
    return precio.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const aumentarCantidad = () => {
    setNuevacantidad(nuevaCantidad + 1)
  }
  const restarCantidad = () => {
    setNuevacantidad(nuevaCantidad - 1)
  }


  return (
    <div id="info_prod" className="bg-gray-200 text-gray-700 w-full flex flex-col justify-around items-center gap-4 rounded-lg p-5 shadow">
      <div className="text-center">
        <h2 className="font-black text-2xl uppercase">{nombre}</h2>
        <p className="text-xl">Cantidad: {nuevaCantidad}</p>
        <div className="flex gap-4 justify-center py-2">
          <button
            className="bg-green-500 text-white rounded-full shadow hover:bg-green-700 cursor-pointer"
            onClick={aumentarCantidad}
          ><CiCirclePlus className="text-3xl" /></button>
          <button
            className="bg-red-500 text-white rounded-full shadow hover:bg-red-700 cursor-pointer"
            onClick={restarCantidad}
          ><CiCircleMinus className="text-3xl" /></button>
        </div>
        <p className="text-lg py-2">Descripcion: {descripcion}</p>
        <p className="text-xl py-2 font-bold">Precio: {formatearDinero(Number(precio))}</p>
      </div>
      <div id="editar_eliminar" className="flex justify-center gap-4">
        <FaRegTrashAlt className="text-2xl hover:text-red-500 cursor-pointer" />
        <GoPencil className="text-2xl hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  )
}

export default ProductoInventario