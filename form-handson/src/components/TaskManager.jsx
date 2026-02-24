import TasksCount from "./TasksCount"
import AddTask from "./AddTask"
import TasksList from "./TasksList"
import {useState} from 'react'

function TaskManager() {
  let [tasks,setTasks] = useState([])
  const addNewTask = (taskObj)=>{
    setTasks([...tasks,taskObj])
  }
  return (
    <div>
        <h1 className="text-6xl text-red-500 mb-10">TaskManager</h1>
        <div className="flex justify-around">
          <AddTask addNewTask={addNewTask}/>
          <TasksList tasks={tasks}/>
          <TasksCount tasks={tasks}/>
        </div>
    </div>
    
  )
}

export default TaskManager