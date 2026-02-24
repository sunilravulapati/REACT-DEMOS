function TaskList({ tasks }) {
  // {/* simple technique */}
  //       if(tasks.length===0){
  //         return <p>Empty!</p>
  //       }
  return (
    <div>
      <h2 className="text-4xl text-lime-400"> List of Tasks: </h2>
      {
        (tasks.length === 0) ? <p>Empty!</p> :
          tasks.map((taskObj, index) => (
            <p key={index}>{taskObj.taskName}
            </p>
          ))
      }
    </div>
  )
}

export default TaskList