import { useTest } from "../store/TestStore"

function UserB() {

    const name = useTest(state => state.user.name)
    const age = useTest(state => state.user.age)
    const updateUser = useTest(state => state.updateUser)

    return (
        <div className='bg-green-200 shadow-md text-center p-10'>
            <p className='font-bold mt-3'>User B</p>
            <p className='font-bold mt-3'>Zustand</p>
            <p>User:{name}</p>
            <p>age:{age}</p>
            <button onClick={() => updateUser("Raju")} className='border bg-blue-200 rounded-md p-1.5 mt-2'>Click to change</button>
        </div>
    )
}

export default UserB