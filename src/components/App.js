import React, { Component } from 'react';
import Header from './layout/Header';
import Container from './layout/Container';

import Popup from './intro/Popup';
import Instructions from './intro/Instructions';
import NameInput from './intro/NameInput';

import Button from './game/Button';
import Upgrade from './game/Upgrade';
import Feedback from './game/Feedback';

import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    increment: 1,
    autoIncrement: false,

    popupVisible: true,
    feedbackVisible: false,

    upgrade1price: 10,
    upgrade2price: 50,
    upgrade3price: 100,
    upgrade4price: 500,
    upgrade5price: 1000,

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
    // let autoIncrement = setInterval(this.increaseCounter, 1000);
    // this.state.autoIncrement ? autoIncrement : autoIncrement = false;

    let autoIncrement;
    if(this.state.autoIncrement) {
      let autoIncrement = setInterval(this.increaseCounter, 1000);
    } else {
      autoIncrement = false;
    }

    // var handle = setInterval(drawAll, 20);
    //
    // // When you want to cancel it:
    // clearInterval(handle);
    // handle = 0; // I just do this so I know I've cleared the interval

    // if (this.state.autoIncrement) {
    //     setInterval(() => {
    //       this.setState({
    //         counter: this.state.counter + this.state.increment
    //       });
    //     }, 1000);
    //   }
    // else {
    //   clearInterval();
    // }
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
        upgrade1price: this.state.upgrade1price + 5,
        increment: this.state.increment * 2,
        autoIncrement: true
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade2: () => {
      this.setState({
        feedback: 'Tomat -$' + this.state.upgrade2price,
        counter: this.state.counter - this.state.upgrade2price,
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
        upgrade4price: this.state.upgrade4price + 30,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade5: () => {
      this.setState({
        feedback: 'Avokado -$' + this.state.upgrade3price,
        counter: this.state.counter - this.state.upgrade5price,
        upgrade5price: this.state.upgrade5price + 20,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    }
  }

  render() {
    return (
      <div className="App">
        <Header>
          <h1 className="App-title">Guacamole-spelet</h1>
          <p className="username">{ this.state.name }</p>
        </Header>
        <Container>
          { this.state.popupVisible &&
            <Popup>
              <Instructions />
              <NameInput onClick={ this.saveName } inputRef={ input => this.username = input } />
            </Popup> }
          <p>Varje klick är värt ${ this.state.increment }</p>
          <h2>
            ${ this.state.counter }
          </h2>
          <Button onClick={ this.increaseCounter }>
            <p>Klicka här!</p>
          </Button>

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
                      text="Avokado"
                      counter={ this.state.counter }
                      price={ this.state.upgrade5price }
                      onClick={ this.buy.upgrade5 }
            />
          </div>
          { this.state.feedbackVisible &&
              <Feedback>
                <p ref={ feedback => this.feedback = feedback }>
                  { this.state.feedback }
                </p>
              </Feedback>
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
