import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Popup from './Popup';
import Upgrade from './Upgrade';
import Feedback from './Feedback';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    increment: 1,
    popupVisible: false,

    upgradeOne: {
      disabled: true,
      bought: false,
      price: 5
    },
    upgradeTwo: {
      disabled: true,
      bought: false,
      price: 30
    },
    upgradeThree: {
      disabled: true,
      bought: false,
      price: 40
    },
    upgradeFour: {
      disabled: true,
      bought: false,
      price: 100
    },
    upgradeFive: {
      disabled: true,
      bought: false,
      price: 500
    },

    feedback: ''

  }

  /*****************************************/
  /************ INSERT USERNAME ************/
  /*****************************************/
  saveName = (event) => {
    this.setState({
      name: this.username.value,
      popupVisible: false
    });
  }

  /*****************************************/
  /************* CLICK COUNTER *************/
  /*****************************************/
  increaseCounter = () => {
    if(this.state.counter <= 5) {
      this.setState({ counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter >= 5 && this.state.counter < 30) {
      this.enable.upgradeOne();
    }
    else if(this.state.counter >= 30 && this.state.counter < 40) {
      this.enable.upgradeTwo();
    }
    else if(this.state.counter >= 40 && this.state.counter < 100) {
      this.enable.upgradeThree();
    }
    else if(this.state.counter >= 100 && this.state.counter < 500) {
      this.enable.upgradeFour();
    }
    else if(this.state.counter >= 500) {
      this.enable.upgradeFive();
    }
  }

  /******************************************/
  /************* ENABLE UPGRADE *************/
  /******************************************/
  enable = {
    upgradeOne: () => {
      let upgradeOne = {
        disbled: false,
        bought: this.state.upgradeOne.bought,
        price: this.state.upgradeOne.price,
        increment: this.state.increment
      }
      this.setState({
        counter: this.state.counter + this.state.increment,
        upgradeOne
      });
    },
    upgradeTwo: () => {
      let upgradeTwo = {
        disbled: false,
        bought: this.state.upgradeTwo.bought,
        price: this.state.upgradeTwo.price,
        increment: this.state.increment
      }
      this.setState({
        counter: this.state.counter + this.state.increment,
        upgradeTwo
      });
    },
    upgradeThree: () => {
      let upgradeThree = {
        disbled: false,
        bought: this.state.upgradeThree.bought,
        price: this.state.upgradeThree.price,
        increment: this.state.increment
      }
      this.setState({
        counter: this.state.counter + this.state.increment,
        upgradeThree
      });
    },
    upgradeFour: () => {
      let upgradeFour = {
        disbled: false,
        bought: this.state.upgradeFour.bought,
        price: this.state.upgradeFour.price,
        increment: this.state.increment
      }
      this.setState({
        counter: this.state.counter + this.state.increment,
        upgradeFour
      });
    },
    upgradeFive: () => {
      let upgradeFive = {
        disbled: false,
        bought: this.state.upgradeFive.bought,
        price: this.state.upgradeFive.price,
        increment: this.state.increment
      }
      this.setState({
          counter: this.state.counter + this.state.increment,
          upgradeFive
      });
    }
  }


  /*****************************************/
  /************* BUY UPGRADES **************/
  /*****************************************/
  buy = {
    upgradeOne: () => {
      let upgradeOne = {
        feedback: 'You bought an onion for $' + this.state.upgradeOne.price,
        disabled: false,
        bought: true,
        increment: 2,
        price: this.state.upgradeOne.price + 5
      }
      this.setState({
        counter: this.state.counter - this.state.upgradeOne.price,
        increment: this.state.increment + this.state.upgradeOne.increment,
        upgradeOne: upgradeOne
      });
    },
    upgradeTwo: () => {
      let upgradeTwo = {
        feedback: 'You bought a tomato for $' + this.state.upgradeTwo.price,
        disabled: false,
        bought: true,
        increment: 3,
        price: this.state.upgradeTwo.price + 10
      }
      this.setState({
        counter: this.state.counter - this.state.upgradeTwo.price,
        increment: this.state.increment + this.state.upgradeTwo.increment,
        upgradeTwo: upgradeTwo
      });
    },
    upgradeThree: () => {
      let upgradeThree = {
        feedback: 'You bought a garlic clove for $' + this.state.upgradeThree.price,
        disabled: false,
        bought: true,
        increment: 10,
        price: this.state.upgradeThree.price + 20
      }
      this.setState({
        counter: this.state.counter - this.state.upgradeThree.price,
        increment: this.state.increment + this.state.upgradeThree.increment,
        upgradeThree: upgradeThree
      });
    },
    upgradeFour: () => {
      let upgradeFour = {
        feedback: 'You bought a chili for $' + this.state.upgradeFour.price,
        disabled: false,
        bought: true,
        increment: 20,
        price: this.state.upgradeFour.price + 30
      }
      this.setState({
        counter: this.state.counter - this.state.upgradeFour.price,
        increment: this.state.increment + this.state.upgradeFour.increment,
        upgradeFour: upgradeFour
      });
    },
    upgradeFive: () => {
      let upgradeFive = {
        feedback: 'You bought an avocado for $' + this.state.upgradeThree.price,
        disabled: false,
        bought: true,
        increment: 30,
        price: this.state.upgradeFive.price + 20
      }
      this.setState({
        counter: this.state.counter - this.state.upgradeFive.price,
        increment: this.state.increment + this.state.upgradeFive.increment,
        upgradeFive: upgradeFive
      });
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
          <p>För varje klick tjänar du ${ this.state.increment }</p>
          <h2>
            ${ this.state.counter }
          </h2>
          <Button onClick={ this.increaseCounter }>
            <p>Click me!</p>
          </Button>
          <div className="upgrades">
            <Upgrade  className="upgrade one"
                      disabled={ this.state.upgradeOne.disabled }
                      text="Onion"
                      price={ this.state.upgradeOne.price }
                      onClick={ this.buy.upgradeOne }
            />
            <Upgrade  className="upgrade two"
                      disabled={ this.state.upgradeTwo.disabled }
                      text="Tomato"
                      price={ this.state.upgradeTwo.price }
                      onClick={ this.buy.upgradeTwo }
            />

            <Upgrade  className="upgrade three"
                      disabled={ this.state.upgradeThree.disabled }
                      text="Garlic"
                      price={ this.state.upgradeThree.price }
                      onClick={ this.buy.upgradeThree }
            />
            <Upgrade  className="upgrade four"
                      disabled={ this.state.upgradeFour.disabled }
                      text="Chili"
                      price={ this.state.upgradeFour.price }
                      onClick={ this.buy.upgradeFour }
            />

            <Upgrade  className="upgrade five"
                      disabled={ this.state.upgradeFive.disabled }
                      text="Garlic"
                      price={ this.state.upgradeFive.price }
                      onClick={ this.buy.upgradeFive }
            />
          </div>
          { this.state.feedbackVisible && <Feedback><p>{ this.state.feedback }</p></Feedback> }
        </Container>

      </div>
    );
  }
}

export default App;
