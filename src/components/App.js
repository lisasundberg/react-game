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
    this.setState({ counter: this.state.counter - this.price.upgradeOne,
                    boughtUpgradeOne: true,
                    feedback: 'You bought an onion for $' + this.price.upgradeOne
    });
  },
    upgradeTwo: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeTwo,
                      boughtUpgradeTwo: true,
                      feedback: 'You bought a tomato for $' + this.price.upgradeTwo
      });
    },
    upgradeThree: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeThree,
                      boughtUpgradeThree: true,
                      feedback: 'You bought a garlic clove for $' + this.price.upgradeThree
       });
    },
    upgradeFour: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFour,
                      boughtUpgradeFour: true,
                      feedback: 'You bought a chili for $' + this.price.upgradeFour
        });
    },
    upgradeFive: () => {
      this.setState({ counter: this.state.counter - this.price.upgradeFive,
                      boughtUpgradeFive: true,
                      feedback: 'You bought an avocado for $' + this.price.upgradeFive + '! Congratulations! You made guac!'
      });
    }
  }

  /*****************************************/
  /*************** FEEDBACK ****************/
  /*****************************************/
  // feedback = {
  //   if (this.state.boughtUpgradeOne ){
  //     this.setState({ feedback: 'You bought an onion for' this.price.upgradeOne });
  //   }
  // }



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
            <Upgrade  className="upgrade upgrade_five"
                      disabled={this.state.upgradeFiveDisabled }
                      text="Avocado"
                      price={ this.price.upgradeFive }
                      buy={ this.buy.upgradeFive }
            />
          </div>
          <div className="feedback">
            {/* { this.state.boughtUpgradeOne && <p>You bought an onion for { this.price.upgradeOne }</p> }
            { this.state.boughtUpgradeTwo && <p>You bought a tomato for { this.price.upgradeTwo }</p> }
            { this.state.boughtUpgradeThree && <p>You bought a garlic clove for { this.price.upgradeThree }</p> }
            { this.state.boughtUpgradeFour && <p>You bought a chili for { this.price.upgradFour}</p> }
            { this.state.boughtUpgradeFive && <p>You bought an avocado for { this.price.upgradeFive }! Congratulations you made it!</p> } */}
            <p>{ this.state.feedback }</p>
          </div>
        </Container>

      </div>
    );
  }
}

export default App;
