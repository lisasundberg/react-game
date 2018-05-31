import React from 'react';

function Instructions(){
  return(
    <div className="instructions">
      <h3>Guacamole-spelet</h3>
      <h4>Guaca är målet!</h4>
      <ol>
        <li>Klicka på knappen för att tjäna pengar</li>
        <li>Köp ingredienser</li>
        <li>När du har fått ihop alla ingredienser har du vunnit!</li>
        <p><span className="underline">OBS!</span> För varje köpt ingrediens ökar både klick-värdet och priset på ingrediensen.</p>
      </ol>
    </div>
  );
}

export default Instructions;
