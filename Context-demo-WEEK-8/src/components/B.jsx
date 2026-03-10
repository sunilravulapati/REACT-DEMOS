import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import { useTest } from '../store/TestStore.js'

function B() {
  //state
  let { counter1, changeState } = useContext(CounterContext)
  console.log("component B rendered")
  // const { x, incrementX, decrementX } = useTest() // this is going to return the object of states and the functions to modify it that are defined in the global store
  // console.log("x is: ", x)

  //to not allow other components to render unnecessarily, just extract them individually
  const xZustand = useTest(state => state.x)
  const incrementXZustand = useTest(state => state.incrementX)
  const incrementXByValue = useTest(state => state.incrementXByValue)

  // let { user, changeUserDetails } = useContext(UserContext)
  // console.log("component B rendered")

  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className=''>Component B</p>
      <p>Context API</p>
      <p>Counter1: {counter1}</p>
      <button onClick={changeState} className='border bg-blue-200 p-1'>Click me</button>
      {/* increment x by zustand */}
      <p>Zustand</p>
      <p className='text-red-400'>X: {xZustand}</p>
      <div className='flex flex-col gap-2'>
        <button onClick={incrementXZustand} className='w-full py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors text-xs shadow-sm'>
          Increment X
        </button>
        <button onClick={() => incrementXByValue(100)} className='w-full py-1 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors text-xs shadow-sm font-medium'>
          Increase by 100
        </button>
      </div>
    </div>
  )
}

export default B