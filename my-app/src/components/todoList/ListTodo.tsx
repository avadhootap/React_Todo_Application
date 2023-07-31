import React from 'react'
import Todo from './Todo';
function TaskList(props) {
  const {tasks,Delete}=props;
  return (
   
    <div>
    {tasks?.length > 0 && (
        <div>
            {tasks.map((task,index) => (
            <Todo tasks={task} indexVal={index} DeleteTask={Delete}></Todo>
              ))}
        </div>            
      )}

    </div>
  )
}
export default TaskList
