import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/todoList/TaskList';
import Taskinput from './components/addTask/Taskinput';



function App() {
  return (
    <div>
         <h3>React ToDo Application</h3>
         <div>
         <TaskList></TaskList>
         </div>
         <div>
          <Taskinput></Taskinput>
         </div>
         
         
    </div>
   
   
  );
}

export default App;
