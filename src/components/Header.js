import React from 'react';

function Header(props){
  return(
    <header className="App-header">
      { props.children }
    </header>
  );
}

export default Header;
