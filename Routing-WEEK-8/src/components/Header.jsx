import { NavLink } from "react-router"
function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-yellow-300">
      <img 
        className="py-2 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhCkBsGTxeJVmakf__5NI2hCMHFFanVtY1QBGADaGm4DGjwU-tL5t9RY&s" 
        width="100px"  
        alt="logo" 
      />
      <ul className="flex gap-10 text-2xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="tech">Tech</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header