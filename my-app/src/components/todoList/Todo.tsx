import React, { useState } from 'react'

function Todo(prop) {
    const{tasks,indexVal,DeleteTask}=prop;
    const[isedit,SetIsEdit]=useState(true);
    const[task,setTask]=useState(tasks);

    function handleEdit(){
      SetIsEdit(false);
    }

    function onEditChange(e){
      setTask(e.target.value);
    }

    function handleBlur(){
      SetIsEdit(true);
    }

  return (
    <div>
      {
        isedit ? (
          <div contentEditable='true'>
          <span>{task}</span>
          </div>
        ):(
          <input type='text' value={task} onChange={onEditChange} onBlur={handleBlur}></input>

        )
      }
      &nbsp;&nbsp;<button type='button' id='edit' onClick={handleEdit}>Edit</button> &nbsp;
      <button type='button' id='btn' onClick={()=>DeleteTask(indexVal)}>Delete</button>


    </div>
  )
}

export default Todo
