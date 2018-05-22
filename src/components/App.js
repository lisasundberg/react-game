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

    upgradeOneDisabled: true,
    upgradeTwoDisabled: true,
    upgradeThreeDisabled: true,
    upgradeFourDisabled: true,
    upgradeFiveDisabled: true,

    boughtUpgradeOne: false,
    boughtUpgradeTwo: false,
    boughtUpgradeThree: false,
    boughtUpgradeFour: false,
    boughtUpgradeFive: false,

    feedback: ''

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
      this.setState({ counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter >= 4 && this.state.counter < 30) {
      this.setState({ upgradeOneDisabled: false,
                      counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter > 29 && this.state.counter < 50)  {
      this.setState({ upgradeTwoDisabled: false,
                      counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter > 49 && this.state.counter < 200) {
      this.setState({ upgradeThreeDisabled: false,
                      counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter > 199 && this.state.counter < 500) {
      this.setState({ upgradeFourDisabled: false,
                      counter: this.state.counter + this.state.increment });
    }
    else if(this.state.counter === 500) {
      this.setState({ upgradeFiveDisabled: false,
                      counter: this.state.counter + this.state.increment });
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
    this.setState({ counter: this.state.counter - this.price.upgradeOne,
                    boughtUpgradeOne: true,
                    feedback: 'You bought an onion for $' + this.price.upgradeOne,
                    increment: 2
    });
  },
    upgradeTwo: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeTwo,
                      boughtUpgradeTwo: true,
                      feedback: 'You bought a tomato for $' + this.price.upgradeTwo,
                      increment: 5
      });
    },
    upgradeThree: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeThree,
                      boughtUpgradeThree: true,
                      feedback: 'You bought a garlic clove for $' + this.price.upgradeThree,
                      increment: 10
       });
    },
    upgradeFour: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFour,
                      boughtUpgradeFour: true,
                      feedback: 'You bought a chili for $' + this.price.upgradeFour,
                      increment: 20
        });
    },
    upgradeFive: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFive,
                      boughtUpgradeFive: true,
                      feedback: 'You bought an avocado for $' + this.price.upgradeFive + '! Congratulations! You made guac!'
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
          <h2>
            ${ this.state.counter }
          </h2>
          <Button handleClick={ this.handleClick }>
            <p>Click me!</p>
          </Button>
          <div className="upgrades">
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
            <Upgrade  className="upgrade upgrade_five"
                      disabled={this.state.upgradeFiveDisabled }
                      text="Avocado"
                      price={ this.price.upgradeFive }
                      buy={ this.buy.upgradeFive }
            />
          </div>
          <Feedback>
            <p>{ this.state.feedback }</p>
          </Feedback>
        </Container>

      </div>
    );
  }
}

export default App;
