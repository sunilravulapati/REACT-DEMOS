import { useState } from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}) {
    //state
    const [user, setUser] = useState({
        name: "raju",
        age: 19,
        email: "raju@mail.com"
    })
    //function to modify that state
    const changeUserDetails = () => {
        // create a copy of the existing user object and update the name
        setUser(prev => ({
            ...prev,
            name: 'ravi',email:"ravi@mail.com",city:"uppal"
        }))
    }
    return (
        <UserContext.Provider value={{user,changeUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider