import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Container from './Container';
import './../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">En KLICK guaca tack</h1>
        </Header>
        <Container>
          <p className="App-intro">
            Klicka på mig!
            GUACA ÄR MÅLET
          </p>
        </Container>

      </div>
    );
  }
}

export default App;
