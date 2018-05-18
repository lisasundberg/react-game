import React, { Component } from 'react';

class NameInput extends Component {
  render(){
    return(
      <div className="name-form">
        <input  type="text"
                name="name"
                value={ this.props.value } /><br />
        <button onClick={ this.props.saveName }>Ok</button>
    </div>
    );
  }
}

export default NameInput;
