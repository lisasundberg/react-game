import React, { Component } from 'react';
// import ReactInterval from 'react-interval';
import Header from './Header';
import Container from './Container';
import Button from './Button';
import Popup from './Popup';
// import NameInput from './NameInput';
import Upgrade from './Upgrade';
import Feedback from './Feedback';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    increment: 1,

    popupVisible: false,
    feedbackVisible: false,

    upgrade1: {
      price: 10
    },
    upgrade2: {
      price: 50
    },
    upgrade3: {
      price: 100
    },
    upgrade4: {
      price: 500
    },
    upgrade5: {
      price: 1000
    },
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
  /**************** FEEDBACK ***************/
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
  /************* BUY UPGRADES **************/
  /*****************************************/

  /* When buying an upgrade, show feedback to user,
  /* increase the increment of the counter and
  /* increase price of upgrade */

  buy = {
    upgrade1: () => {
      // const nyttObjekt = Object.assign({}, detGamlaObjektet, { enAvKeysen: value });
      // const upgrade1 = Object.assign({}, upgrade1, { price: this.state.upgrade1.price + 5 });
      let upgrade1 = {
        disabled: false,
        price: this.state.upgrade1.price + 5
      }
      this.setState({
        feedback: 'Lök -$' + this.state.upgrade1.price,
        counter: this.state.counter - this.state.upgrade1.price,
        increment: (this.state.increment * 2),
        upgrade1
      });
      // setInterval(() => {
      //   this.setState({
      //     counter: this.state.counter + this.state.increment
      //   });
      // }, 1000);
      this.showFeedback();
    },
    upgrade2: () => {
      let upgrade2 = {
        disabled: false,
        price: this.state.upgrade2.price + 10
      }
      this.setState({
        feedback: 'Tomat -$' + this.state.upgrade2.price,
        counter: this.state.counter - this.state.upgrade2.price,
        increment: (this.state.increment * 1.5),
        upgrade2
      });
      this.showFeedback();
    },
    upgrade3: () => {
      let upgrade3 = {
        disabled: false,
        price: this.state.upgrade3.price + 20
      }
      this.setState({
        feedback: 'Vitlök -$' + this.state.upgrade3.price,
        counter: this.state.counter - this.state.upgrade3.price,
        increment: (this.state.increment * 3),
        upgrade3
      });
      this.showFeedback();
    },
    upgrade4: () => {
      let upgrade4 = {
        disabled: false,
        price: this.state.upgrade4.price + 30
      }
      this.setState({
        feedback: 'Chili -$' + this.state.upgrade4.price,
        counter: this.state.counter - this.state.upgrade4.price,
        increment: (this.state.increment * 3),
        upgrade4
      });
      this.showFeedback();
    },
    upgrade5: () => {
      let upgrade5 = {
        disabled: false,
        price: this.state.upgrade5.price + 20
      }
      this.setState({
        feedback: 'Avokado -$' + this.state.upgrade3.price,
        counter: this.state.counter - this.state.upgrade5.price,
        increment: (this.state.increment * 3),
        upgrade5
      });
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
              <h3>Guacamole-spelet</h3>
              <p>1.<br />Klicka på knappen för att tjäna pengar att köpa ingredienser för.</p>
              <p>2.<br />För varje ingrediens du köper tjänar du mer pengar per klick.</p>
              <p>3.<br />Ingrediensen blir dyrare ju fler gånger du köper den, men gör också att du tjänar mer per klick.</p>
              <p>4.<br />När du fått ihop alla ingredienser har du kommit i (guaca)mål! ( 😬)</p>
              <div className="nameInput">
                <label htmlFor="username">Vad heter du?</label>
                <input type="text" name="username" ref={ input => this.username = input } autoComplete="off"/>
                <button onClick={ this.saveName }> OK GO </button>
              </div>
            </Popup>
          }
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
                      price={ this.state.upgrade1.price }
                      onClick={ this.buy.upgrade1 }
            />
            <Upgrade  className="upgrade upgrade2"
                      text="Tomat"
                      counter={this.state.counter}
                      price={ this.state.upgrade2.price }
                      onClick={ this.buy.upgrade2 }
            />

            <Upgrade  className="upgrade upgrade3"
                      text="Vitlök"
                      counter={ this.state.counter }
                      price={ this.state.upgrade3.price }
                      onClick={ this.buy.upgrade3 }
            />
            <Upgrade  className="upgrade upgrade4"
                      text="Chili"
                      counter={this.state.counter}
                      price={ this.state.upgrade4.price }
                      onClick={ this.buy.upgrade4 }
            />

            <Upgrade  className="upgrade upgrade5"
                      text="Avokado"
                      counter={ this.state.counter }
                      price={ this.state.upgrade5.price }
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
//       obj = Object.assign({}, obj[upgrade], { price: this.state.upgrade1.price + 5 });
//     case "upgrade2":
//       obj = Object.assign({}, obj[upgrade], { price: this.state.upgrade2.price + 5 });
//   }
// }
