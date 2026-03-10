import TaskItems from "./TaskItems"

function TasksList({ tasks, deleteTask, updateCompleted }) {
// if the tasks array is empty, display like a no tasks yet messafe
  if (tasks.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-3">Tasks</h2>
        <p>No tasks yet 🚀</p>
      </div>
    )
  }
// else display the tasks list
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-3">Tasks</h2>

      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItems
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateCompleted={updateCompleted}
          />
        ))}
      </div>
    </div>
  )
}

export default TasksList