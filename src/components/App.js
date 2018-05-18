import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Popup from './Popup';
import NameInput from './NameInput';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  // saveName = () => {
  //   this.setState({ name: e.target.value });
  // }

  render() {
    return (
      <div className="App">
        <Header>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">En KLICK guaca tack</h1>
        </Header>
        <Container>
          <Popup>
            <NameInput />
          </Popup>
          <h2 className="App-intro">
            { this.state.counter }
          </h2>
          <Button handleClick={ this.handleClick }> {/* Fråga: skulle jag lika gärna kunna skriva onClick direkt på här?? */}
            <p>Click me!</p>
          </Button>
        </Container>

      </div>
    );
  }
}

export default App;
