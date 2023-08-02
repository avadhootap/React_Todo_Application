import React, { useState,useEffect } from 'react'
import './App.css';
import TaskList from './components/todoList/ListTodo';
import AddTodo from './components/addTask/AddTodo';
import Button from './components/Button/Button';


function App() {
  type todo={
    userId:number;
    id:number;
    title:string;
    completed:boolean;
  };
  
  const [task,setTask]=useState<todo[]>([]);
  const [inputtask,setInputTask]=useState("");

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTask(json))
  },[]);

  function handleInputs(e){
    const val=(e.target.value);
    setInputTask(val);
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


      const obj :todo={
      userId:1,
      id: (task.length)+1,
      title:inputtask,
      completed:false
    }

  function addtask(){
    if(inputtask!==""){
      setTask((task)=>[...task,obj]);
      setInputTask('');
    }
  }

  function updateTask(id: number, updatedTitle: string) {
    setTask((tasks) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title: updatedTitle } : task
      );
      return updatedTasks;
    });
  }

  return (
    <div className='App'>
         <h3>React ToDo Application</h3>
         <div>
         
          <AddTodo addtask={addtask} inputVal={inputtask} handleInput={handleInputs}></AddTodo><hr></hr>
          <Button DeleteAll={Deleteall} buttonText="Delete-All"></Button>
          <TaskList tasks={task} Delete={deleteTask} update={updateTask}></TaskList><br></br>
          
         </div>
    </div>
  );
}

export default App;
