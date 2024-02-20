/* eslint-disable react/prop-types */

const Alerta = ({msg, tipo}) => {
  return (
    <div className="flex justify-center">
      <p className={`text-white uppercase font-bold p-2 rounded w-full ${tipo == 'error' ? 'bg-red-500' : 'bg-lime-500'}`}>{msg}</p>
    </div>
  )
}

export default Alerta