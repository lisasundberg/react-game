// import React, { Component } from 'react';
import React from 'react';

// class NameInput extends Component {
//   render(){
//     return(
//       <div className="name-form">
//         <input  type="text"
//                 name="name"
//                 value={ this.props.value } /><br />
//         <button onClick={ this.props.saveName }>Ok</button>
//     </div>
//     );
//   }
// }

function NameInput(props){
  return(
    <div className="nameInput">
      <label htmlFor="username">Vad heter du?</label>
      <input type="text" name="username" ref={ input => this.username = input } autoComplete="off"/>
      <button onClick={ props.onClick }> OK GO </button>
    </div>
  );
}

export default NameInput;
