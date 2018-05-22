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
    popupVisible: false,
    upgradeOneVisible: false,
    upgradeTwoVisible: false,
    upgradeThreeVisible: false,
    upgradeFourVisible: false,
    upgradeFiveVisible: false
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });

    if(this.state.counter === 4) {
      this.setState({ upgradeOneVisible: true });
      console.log('You get an onion');
    }
    if(this.state.counter === 9) {
      this.setState({ upgradeTwoVisible: true });
      console.log('You get a tomato')
    }
    if(this.state.counter === 14) {
      this.setState({ upgradeThreeVisible: true });
      console.log('You get a garlic clove')
    }
    if(this.state.counter === 19) {
      this.setState({ upgradeFourVisible: true });
      console.log('You get a chili')
    }
    if(this.state.counter === 24) {
      this.setState({ upgradeFiveVisible: true });
      console.log('You get an avocado! Congratulations! You made it!')
    }
  }

  saveName = (event) => {
    this.setState({
      name: this.username.value,
      popupVisible: false
    });
  }

  render() {
    return (
      <div className="App">
        <Header>
          <h1 className="App-title">En klick guaca tack</h1>
          <p className="username">{ this.state.name }</p>
        </Header>
        <Container>
          { this.state.popupVisible &&
            <Popup>
              <label htmlFor="username">Vad heter du?</label>
              <input type="text" name="username" ref={ input => this.username = input } autoComplete="off"/>
              <button onClick={ this.saveName }> OK GO </button>
            </Popup>
          }
          <h2>
            { this.state.counter }
          </h2>
          <Button handleClick={ this.handleClick }>
            <p>Click me!</p>
          </Button>
          <div className="upgrades">
            { this.state.upgradeOneVisible && <div className="upgrade upgrade_one"></div> }
            {  this.state.upgradeTwoVisible && <div className="upgrade upgrade_two"></div> }
            {  this.state.upgradeThreeVisible && <div className="upgrade upgrade_three"></div> }
            {  this.state.upgradeFourVisible && <div className="upgrade upgrade_four"></div> }
            {  this.state.upgradeFiveVisible && <div className="upgrade upgrade_five"></div> }
          </div>
        </Container>

      </div>
    );
  }
}

export default App;
