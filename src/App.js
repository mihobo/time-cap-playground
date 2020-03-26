import React from 'react';
import TimeCap from './TimeCap'
import radiation from './radiation.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { ClickMeButton } from './ClickMeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  onClick = () => {
        console.log('Thank you for clicking me');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={radiation} className="App-logo" alt="logo" />
          <p>
            This is not a drill. I repeat. THIS IS NOT A DRILL.
          </p>
          <BrowserRouter>
            <Route exact path="/" component={ClickMeButton} />
            <Route path='/' render={(props) => <TimeCap {...props} /> } />
          </BrowserRouter>
        </header>
      </div>
    );
  }

}

export default App;
