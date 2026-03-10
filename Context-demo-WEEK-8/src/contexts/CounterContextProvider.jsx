import {useState} from 'react'
import { CounterContext } from './CounterContext' 

function CounterContextProvider({children}) {
  //state
    const [counter1, setCounter1] = useState(1)
    //function to modify state
    const changeState = () => {
        setCounter1(counter1 + 1)
    }
    //return
    return (
        <CounterContext.Provider value={{ counter1, changeState }}> {/* value is a js object in that we are going to send counter1 and the function to modify that */}
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider