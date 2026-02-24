import {useForm} from 'react-hook-form'

function AddTask({addNewTask}) {
  const {register,handleSubmit,reset} = useForm()
  const submit=(o)=>{
    addNewTask(o);
    reset()
  }
  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("taskName")} className='px-2 py-3 border bg-white rounded' placeholder='enter the task'/>
        <div>
          <button type="submit" className='border rounded bg-lime-200 text-black p-1 mt-1 mb-2'>Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask