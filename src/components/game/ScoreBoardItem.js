import React from 'react';

function ScoreBoardItem(props){
  return(
    <li>{ props.text } <span className="score">{ props.score }</span></li>
  );
}

export default ScoreBoardItem;
