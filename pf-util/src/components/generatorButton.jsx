import React, { Component } from "react";
import { ToggleButton } from "react-bootstrap";

class GeneratorButton extends Component {
  state = {};
  render() {
    return <ToggleButton>this.props.name</ToggleButton>;
  }
}

export default GeneratorButton;
