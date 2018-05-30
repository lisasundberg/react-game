import React from 'react';

function Header(props){
  return(
    <header className="App-header">
        <h1 className="App-title">Guacamole-spelet</h1>
        <p className="username">{ props.username }</p>
    </header>
  );
}

export default Header;
