// import React, { Component } from 'react';
import React from 'react';

function NameInput(props){
  return(
    <div className="nameInput">
      <label htmlFor="username">Vad heter du?</label>
      <input type="text" name="username" ref={ props.inputRef } autoComplete="off"/>
      <button onClick={ props.onClick }> OK GO </button>
    </div>
  );
}

export default NameInput;
