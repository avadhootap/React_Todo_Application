import React from 'react'

interface btn{
  DeleteAll:()=>void
  buttonText:string
}

function Button(prop:btn) {
    const {DeleteAll,buttonText}=prop;
  return (
    <div>
      <button type='button' id='delete' onClick={DeleteAll}>{buttonText}</button>
    </div>
  )
}

export default Button
