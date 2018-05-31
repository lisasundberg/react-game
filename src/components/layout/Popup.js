import React from 'react';

function Popup(props){
  return(
    <div className="popup-container">
      <div id="popup" className="popup">
        <div>
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default Popup;
