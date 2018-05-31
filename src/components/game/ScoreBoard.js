import React from 'react';

function ScoreBoard(props){
  return(
    <div className="scoreBoard">
      { props.children }
    </div>
  );
}

export default ScoreBoard;
