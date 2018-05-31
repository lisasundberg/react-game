import React from 'react';

function Popup(props){
  return(
    <div id="popup" className="popup">
      <div>
        { props.children }
      </div>
    </div>
  );
}

export default Popup;
