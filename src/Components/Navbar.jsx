import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { ShopContext } from './ShopContext'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const { quantity } = useContext(ShopContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur">
      
      <div className="grid grid-cols-3 items-center px-6 py-5">

        <ul className="hidden md:flex gap-8 text-white font-bold">
          <Link to="/">
            <li className="cursor-pointer">HOME</li>
          </Link>

          <Link to="/ProductList">
            <li className="cursor-pointer">PRODUCTS</li>
          </Link>
        </ul>

        <div className="md:hidden text-white text-3xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className="text-center">
          <Link to="/">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              TECHNEXA
            </h2>
          </Link>
        </div>

        <div className="flex justify-end relative">
          <Link to="/cart">
            <FaOpencart className="text-white text-[32px]" />
          </Link>

          <p className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] h-5 w-5 rounded-full flex items-center justify-center">
            {quantity}
          </p>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white px-6 pb-6">
          <ul className="flex flex-col gap-4 font-bold">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li>HOME</li>
            </Link>

            <Link to="/ProductList" onClick={() => setMenuOpen(false)}>
              <li>PRODUCTS</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
