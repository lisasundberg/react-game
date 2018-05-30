import React, { Component } from 'react';
import Header from './layout/Header';
import Container from './layout/Container';

import Popup from './intro/Popup';
import Instructions from './intro/Instructions';
import NameInput from './intro/NameInput';

import Counter from './game/Counter';
import Button from './game/Button';
import CurrentIncrement from './game/CurrentIncrement';
import Upgrade from './game/Upgrade';
import Feedback from './game/Feedback';

import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    increment: 1,
    autoIncrement: false,

    instructionsVisible: false,
    feedbackVisible: false,

    upgrade1: 0,
    upgrade2: 0,
    upgrade3: 0,
    upgrade4: 0,
    upgrade5: 0,
    upgrade6: 0,

    upgrade1price: 10,
    upgrade2price: 50,
    upgrade3price: 100,
    upgrade4price: 500,
    upgrade5price: 1000,
    upgrade6price: 1500,

    feedback: ''
  }


  /*****************************************/
  /************* SAVE USERNAME *************/
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
    this.setState({ counter: this.state.counter + this.state.increment });
  }


  /*****************************************/
  /******** BUY UPGRADE-FEEDBACK ***********/
  /*****************************************/

  showFeedback = () => {
    this.setState({
      feedbackVisible: true
    });
    setTimeout(() => {
      this.setState({
        feedbackVisible: false
      });
    }, 3000);
  }


  /*****************************************/
  /************* AUTO INCEMENT *************/
  /*****************************************/

  triggerAutoIncrement = () => {
    if(this.state.autoIncrement){
       clearInterval(this.autoIncrement);
       this.autoIncrement = setInterval(this.increaseCounter, 1000);
     } else {
       clearInterval(this.autoIncrement);
     }
  }


  /*****************************************/
  /************* BUY UPGRADES **************/
  /*****************************************/

  /* When buying an upgrade, show feedback to user,
  /* increase the increment of the counter and
  /* increase price of upgrade */

  buy = {
    upgrade1: () => {
      // const nyttObjekt = Object.assign({}, detGamlaObjektet, { enAvKeysen: value });
      // const upgrade1 = Object.assign({}, upgrade1, { price: this.state.upgrade1price + 5 });
      this.setState({
        feedback: 'Lök -$' + this.state.upgrade1price,
        counter: this.state.counter - this.state.upgrade1price,
        upgrade1: this.state.upgrade1 + 1,
        upgrade1price: this.state.upgrade1price + 5,
        increment: this.state.increment * 2,
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade2: () => {
      this.setState({
        feedback: 'Tomat -$' + this.state.upgrade2price,
        counter: this.state.counter - this.state.upgrade2price,
        upgrade2: this.state.upgrade2 + 1,
        upgrade2price: this.state.upgrade2price * 2,
        increment: (this.state.increment * 1.5),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade3: () => {
      this.setState({
        feedback: 'Vitlök -$' + this.state.upgrade3price,
        counter: this.state.counter - this.state.upgrade3price,
        upgrade3: this.state.upgrade3 + 1,
        upgrade3price: this.state.upgrade3price + 20,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade4: () => {
      this.setState({
        feedback: 'Chili -$' + this.state.upgrade4price,
        counter: this.state.counter - this.state.upgrade4price,
        upgrade4: this.state.upgrade4 + 1,
        upgrade4price: this.state.upgrade4price + 30,
        increment: (this.state.increment * 3),
        autoIncrement: true
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade5: () => {
      this.setState({
        feedback: 'Lime -$' + this.state.upgrade5price,
        counter: this.state.counter - this.state.upgrade5price,
        upgrade5: this.state.upgrade5 + 1,
        upgrade5price: this.state.upgrade5price + 50,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade6: () => {
      this.setState({
        feedback: 'Avokado -$' + this.state.upgrade6price,
        counter: this.state.counter - this.state.upgrade6price,
        upgrade6: this.state.upgrade6 + 1,
        upgrade5price: this.state.upgrade6price + 50,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    }
  }

  /*****************************************/
  /************* REFRESH PAGE **************/
  /*****************************************/

  refreshPage = () => {
    window.location.reload();
  }


  /*****************************************/
  /************* RENDER APP ****************/
  /*****************************************/

  render() {

    return (
      <div className="App">

        <Header username={ this.state.name } />
        <Container>

          { this.state.instructionsVisible &&
            <Popup>
              <Instructions />
              <NameInput onClick={ this.saveName } inputRef={ input => this.username = input } />
            </Popup>
          }

          <CurrentIncrement value={ this.state.increment } />
          <Counter value={ this.state.counter } />
          <Button onClick={ this.increaseCounter } text="Klicka här!" />

          <div className="upgrades">
            <Upgrade  className="upgrade upgrade1"
                      text="Lök"
                      counter={this.state.counter}
                      price={ this.state.upgrade1price }
                      onClick={ this.buy.upgrade1 }
            />
            <Upgrade  className="upgrade upgrade2"
                      text="Tomat"
                      counter={this.state.counter}
                      price={ this.state.upgrade2price }
                      onClick={ this.buy.upgrade2 }
            />

            <Upgrade  className="upgrade upgrade3"
                      text="Vitlök"
                      counter={ this.state.counter }
                      price={ this.state.upgrade3price }
                      onClick={ this.buy.upgrade3 }
            />
            <Upgrade  className="upgrade upgrade4"
                      text="Chili"
                      counter={this.state.counter}
                      price={ this.state.upgrade4price }
                      onClick={ this.buy.upgrade4 }
            />
            <Upgrade  className="upgrade upgrade5"
                      text="Lime"
                      counter={this.state.counter}
                      price={ this.state.upgrade5price }
                      onClick={ this.buy.upgrade5 }
            />

            <Upgrade  className="upgrade upgrade6"
                      text="Avokado"
                      counter={ this.state.counter }
                      price={ this.state.upgrade6price }
                      onClick={ this.buy.upgrade6 }
            />
          </div>
          { this.state.feedbackVisible &&
            <Feedback>
              <p ref={ feedback => this.feedback = feedback }>
                { this.state.feedback }
              </p>
            </Feedback>
          }

          { // When you have collected all ingredients, show success message
            this.state.upgrade1 &&
            this.state.upgrade2 &&
            this.state.upgrade3 &&
            this.state.upgrade4 &&
            this.state.upgrade5 &&
            this.state.upgrade6 &&
            <Popup>
              <h3>Grattis!</h3>
              <p>Du har kommit i guacamål!</p>
              <Button onClick={ this.refreshPage } text="Spela igen!" />
            </Popup>
          }

        </Container>
      </div>
    );
  }
}

export default App;


// function changeState(upgrade){
//   // Grab a copy of the current state
//   let obj = Object.assign({}, this.state);
//   switch(upgrade){
//     case "upgrade1":
//       obj = Object.assign({}, obj[upgrade], { price: this.state.upgrade1price + 5 });
//     case "upgrade2":
//       obj = Object.assign({}, obj[upgrade], { price: this.state.upgrade2price + 5 });
//   }
// }
