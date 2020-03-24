import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { ClickMeButton } from './ClickMeButton';
import './App.css';

class App extends React.Component {
  onClick = () => {
        console.log('Thank you for clicking me');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Herro World
          </p>
          <BrowserRouter>
            <Route exact path="/" component={ClickMeButton} />
          </BrowserRouter>
        </header>
      </div>
    );
  }

}

export default App;
