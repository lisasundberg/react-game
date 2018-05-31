import React from 'react';

function ScoreBoard(props){
  return(
    <div className="score-board">
      <h4>Score</h4>
      { props.children }
    </div>
  );
}

export default ScoreBoard;
