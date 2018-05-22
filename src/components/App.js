import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Popup from './Popup';
import Upgrade from './Upgrade';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    popupVisible: false,
    upgradeOneDisabled: true,
    upgradeTwoDisabled: true,
    upgradeThreeDisabled: true,
    upgradeFourDisabled: true,
    upgradeFiveDisabled: true,
  }

  price = {
    "upgradeOne": 5,
    "upgradeTwo": 30,
    "upgradeThree": 40,
    "upgradeFour": 100,
    "upgradeFive": 500
  }

  handleClick = () => {
    if(this.state.counter < 4) {
      this.setState({ counter: this.state.counter + 1 });
    }
    else if(this.state.counter >= 4 && this.state.counter < 30) {
      this.setState({ upgradeOneDisabled: false,
                      counter: this.state.counter + 2 });
    }
    else if(this.state.counter >= 30 && this.state.counter < 50)  {
      this.setState({ upgradeTwoDisabled: false,
                      counter: this.state.counter + 5 });
    }
    else if(this.state.counter >= 50 && this.state.counter < 200) {
      this.setState({ upgradeThreeDisabled: false,
                      counter: this.state.counter + 10 });
    }
    else if(this.state.counter >= 200 && this.state.counter < 500) {
      this.setState({ upgradeFourDisabled: false,
                      counter: this.state.counter + 20  });
    }
    else if(this.state.counter === 500) {
      this.setState({ upgradeFiveDisabled: false,
                      counter: this.state.counter + 20 });
    }
  }

  saveName = (event) => {
    this.setState({
      name: this.username.value,
      popupVisible: false
    });
  }


  /*****************************************/
  /************* BUY UPGRADES **************/
  /*****************************************/
  buy = {
    upgradeOne: () => {
    this.setState({ counter: this.state.counter - 5 });
    console.log('You bought an onion for 5 points!');
  },
    upgradeTwo: () => {
      this.setState({ counter: this.state.counter - 30 });
      console.log('You bought a tomato for 30 points!');
    },
    upgradeThree: () => {
      this.setState({ counter: this.state.counter - 40 });
      console.log('You bought a garlic clove for 40 points!');
    },
    upgradeFour: () => {
      this.setState({ counter: this.state.counter - 100 });
      console.log('You bought a chili for 100 points!');
    },
    upgradeFive: () => {
      this.setState({ counter: this.state.counter - 500 });
      console.log('You bought an avocado for 500 points! Congratulations! You got guac!');
    }
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
            {/* { this.state.upgradeOneVisible && <Upgrade className="upgrade upgrade_one" disabled={true} text="Tomato" /> }
            {  this.state.upgradeTwoVisible && <div className="upgrade upgrade_two"></div> }
            {  this.state.upgradeThreeVisible && <div className="upgrade upgrade_three"></div> }
            {  this.state.upgradeFourVisible && <div className="upgrade upgrade_four"></div> }
            {  this.state.upgradeFiveVisible && <div className="upgrade upgrade_five"></div> } */}
            <Upgrade  className="upgrade upgrade_one"
                      disabled={ this.state.upgradeOneDisabled }
                      text="Onion"
                      price={ this.price.upgradeOne }
                      buy={ this.buy.upgradeOne }
            />
            <Upgrade  className="upgrade upgrade_two"
                      disabled={ this.state.upgradeTwoDisabled }
                      text="Tomato"
                      price={ this.price.upgradeTwo }
                      buy={ this.buy.upgradeTwo }
            />
            <Upgrade  className="upgrade upgrade_three"
                      disabled={ this.state.upgradeThreeDisabled }
                      text="Garlic"
                      price={ this.price.upgradeThree }
                      buy={ this.buy.upgradeThree }
            />
            <Upgrade  className="upgrade upgrade_four"
                      disabled={ this.state.upgradeFourDisabled }
                      text="Chili"
                      price={ this.price.upgradeFour }
                      buy={ this.buy.upgradeFour }
            />
            <Upgrade className="upgrade upgrade_five"
                    disabled={this.state.upgradeFiveDisabled }
                    text="Avocado"
                    price={ this.price.upgradeOne }
                    buy={ this.buy.upgradeFive }
            />
          </div>
        </Container>

      </div>
    );
  }
}

export default App;
