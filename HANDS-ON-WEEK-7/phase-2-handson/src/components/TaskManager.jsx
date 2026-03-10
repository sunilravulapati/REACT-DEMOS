import TasksList from "./TasksList"
import AddTask from "./AddTask"
import TasksCount from './TasksCount'
import { useState } from "react"

function TaskManager() {
    let [tasks,setTasks] = useState([])
    let [completedCount,setCount]=useState(0)

    const updateCompleted=(id)=>{
        setCount(prev=>prev+1)
        setTasks(tasks.filter((t)=>t.id!==id))
    }
    const addNewTask = (taskObj)=>{
        setTasks([...tasks,taskObj])
    }
    const deleteTask = (id)=>{
        setTasks(tasks.filter((task)=> task.id!==id))
    }
    // const toggleTaskStatus = (id) =>{
    //     setTasks(tasks.map((task)=>task.id===id?
    //     {...task,completed:!task.completed}:task))
    // }

  return (
    <div className="flex justify-around">
      <AddTask addNewTask={addNewTask}/>
      <TasksList tasks={tasks} deleteTask={deleteTask} updateCompleted={updateCompleted}/>
      <TasksCount tasks={tasks} completedCount={completedCount}/>
    </div>
  )
}

export default TaskManager