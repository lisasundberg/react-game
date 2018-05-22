import React, { Component } from 'react';

class Upgrade extends Component {
  render(){
    return(
      <div className={ this.props.className }>
        <button disabled={ this.props.disabled } onClick={ this.props.buy }> { this.props.text } </button>
      </div>
    );
  }
}

export default Upgrade;
