import React, { Component } from 'react';
import Header from './layout/Header';
import Container from './layout/Container';
import Popup from './layout/Popup';

import Instructions from './intro/Instructions';
import NameInput from './intro/NameInput';

import Counter from './game/Counter';
import Button from './game/Button';
import CurrentIncrement from './game/CurrentIncrement';
import Upgrade from './game/Upgrade';
import ScoreBoard from './game/ScoreBoard';
import ScoreBoardItem from './game/ScoreBoardItem';
import Feedback from './game/Feedback';

import Guacamole from './../images/guacamole.jpg';
import './../css/App.css';

class App extends Component {
  state = {
    name: '',
    counter: 0,
    increment: 1,
    autoIncrement: false,

    instructionsVisible: true,
    feedbackVisible: false,

    upgrade1: 0,
    upgrade2: 0,
    upgrade3: 0,
    upgrade4: 0,
    upgrade5: 0,
    upgrade6: 0,

    upgrade1price: 20,
    upgrade2price: 100,
    upgrade3price: 500,
    upgrade4price: 1200,
    upgrade5price: 5000,
    upgrade6price: 10000,

    feedback: ''
  }


  /******************************************/
  /************ 1. SAVE USERNAME ************/
  /******************************************/

  saveName = (event) => {
    this.setState({
      name: this.username.value,
      instructionsVisible: false
    });
  }


  /*******************************************/
  /************* 2. CLICK COUNTER ************/
  /*******************************************/

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + this.state.increment });
  }


  /********************************************/
  /************* 3. BUY UPGRADES **************/
  /********************************************/

  /* When buying an upgrade, show feedback to user,
  /* increase the increment of the counter and
  /* increase price of upgrade */

  buy = {
    upgrade1: () => {
      this.setState({
        feedback: 'Lök -$' + this.state.upgrade1price,
        counter: this.state.counter - this.state.upgrade1price,
        upgrade1: this.state.upgrade1 + 1,
        upgrade1price: this.state.upgrade1price * 2,
        increment: this.state.increment * 2,
        autoIncrement: false
      }, this.triggerAutoIncrement, this.checkIfWin);
      this.showFeedback();
    },
    upgrade2: () => {
      this.setState({
        feedback: 'Tomat -$' + this.state.upgrade2price,
        counter: this.state.counter - this.state.upgrade2price,
        upgrade2: this.state.upgrade2 + 1,
        upgrade2price: this.state.upgrade2price + 50,
        increment: (this.state.increment * 2),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    },
    upgrade3: () => {
      this.setState({
        feedback: 'Vitlök -$' + this.state.upgrade3price,
        counter: this.state.counter - this.state.upgrade3price,
        upgrade3: this.state.upgrade3 + 1,
        upgrade3price: this.state.upgrade3price + 200,
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
        upgrade4price: this.state.upgrade4price * 2,
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
        upgrade5price: this.state.upgrade5price * 2,
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
        upgrade6price: this.state.upgrade6price * 3,
        increment: (this.state.increment * 3),
        autoIncrement: false
      }, this.triggerAutoIncrement);
      this.showFeedback();
    }
  }

  /********************************************/
  /************* 4. BUY-FEEDBACK **************/
  /********************************************/

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

  /********************************************/
  /************* 5. AUTO INCEMENT *************/
  /********************************************/

  triggerAutoIncrement = () => {
    if(this.state.autoIncrement){
       clearInterval(this.autoIncrement);
       this.autoIncrement = setInterval(this.increaseCounter, 500);
     } else {
       clearInterval(this.autoIncrement);
     }
  }


  /********************************************/
  /************* 6. REFRESH PAGE **************/
  /********************************************/

  refreshPage = () => {
    window.location.reload();
  }


  /********************************************/
  /************* 7. RENDER APP ****************/
  /********************************************/

  render() {
    // Destructure state variables
    const { upgrade1, upgrade2, upgrade3, upgrade4, upgrade5, upgrade6,
            upgrade1price, upgrade2price, upgrade3price, upgrade4price,
            upgrade5price, upgrade6price,
            counter, increment
          } = this.state;

    // Check if user has collected all upgrades
    this.userWon = '';
    if(upgrade1 && upgrade2 && upgrade3 && upgrade4 && upgrade5 && upgrade6) {
      this.userWon = true;
    }

    return (
      <div className="App">
        <Header />
        <Container>
          { this.state.instructionsVisible &&
            <Popup>
              <Instructions />
              <NameInput onClick={ this.saveName } inputRef={ input => this.username = input } />
            </Popup>
          }
          <CurrentIncrement value={ increment } />

          <div className="container__inner">
            <Counter value={ counter } />
            <Button onClick={ this.increaseCounter } text="Klicka här!" />

            { this.state.feedbackVisible &&
              <Feedback>
                <p ref={ feedback => this.feedback = feedback }>
                  { this.state.feedback }
                </p>
              </Feedback>
            }

            <div className="upgrades">
              <Upgrade  className="upgrade upgrade1"
                        text="Lök"
                        counter={ counter }
                        price={ upgrade1price }
                        onClick={ this.buy.upgrade1 }
              />
              <Upgrade  className="upgrade upgrade2"
                        text="Tomat"
                        counter={ counter }
                        price={ upgrade2price }
                        onClick={ this.buy.upgrade2 }
              />

              <Upgrade  className="upgrade upgrade3"
                        text="Vitlök"
                        counter={ counter }
                        price={ upgrade3price }
                        onClick={ this.buy.upgrade3 }
              />
              <Upgrade  className="upgrade upgrade4"
                        text="Chili🔥"
                        counter={ counter }
                        price={ upgrade4price }
                        onClick={ this.buy.upgrade4 }
              />
              <Upgrade  className="upgrade upgrade5"
                        text="Lime"
                        counter={ counter }
                        price={ upgrade5price }
                        onClick={ this.buy.upgrade5 }
              />

              <Upgrade  className="upgrade upgrade6"
                        text="Avokado"
                        counter={ counter }
                        price={ upgrade6price }
                        onClick={ this.buy.upgrade6 }
              />
            </div>
          </div>
          <ScoreBoard username={ this.state.name }>
            <ScoreBoardItem text="Lök:" score={ upgrade1 } />
            <ScoreBoardItem text="Tomat:" score={ upgrade2 } />
            <ScoreBoardItem text="Vitlök:" score={ upgrade3 } />
            <ScoreBoardItem text="Chili🔥:" score={ upgrade4 } />
            <ScoreBoardItem text="Lime:" score={ upgrade5 } />
            <ScoreBoardItem text="Avokado:" score={ upgrade6 } />
          </ScoreBoard>

          { // When the user has collected all upgrades, show success message
            this.userWon &&
            <Popup>
              <h3 class="script">Grattis!</h3>
              <p>Kolla vilken god guaca du har gjort :-)</p>
              <img src={ Guacamole } alt="Guacamole" className="guacamole" />
              <Button onClick={ this.refreshPage } text="Spela igen!" />
            </Popup>
          }

        </Container>
      </div>
    );
  }
}

export default App;
