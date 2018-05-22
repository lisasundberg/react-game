import React, { Component } from 'react';

class Upgrade extends Component {
  render(){
    return(
      <div className={ this.props.className }>
        <button disabled={ this.props.disabled }
                onClick={ this.props.buy }>
                <p>{ this.props.text }</p>
                <small>${ this.props.price }</small>
        </button>
      </div>
    );
  }
}

export default Upgrade;
