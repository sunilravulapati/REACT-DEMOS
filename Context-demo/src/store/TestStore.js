import { create } from 'zustand'
//create store
export const useTest = create((set) => ({
    //state
    x: 10,
    y: 20,
    user:{
        name:"Vikas",
        age:21
    },
    //function to modify that state
    incrementX: () => set(state => ({ x: state.x + 1 })),
    decrementX: () => set(state => ({ x: state.x - 1 })),
    incrementY: () => set(state => ({ y: state.y + 1 })),
    incrementXByValue: (val) => set(state => ({ x: state.x + val })),
    updateUser: (newName) => set(state=>({user:{...state,name:newName,age:19}}))
})) //this creates a custom hook