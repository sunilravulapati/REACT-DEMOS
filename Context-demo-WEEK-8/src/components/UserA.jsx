import { useContext, useRef, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"

function UserA() {
    let { user, changeUserDetails } = useContext(UserContext)

    return (
        <div className='bg-green-200 shadow-md text-center p-10'>
            <p>UserA</p>
            <p>User:{user.name}</p>
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>
            <p>City:{user.city}</p>
            <button onClick={changeUserDetails} className='border bg-blue-200'>Click to change</button>
        </div>
    )
}

export default UserA