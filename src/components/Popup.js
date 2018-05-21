import React from 'react';

function Popup(props){
  return(
    <div id="popup" className="popup">
      { props.children }
    </div>
  );
}

export default Popup;
