import React, { useState } from 'react'
import TaskList from '../todoList/ListTodo';
import Delete from '../DeleteAll/Delete';
function Taskinput() {

  const [task,setTask]=useState<string []>([]);
  const [inputtask,setInputTask]=useState("");

  function handleInput(e){
    setInputTask(e.target.value); 
  }

  function deleteTask(id){
    setTask((task)=>{
      const deletetask=[...task];
      deletetask.splice(id,1);
      return deletetask;
    });
  }

  function Deleteall(){
    setTask((task)=>{
      const deleteAll=[...task];
      deleteAll.length=0;
      return deleteAll;
    });
  }

  function addtask(){
    setTask((task)=>[...task,inputtask]);
  }

  return (
    <div>
      <label >Task:</label><br></br>
      <input type="text" id="task" name="task" onChange={handleInput} placeholder={"Add task you want to do..."}/><br></br>
      <button type='button' id='btn' onClick={addtask}>ADD</button>
      <TaskList tasks={task} Delete={deleteTask}></TaskList>
      <Delete DeleteAll={Deleteall}></Delete>
    </div>
  )
}

export default Taskinput
 