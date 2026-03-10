import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import {useTest} from '../store/TestStore.js'

function B() {
  //state
  // let {counter1,changeState} = useContext(CounterContext)
  // console.log("component B rendered")
  // const {x,incrementX,decrementX} = useTest() // this is going to return the object of states and the functions to modify it that are defined in the global store
  // console.log("x is: ",x)
  
  //to not allow other components to render unnecessarily, just extract them individually
  const x = useTest(state=>state.x)
  const incrementX = useTest(state=>state.incrementX)
  const incrementXByValue = useTest(state=>state.incrementXByValue)

  //user
  const name = useTest(state=>state.user.name)
  const age = useTest(state=>state.user.age)
  const updateUser = useTest(state=>state.updateUser)


  let { user, changeUserDetails } = useContext(UserContext)
  console.log("component B rendered")

  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className=''>Component B</p>
      {/* <p>Counter1: {counter1}</p>
        <button onClick={changeState} className='border bg-blue-200 p-1'>Click me</button> */}
      <p className='text-red-400'>X: {x}</p>
      <button onClick={incrementX} className='border bg-blue-200'>Click to change</button>
      <button onClick={()=>incrementXByValue(100)} className='border bg-blue-200'>Click to increase by 100</button>
      <p>User: {name}</p>
      <p>age: {age}</p>
      {/* <p>email: {user.email}</p>
      <p>City:{user.city}</p> */}
      {/* <button onClick={changeUserDetails} className='border bg-blue-200'>Click to change</button> */}
      {/* <button onClick={updateUser} className='border bg-blue-200'>Click to change</button> */}
      <button onClick={()=>updateUser("Raju")} className='border bg-blue-200'>Click to change</button>
    </div>
  )
}

export default B