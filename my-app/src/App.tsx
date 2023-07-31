import React from 'react';
import logo from './logo.svg';
import './App.css';
import Taskinput from './components/addTask/AddTodo';
import Delete from './components/DeleteAll/Delete';



function App() {
  return (
    <div className='App'>
         <h3>React ToDo Application</h3>
         <div>
          <Taskinput></Taskinput>
         </div>
    </div>
   
   
  );
}

export default App;
