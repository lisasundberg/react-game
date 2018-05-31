import React from 'react';

function NameInput(props){
  return(
    <div className="nameInput">
      <label htmlFor="username">Vad heter du?</label>
      <input type="text" name="username" ref={ props.inputRef } autoComplete="off"/>
      <button className="button-large" onClick={ props.onClick }> OK GO </button>
    </div>
  );
}

export default NameInput;
