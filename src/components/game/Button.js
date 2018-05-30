import React from 'react';

function Button(props){
  return(
    <button className="button-main" onClick={ props.onClick }>
      <p>{ props.text }</p>
    </button>
  );
}

export default Button;
