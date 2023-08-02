import React from 'react'
import Todo from './Todo';
import DisplayTodo from './DisplayTodo';

interface todo{
  tasks:any
  Delete:(e)=>void
}

function TaskList(props:todo) {
  const {tasks,Delete,}=props;
  return (
   
    <div>
    {tasks?.length > 0 && (
        <div>
            {tasks.map((task,index)=> (
            // <Todo tasks={task} DeleteTask={Delete} id={index}></Todo>
            <DisplayTodo tasks={task} DeleteTask={Delete} id={index}></DisplayTodo>
              ))}
        </div>            
      )}

    </div>
  )
}
export default TaskList
