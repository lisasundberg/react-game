import React from 'react';

function Button(props){
  return(
    <button className="button-main" onClick={ props.onClick }>
      { props.children }
    </button>
  );
}

export default Button;
