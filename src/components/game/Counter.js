import React from 'react';

function Counter(props){
  return(
    <h2 className="counter">
      ${ props.value }
    </h2>
  );
}

export default Counter;
