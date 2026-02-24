import { useState } from "react"

function StateDemo() {
    // state
    let [val, setVal] = useState(10)
    let [marks, setMarks] = useState([1, 2])
    let [user, setUser] = useState({ email: "test@mail.com",age:21})
    // primitive operations
    const increment = () => {
        setVal(val + 1)
        // setVal(x=>x+1)
        // setVal(prev=>prev+1)
        // setVal(prev=>prev+1)
    }
    const decrement = () => {
        setVal(val - 1)
    }
    const reset = () => {
        setVal(0)
    }
    // array operations
    const addAtEnd = () => {
        setMarks([...marks, 100])
    }
    const addAtBeginning = () => {
        setMarks([0, ...marks])
    }
    const addInBetween = () => {
        let newMarks = [...marks]
        newMarks.splice(1, 0, 50)
        setMarks(newMarks)
    }
    const deleteLast = () => {
        let newMarks = [...marks]
        newMarks.pop()
        setMarks(newMarks)
    }
    // object operations
    const addCity = () => {
        setUser({ ...user, city: "hyd" })
    }
    const deleteProperty=()=>{
        let {city,...rest} = user
        setUser(rest)
    }
    // return
    return (
        <div className="p-6 max-w-md mx-auto bg-gray-100 rounded shadow">
            <p className="text-3xl font-bold text-center bg-amber-300 py-2 rounded mb-4">
                {val}
            </p>
            <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded m-1">
                Increment
            </button>
            <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded m-1">
                Decrement
            </button>
            <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded m-1">
                Reset
            </button>

            <h2 className="text-xl font-semibold mt-6 mb-2">Marks:</h2>
            {
                marks.map((m, index) => (
                    <p key={index}>
                        {m}
                    </p>
                ))
            }
            <button onClick={addAtEnd} className="px-3 py-1 bg-blue-500 text-white rounded m-1">
                Add End
            </button>
            <button onClick={addAtBeginning} className="px-3 py-1 bg-purple-500 text-white rounded m-1">
                Add Beginning
            </button>
            <button onClick={addInBetween} className="px-3 py-1 bg-yellow-500 text-white rounded m-1">
                Add Middle
            </button>
            <button onClick={deleteLast} className="px-3 py-1 bg-black text-white rounded m-1">
                Delete Last
            </button>

            <h2 className="text-xl font-semibold mt-6 mb-2">User Details:</h2>
            {
                Object.values(user).map((v,index)=><p key={index}>{v}</p>)
            }
            <button onClick={addCity} className="px-4 py-2 bg-indigo-500 text-white rounded m-1">
                Add property
            </button>
            <button onClick={deleteProperty} className="px-4 py-2 bg-indigo-500 text-white rounded m-1">
                Delete property
            </button>

        </div>
    )
}

export default StateDemo