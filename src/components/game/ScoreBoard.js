import React from 'react';

function ScoreBoard(props){
  return(
    <div className="score-board">
      <h4>{props.username}'s Score</h4>
        <ul className="boughtUpgrades">
          { props.children }
        </ul>
    </div>
  );
}

export default ScoreBoard;
