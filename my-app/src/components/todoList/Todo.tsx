import React from 'react'

function Todo(prop) {
    const{tasks,indexVal,DeleteTask}=prop;
  return (
    <div>
      <div key={indexVal}>{tasks} &nbsp;&nbsp;
      <button type='button' id='edit'>Edit</button> &nbsp;
      <button type='button' id='btn' onClick={()=>DeleteTask(indexVal)}>Delete</button></div>

    </div>
  )
}

export default Todo
