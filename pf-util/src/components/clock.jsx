import React, { Component } from "react";

class Clock extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.props.date.toLocalTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
