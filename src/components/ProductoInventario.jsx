/* eslint-disable react/prop-types */
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductoInventario = ({ producto }) => {
  const { nombre, cantidad, precio, modelo } = producto

  const formatearDinero = precio => {
    return precio.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }


  return (
    <div className="bg-gray-100 text-gray-700 w-full flex justify-around items-center rounded-lg p-5 shadow">
      <h2 className="font-black text-2xl">{nombre}</h2>
      <p className="text-xl"><span className="font-bold">Modelo:</span> {modelo}</p>
      <p className="text-xl"><span className="font-bold">Cantidad:</span> {cantidad}</p>
      <div className="flex gap-4">
        <button className="bg-green-500 p-2 text-white rounded-full shadow hover:bg-green-700"><CiCirclePlus className="text-3xl" /></button>
        <button className="bg-red-500 p-2 text-white rounded-full shadow hover:bg-red-700"><CiCircleMinus className="text-3xl" /></button> 
      </div>
      <p className="text-xl"><span className="font-bold">Precio:</span> {formatearDinero(precio)}</p>
    </div>
  )
}

export default ProductoInventario