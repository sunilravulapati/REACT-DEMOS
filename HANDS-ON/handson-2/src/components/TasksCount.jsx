function TasksCount({ tasks, completedCount}) {
    // states
    const total = tasks.length + completedCount
    const pending = tasks.length
    // return
    return (
        <div className="text-center border p-4 rounded bg-gray-100 w-60 mb-3">
            <h2 className="font-semibold mb-3">Task Summary</h2>
            <p>Total Tasks: {total}</p>
            <p className="text-green-600">Completed: {completedCount}</p>
            <p className="text-red-600">Pending: {pending}</p>
        </div>
    )
}

export default TasksCount