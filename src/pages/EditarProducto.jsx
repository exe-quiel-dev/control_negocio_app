/* eslint-disable react-refresh/only-export-components */
// HOOKS
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useInventario from "../hooks/useInventario";
// COMPONENTS
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
// ICONS
import { IoMdArrowRoundBack } from "react-icons/io";

export function loader({ params }) {
  return params;
}

const EditarProducto = () => {
  const { productos } = useInventario();
  const datos = useLoaderData();
  const navigate = useNavigate();
  
  const prodFiltrado = productos.filter(producto => producto.id === datos.productoId);
  const {nombre, cantidad, precio, descripcion} = prodFiltrado[0];

  const [nombreActualizado, setNombreActualizado] = useState(nombre);
  const [cantidadActualizado, setCantidadActualizado] = useState(cantidad);
  const [precioActualizado, setPrecioActualizado] = useState(precio);
  const [descripcionActualizado, setDescripcionActualizado] = useState(descripcion);
  const [alerta, setAlerta] = useState('');



  const handleEditarProducto = e => {
    e.preventDefault()
    
    prodFiltrado[0].nombre = nombreActualizado
    prodFiltrado[0].cantidad = cantidadActualizado
    prodFiltrado[0].precio = precioActualizado
    prodFiltrado[0].descripcion = descripcionActualizado

    localStorage.setItem('productos', JSON.stringify(productos))
    setAlerta('success')
    setTimeout(() => {
      setAlerta('')
      navigate('/inventario')
    }, 1500);
  }

  return (
    <main className="flex flex-col items-center justify-center container mx-auto gap-4 p-5">
      <div id="top" className='flex justify-start w-full'>
        <div className='p-2 rounded-lg'>
          <Link
            className='text-gray-500 flex items-center  hover:text-white cursor-pointer hover:drop-shadow'
            to='/inventario'
          >
            <IoMdArrowRoundBack className='text-2xl' />
            <span className='text-lg font-semibold uppercase'>Volver</span>
          </Link>
        </div>
      </div>

      {alerta && (
        <Alerta msg={`${alerta === 'error' ? 'Tenes que completar todos los campos.' : 'Producto guardado con exito.'}`} tipo={alerta} />
      )}

      <form
        className="flex flex-col items-center gap-2 p-2 lg:p-0 md:container md:mx-auto"
        onSubmit={e => {
          handleEditarProducto(e)
        }}
      >
        <label htmlFor="nombre_producto" className="text-gray-300 text-start">Nombre del producto</label>
        <input
          type="text"
          id="nombre_producto"
          name="nombre_producto"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={prodFiltrado[0]?.nombre}
          onChange={e => { setNombreActualizado(e.target.value) }}
        />

        <label htmlFor="cantidad" className="text-gray-300 w-full-md:4 text-start">Cantidad de productos</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          className="text w-full-md:lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={prodFiltrado[0]?.cantidad}
          onChange={e => { setCantidadActualizado(e.target.value) }}
        />

        <label htmlFor="precio" className="text-gray-300 text-start">Precio del producto</label>
        <input
          type="number"
          id="precio"
          name="precio"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          defaultValue={prodFiltrado[0]?.precio}
          onChange={e => { setPrecioActualizado(e.target.value) }}
        />


        <label htmlFor="descripcion" className="text-gray-300 text-start">Descripcion del producto</label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="text-lg p-2 outline-none rounded-lg w-full md:w-1/2"
          maxLength={100}
          defaultValue={prodFiltrado[0]?.descripcion}
          onChange={e => { setDescripcionActualizado(e.target.value) }}
        ></textarea>

        <input
          type="submit"
          value='Guardar Cambios'
          className='uppercase p-2 font-bold bg-emerald-100 rounded-lg px-4 hover:shadow hover:bg-emerald-300 cursor-pointer text-gray-700'
        />
      </form>
    </main>
  )
}

export default EditarProducto