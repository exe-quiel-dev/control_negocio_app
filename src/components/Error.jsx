/* eslint-disable react/prop-types */

const Error = ({msg}) => {
  return (
    <div className="flex justify-center">
      <p className="text-white uppercase bg-red-500 p-2 rounded w-full md:w-1/2 lg:w-1/2">{msg}</p>
    </div>
  )
}

export default Error