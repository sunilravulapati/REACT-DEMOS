import {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext'
function C() {
  //state
  let {counter1,changeState} = useContext(CounterContext)
  console.log("component C rendered")

  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className=''>Component C</p>
      <p className=''>Counter1: {counter1}</p>
      <button onClick={changeState} className='border bg-blue-200 p-1'>Click me</button>
    </div>
  )
}

export default C