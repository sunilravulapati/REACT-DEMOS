import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
function A() {
  //state
  // let {counter1,changeState} = useContext(CounterContext)
  // console.log("component A rendered")
  let { user, changeUserDetails } = useContext(UserContext)
  console.log("component A rendered")

  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className=''>Component A</p>
      {/* <p>Counter1: {counter1}</p>
      <button onClick={changeState} className='border bg-blue-200 p-1'>Click me</button> */}
      <p>User: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>
      <p>City:{user.city}</p>
      <button onClick={changeUserDetails} className='border bg-blue-200'>Click to change</button>
    </div>
  )
}

export default A