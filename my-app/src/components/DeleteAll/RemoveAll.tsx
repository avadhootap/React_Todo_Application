import React from 'react'
import Button from '../Button/Button';

function RemoveAll(props) {
    const {DeleteAll,buttonText}=props;
  return (
    <div>
        <Button onClickFunc={DeleteAll}buttonText={buttonText}></Button>
      
    </div>
  )
}
export default RemoveAll
