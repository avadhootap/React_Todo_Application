import React from 'react'

interface todo{
  DeleteTask:(e)=>void
  id:number
  tasks:any
}
function DisplayTodo(prop:todo) {
    const {tasks,DeleteTask,id}=prop
    const data='';

  function EditTask(id){

  }

  return (
    <div>
    <div key={id}>
      <h5>ID : {tasks.id}</h5>
      <h5>UserId : {tasks.userId} </h5>
      <h5 contentEditable='true' suppressContentEditableWarning={true} >Title : {tasks.title}</h5>
      <h5>Completed : {tasks.completed?'yes':'no'}</h5>
      </div>

      <button type='button' id='btn' onClick={()=>DeleteTask(id)}>Delete</button>&nbsp;
      <button type='button' id='btn' onClick={()=>EditTask(id)}>Edit</button>
      <hr></hr>
      
    </div>
    
  )
}

export default DisplayTodo
