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

    feedbackVisible: false,
    feedback: ''

  }

  price = {
    "upgradeOne": 5,
    "upgradeTwo": 30,
    "upgradeThree": 40,
    "upgradeFour": 100,
    "upgradeFive": 500
  }

  increaseCounter = () => {
    if(this.state.counter <= 5) {
      //this.setState({ counter: this.state.counter + this.state.increment });
      this.setState((previousState, props) => {
        return {
          counter: previousState.counter + this.state.increment
        }
      });
    }
    else if(this.state.counter >= 5 && this.state.counter < 30) {
      this.setState((previousState, props) => {
        return {
          upgradeOneDisabled: false,
          counter: this.state.counter + this.state.increment
        }
      });
    }
    else if(this.state.counter >= 30 && this.state.counter < 40)  {
      this.setState((previousState, props) => {
        return {
          upgradeTwoDisabled: false,
          counter: this.state.counter + this.state.increment
        }
      });
    }
    else if(this.state.counter >= 40 && this.state.counter < 100) {
      this.setState((previousState, props) => {
        return {
          upgradeThreeDisabled: false,
          counter: this.state.counter + this.state.increment
        }
      });
    }
    else if(this.state.counter >= 100 && this.state.counter < 500) {
      this.setState((previousState, props) => {
        return {
          upgradeFourDisabled: false,
          counter: this.state.counter + this.state.increment
        }
      });
    }
    else if(this.state.counter >= 500) {
      this.setState((previousState, props) => {
        return {
          upgradeFiveDisabled: false,
          counter: this.state.counter + this.state.increment
        }
      });
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
                    feedbackVisible: true,
                    increment: this.state.increment + 1
    });
  },
    upgradeTwo: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeTwo,
                      boughtUpgradeTwo: true,
                      feedback: 'You bought a tomato for $' + this.price.upgradeTwo,
                      feedbackVisible: true,
                      increment: this.state.increment + 3
      });
      // componentDidMount() {
        // this._interval = setInterval(() => (
        //     this.setState({counter: this.state.counter + this.state.increment })
        // ), 500);
      // }
      // componentWillUnmount() {
      //     clearInterval(this._interval);
      // }
    },
    upgradeThree: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeThree,
                      boughtUpgradeThree: true,
                      feedback: 'You bought a garlic clove for $' + this.price.upgradeThree,
                      increment: this.state.increment + 5
       });
    },
    upgradeFour: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFour,
                      boughtUpgradeFour: true,
                      feedback: 'You bought a chili for $' + this.price.upgradeFour,
                      increment: this.state.increment + 10
        });
    },
    upgradeFive: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFive,
                      boughtUpgradeFive: true,
                      feedback: 'You bought an avocado for $' + this.price.upgradeFive + '! Congratulations! You made guac!',
                      increment: this.state.increment + 20
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
                      disabled={ this.state.upgradeOneDisabled }
                      text="Onion"
                      price={ this.price.upgradeOne }
                      onClick={ this.buy.upgradeOne }
            />
            <Upgrade  className="upgrade two"
                      disabled={ this.state.upgradeTwoDisabled }
                      text="Tomato"
                      price={ this.price.upgradeTwo }
                      onClick={ this.buy.upgradeTwo }
            />
            <Upgrade  className="upgrade three"
                      disabled={ this.state.upgradeThreeDisabled }
                      text="Garlic"
                      price={ this.price.upgradeThree }
                      onClick={ this.buy.upgradeThree }
            />
            <Upgrade  className="upgrade four"
                      disabled={ this.state.upgradeFourDisabled }
                      text="Chili"
                      price={ this.price.upgradeFour }
                      onClick={ this.buy.upgradeFour }
            />
            <Upgrade  className="upgrade five"
                      disabled={this.state.upgradeFiveDisabled }
                      text="Avocado"
                      price={ this.price.upgradeFive }
                      onClick={ this.buy.upgradeFive }
            />
          </div>
          { this.state.feedbackVisible && <Feedback><p>{ this.state.feedback }</p></Feedback> }
        </Container>

      </div>
    );
  }
}

export default App;
