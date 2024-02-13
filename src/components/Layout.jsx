import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1 className="font-black text-3xl text-center p-2 bg-emerald-400 text-white shadow">STOCK APP | BY EXE DEV</h1>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout