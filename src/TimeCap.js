import React from 'react';
import IdleTimer from 'react-idle-timer';
import { IdleTimeOutPopup } from './IdlePopup';
import './App.css';

class TimeCap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      timeout: 1000 * 5 * 1,
      isTimedOut: false
    }

    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)

    this.handleRevive = this.handleRevive.bind(this)
    this.handleDieOut = this.handleDieOut.bind(this)
  }

  _onAction(e) {
    console.log('user is on the move!', e)
    this.setState({isTimedOut: false})
  }

  _onActive(e) {
    console.log('user is aliiiveee!', e)
    console.log('time remaining', this.idleTimer.getRemainingTime())
    this.setState({isTimedOut: false})
  }

  _onIdle(e) {
    console.log('user is a zombie :[', e)
    console.log('last movement recorded', this.idleTimer.getLastActiveTime())
    const isTimedOut = this.state.isTimedOut
      if (isTimedOut) {
          console.log('timed out yo');
      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
  }

  handleRevive() {
    this.setState({showModal: false})
    console.log('you have been revived.')
  }

  handleDieOut() {
    this.setState({showModal: false})
    console.log('you are dead. better luck next time.')
  }

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout} />

          <IdleTimeOutPopup
              showModal={this.state.showModal}
              handleRevive={this.handleRevive}
              handleDieOut={this.handleDieOut}
          />
    </div>
    )
  }
}

export default TimeCap
