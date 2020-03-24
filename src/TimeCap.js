import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import { IdleTimeOutPopup } from './IdlePopup';
import App from './App';

export default class TimeCap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      timeout:1000 * 5 * 1,
      isTimedOut: false
    }

    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  _onAction(e) {
    console.log('user is on the move!', e)
    this.setState({isTimedOut: false})
  }

  _onActive(e) {
    console.log('user is aliiiveee!', e)
    console.log('time remaining', this.idleTimer.getRemainingTime())
    this.setState({isTimedOut: false})
    const isTimedOut = this.state.isTimedOut
      if (isTimedOut) {
          console.log('timed out yo');
      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
  }

  _onIdle(e) {
    console.log('user is a zombie :[', e)
    console.log('last movement recorded', this.idleTimer.getLastActiveTime())
  }

  handleClose() {
    this.setState({showModal: false})
  }

  handleLogout() {
    this.setState({showModal: false})
    console.log('logged out')
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
        {<App/>}

        <IdleTimeOutPopup
            showModal={this.state.showModal}
            handleClose={this.handleClose}
            handleLogout={this.handleLogout}
        />
      </div>
    )
  }
}
