
function AddTodo(prop) {
  const {handleInput,addtask,inputVal}=prop;
  return (
    <div>
      <label >Task:</label><br></br>
      <input type="text" id="task" name="task" value={inputVal} onChange={handleInput} placeholder={"Add task you want to do..."}/> &nbsp;
      <button type='button' id='btn' onClick={addtask}>ADD</button>
    
    </div>
  )
}

export default AddTodo
 