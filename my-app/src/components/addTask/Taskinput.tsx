import React, { useState } from 'react'
import TaskList from '../todoList/TaskList';
function Taskinput() {

  const [task,setTask]=useState<string []>([])
  const [inputtask,setInputTask]=useState("");

  function handleInput(e){
    setInputTask(e.target.value);
  }

  function addtask(){
    setTask((task)=>[...task,inputtask]);
    
  }

  return (
    <div>
      <label >Task:</label><br></br>
      <input type="text" id="task" name="task" onChange={handleInput} placeholder={"Add task you want to do..."}/><br></br>
      <p>{task}</p>
      <button type='button' id='btn' onClick={addtask}>ADD</button>
      <TaskList tasks={task}></TaskList>
    </div>
  )
}

export default Taskinput
 