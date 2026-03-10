import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import {useTest} from '../store/TestStore.js'

function C() {
  //state

  const y = useTest(state=>state.y)
  const incrementY = useTest(state=>state.incrementY)

  let { counter1, changeState } = useContext(CounterContext)
  console.log("component C rendered")

  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className=''>Component C</p>
      <p className=''>Counter1: {counter1}</p>
      <button onClick={changeState} className='border bg-blue-200 p-1'>Click me</button>
      <p className='text-red-400'>Y: {y}</p>
      <button onClick={incrementY} className='border bg-blue-200'>Click to change</button>
    </div>
  )
}

export default C