/* eslint-disable react/prop-types */

const ProveedorCard = ({datos}) => {
  const {nombre, saldo, pagado, total} = datos;

  const formatearDinero = precio => {
    return precio.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="bg-gray-100 text-gray-700 w-1/2 shadow flex flex-col justify-around items-center rounded-lg p-5">
      <h2 className="font-black text-2xl">{nombre}</h2>
      <p className="text-xl"><span className="font-bold">Total:</span> {formatearDinero(total)}</p>
      <p className="text-xl"><span className="font-bold">Pagado:</span> {formatearDinero(pagado)}</p>
      <p className="text-xl"><span className="font-bold">Saldo:</span> {formatearDinero(saldo)}</p>
    </div>
  )
}

export default ProveedorCard