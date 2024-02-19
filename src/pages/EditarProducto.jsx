/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

export function loader({params}) {
  
  return params;
}

const EditarProducto = () => {
const datos = useLoaderData();
console.log(datos)

  return (
    <div>EditarProducto</div>
  )
}

export default EditarProducto