import React from 'react'
import Todo from './Todo';
import DisplayTodo from './DisplayTodo';

interface todo{
  tasks:MyTask[]
  Delete:(e)=>void
  update: (id, newTitle) => void;
}

interface MyTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TaskList(props:todo) {
  const {tasks,Delete,update}=props;
  return (
   
    <div>
    {tasks?.length > 0 && (
        <div>
            {tasks.map((task,index)=> (
            // <Todo tasks={task} DeleteTask={Delete} id={index}></Todo>
            <DisplayTodo tasks={task} DeleteTask={Delete} id={task.id} delId={index} updateTask={update}></DisplayTodo>
              ))}
        </div>            
      )}

    </div>
  )
}
export default TaskList
