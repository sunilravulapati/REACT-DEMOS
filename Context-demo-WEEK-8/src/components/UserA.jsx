import { useContext, useRef, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"

function UserA() {
    let { user, changeUserDetails } = useContext(UserContext)

    return (
        <div className='bg-green-200 shadow-md text-center p-10'>
            <p className='font-bold mt-3'>User A</p>
            <p className='font-bold mt-3'>Context API</p>
            <p>User:{user.name}</p>
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>
            <p>City:{user.city}</p>
            <button onClick={changeUserDetails} className='mt-2 border bg-blue-200 rounded-md p-1.5'>Click to change</button>
        </div>
    )
}

export default UserA