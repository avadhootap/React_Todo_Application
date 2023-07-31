import React from 'react'

function Delete(props) {
    const {DeleteAll}=props;
  return (
    <div>
        <button type='button' id='btn' onClick={()=>{DeleteAll()}}>Delete All</button>
      
    </div>
  )
}
export default Delete
