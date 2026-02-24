import React from 'react'

function TasksCount({tasks}) {
  return (
    <div>
      <h3 className='text-2xl text-green-800'>Tasks Count:<p>{tasks.length}</p></h3>
    </div>
  )
}

export default TasksCount