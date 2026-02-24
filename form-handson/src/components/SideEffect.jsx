import {useEffect,useState} from 'react'

function SideEffect() {
    let [users,setUsers] = useState([])
    let [error,setError] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            let res =  await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json()
            setUsers(data)
        }
        fetchData()
    },[])
  return (
    <div>SideEffect</div>
  )
}

export default SideEffect