import React, { Component } from 'react';


class Upgrade extends Component {
  state = {
    disabled: false,
    bought: false,
    price: this.props.price
  }

  render(){
    const { className, counter, onClick, text, price } = this.props;
    return(
      <div className={ className }>
        <button disabled={ counter < price }
                onClick={ onClick }>
                <p>{ text }</p>
                <small>${ price }</small>
        </button>
      </div>
    );
  }
}

export default Upgrade;
