import React from 'react'

function Button(prop) {
    const {onClickFunc,buttonText}=prop;
  return (
    <div>
      <button type='button' id='delete' onClick={onClickFunc}>{buttonText}</button>
    </div>
  )
}

export default Button
