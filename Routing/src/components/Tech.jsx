import {NavLink, Outlet} from 'react-router'
function Tech() {
  return (
    <div className='mt-10'>
      <ul className='flex justify-around text-2xl'>
        <li>
          <NavLink to="java">Java</NavLink>
        </li>
        <li>
          <NavLink to="angular">Angular</NavLink>
        </li>
        <li>
          <NavLink to="vue">Vue</NavLink>
        </li>
      </ul>
      {/* placeholder for the children of technologies */}
      <Outlet/>
    </div>
  )
}

export default Tech