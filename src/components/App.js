import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Popup from './Popup';
//import NameInput from './NameInput';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    popupVisible: true
  }

  // hide = (element) => {
  //   element.classList.add("hidden");
  // }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  saveName = (event) => {
    this.setState({ name: this.username.value, popupVisible: false });
    // let popup = document.getElementById('popup');
    // console.log(this.popup);
    // this.hide(popup);
  }

  render() {
    return (
      <div className="App">
        <Header>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">En klick guaca tack</h1>
          <p className="username">{ this.state.name }</p>
        </Header>
        <Container>
          { this.state.popupVisible &&
            <Popup>
              <label htmlFor="username">Vad heter du?</label>
              <input type="text" name="username" ref={ input => this.username = input } />
              <button onClick={ this.saveName }> OK GO </button>
            </Popup> }
          <h2>
            { this.state.counter }
          </h2>
          <Button handleClick={ this.handleClick }>
            <p>Click me!</p>
          </Button>
        </Container>

      </div>
    );
  }
}

export default App;
