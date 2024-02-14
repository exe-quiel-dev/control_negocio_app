import { Outlet, useLocation } from "react-router-dom"


const Layout = () => {
  let location = useLocation();

  const eliminarSlash = () => {
    let path = location.pathname;
    if(location.pathname === '/') {
      return 'Inicio'
    } else {
      path = path[0] == '/' ? path.substring(1) : path;
      return path
    }


  } 
  eliminarSlash()
  return (
    <div>
      <header>
        <nav className="p-2 bg-emerald-400 text-white shadow">
          <h1 className="font-black text-3xl text-center">STOCK APP | BY EXE DEV</h1>
          <h2 className="text-xl uppercase font-semibold text-center">{eliminarSlash()}</h2>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout