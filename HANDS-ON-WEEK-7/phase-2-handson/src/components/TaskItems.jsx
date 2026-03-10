function TaskItems({ task, deleteTask, updateCompleted }) {
    // Priority color
    let priorityColor = "text-green-600"
    if (task.priority === "high") {
        priorityColor = "text-red-600"
    } else if (task.priority === "med") {
        priorityColor = "text-yellow-600"
    }

    return (
        <div className="border p-3 rounded bg-white shadow w-80 mx-auto my-auto">
            {/* title and priority */}
            <h3>{task.title}</h3>
            <p className={priorityColor}>{task.priority}</p>
            {/* buttons for complete or delete */}
            <div className="mt-2 space-x-2">
                <button onClick={() => updateCompleted(task.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Complete
                </button>
                <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">Delete</button>
            </div>
        </div>
    )
}
export default TaskItems