import React from 'react';

function Button(props){
  return(
    <button className="button-large" onClick={ props.onClick }>
      <p>{ props.text }</p>
    </button>
  );
}

export default Button;
