import React, { Component } from "react";

class TestButton extends Component {
  state = { name: "blue" };
  render() {
    return <button onClick={() => this.onPress()}> {this.state.name}</button>;
  }

  onPress() {
    this.setState({ name: "red" });
  }
}

export default TestButton;
