import React from 'react'
import Addbutton from './Addbutton'


function Taskinput() {
  return (
    <div>
      <label >Task:</label><br></br>
      <input type="text" id="task" name="task" />
      <Addbutton></Addbutton>
    </div>
  )
}

export default Taskinput
 