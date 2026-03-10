import { useContext } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import { useTest } from '../store/TestStore.js'

function A() {
  //state
  let { counter1, changeState } = useContext(CounterContext)
  console.log("component A rendered")
  let inputRef = useRef(null)
  useEffect(() => {
    //side effect
    inputRef.current.focus()
  }, [])
  // let { user, changeUserDetails } = useContext(UserContext)
  // console.log("component A rendered")
  const xZustand = useTest(state => state.x)
  const incrementXZustand = useTest(state => state.incrementX)
  return (
    <div className='bg-amber-200 shadow-md text-center p-10'>
      <p className='font-bold mt-3'>Component A</p>
      <p className='font-bold mt-3'>Context API</p>
      <p>Counter1: {counter1}</p>
      <button onClick={changeState} className='border bg-blue-200 p-1 rounded-md'>Click me</button>
      {/* <p>User: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>
      <p>City:{user.city}</p>
      <button onClick={changeUserDetails} className='border bg-blue-200'>Click to change</button> */}
      <p className='font-bold mt-3'>useRef Example</p>
      <input ref={inputRef} type="text" placeholder="Auto-focused..." className="w-full border border-amber-300 rounded mt-2 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <p className='font-bold mt-3'>Zustand</p>
      <p className='text-red-400'>X: {xZustand}</p>
      <button onClick={incrementXZustand} className='mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm shadow-sm'>Click to change</button>
    </div>
  )
}

export default A