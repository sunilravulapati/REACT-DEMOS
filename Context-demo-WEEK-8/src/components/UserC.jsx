import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function UserC() {

    let { user } = useContext(UserContext)

    return (
        <div className='bg-green-200 shadow-md text-center p-10'>
            <p className='font-bold mt-3'>User C</p>
            <p className='font-bold mt-3'>Context API</p>
            <p>User:{user.name}</p>
            <p>age:{user.age}</p>
            <p>email:{user.email}</p>
            <p>City:{user.city}</p>
        </div>
    )
}

export default UserC