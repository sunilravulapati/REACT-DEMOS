import { useForm } from 'react-hook-form'

function AddTask({ addNewTask }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    // task = id,title,priority,completed
    const submitForm = (data) => {
        addNewTask({
            id: Date.now(),
            title: data.title,
            priority: data.priority,
            completed: false
        })
        reset()
    }
    return (
        <div>
            <h2 className=' text-green-600'>Add New Task</h2>
            <form onSubmit={handleSubmit(submitForm)} className="space-y-3  ">
                <input type="text" 
                {...register("title", 
                { 
                    required: true, 
                    minLength: { 
                        value: 3, 
                        message: "Title must be at least 3 characters"
                    } 
                })} className="bg-white border px-2 py-1 rounded" placeholder='enter the task!' />
                {
                    errors.title && <p className='text-red-500'>Title is required</p>
                }
                <select {...register("priority",{required:true})} className="bg-white ml-3 border px-2 py-1 rounded" >
                    <option value="">Select Option</option>
                    <option value="easy">Low🧘</option>
                    <option value="med">Medium🏃</option>
                    <option value="high">High🔥</option>
                </select>
                {
                    errors.priority && <p className='text-red-500'>Priority is required</p>
                }
                <br />
                <button type='submit' className='bg-green-500 text-white px-2 py-1 rounded'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask