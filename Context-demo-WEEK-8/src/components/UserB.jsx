import { useTest } from "../store/TestStore"

function UserB() {

    const name = useTest(state => state.user.name)
    const age = useTest(state => state.user.age)
    const updateUser = useTest(state => state.updateUser)

    return (
        <div className='bg-green-200 shadow-md text-center p-10'>
            <p>UserB</p>
            <p>User:{name}</p>
            <p>age:{age}</p>
            <button onClick={() => updateUser("Raju")} className='border bg-blue-200'>Click to change</button>
        </div>
    )
}

export default UserB