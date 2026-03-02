import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='bg-amber-200 text-2xl flex items-center justify-between px-10'>
      <img width="80px" className="p-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x4q8jU8FPC_37spB0ybs9gAlLiXFTUglqTstfhnjchLoDSIGydG7lxY&s" alt="img" />
      <ul className='flex gap-10 '>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-black"}>Home</NavLink></li>
        <li><NavLink to="/productlist" className={({ isActive }) => isActive ? "text-white" : "text-black"} >Products</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-black"}>Contact Us</NavLink></li>
      </ul>
    </div>
  )
}

export default Header