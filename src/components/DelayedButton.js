// Code DelayedButton Component Here
import React, { Component } from "react";
class DelayedButton extends Component {
  createTimer = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
      console.log(this.props)
    return <button onClick={this.createTimer}>DelayedButton</button>;
  }
}
export default DelayedButton;
