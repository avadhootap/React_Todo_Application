import React, { useEffect, useState } from 'react'
import './App.css';
import TaskList from './components/todoList/ListTodo';
import Delete from './components/DeleteAll/Delete';
import AddTodo from './components/addTask/AddTodo';

function App() {
  
  const [task,setTask]=useState<string []>([]);
  const [inputtask,setInputTask]=useState("");

  // useEffect(()=>{
  //   alert("Are you sure you want to Delete...?")
  // },[])

  function handleInputs(e){
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
    setInputTask('');

  }
  return (
    <div className='App'>
         <h3>React ToDo Application</h3>
         <div>
          <AddTodo tasks={task} addtask={addtask} inputVal={inputtask} handleInput={handleInputs}></AddTodo><hr></hr>
          <TaskList tasks={task} Delete={deleteTask}></TaskList><br></br>
           <Delete DeleteAll={Deleteall}></Delete>
         </div>
    </div>
   
   
  );
}

export default App;
