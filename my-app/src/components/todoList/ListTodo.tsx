import React from 'react'
function TaskList(props) {
  const {tasks,Delete}=props;
  return (
   
    <div>
    {tasks?.length > 0 && (
        <div>
            {tasks.map((task,index) => (
            <li key={index}>{task} <button type='button' id='btn' onClick={()=>Delete(index)}>Delete</button></li>
              ))}
        </div>            
      )}

    </div>
  )
}
export default TaskList
