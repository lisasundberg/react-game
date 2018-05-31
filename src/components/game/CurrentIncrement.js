import React from 'react';

function CurrentIncrement(props){
  return(
    <p className="current-increment">Varje klick är värt ${ props.value }</p>
  );
}

export default CurrentIncrement;
