import React, { Component } from "react";
import NavBarButton from "../navBarButton";

class NavBar extends Component {
  constructor() {
    super(props);
    this.setState({ button1: this.props.button1 });
    this.setState({ button2: this.props.button2 });
    this.setState({ button3: this.props.button3 });
  }

  render() {
    return (
      <nav className="NavBarItems">
        <h1>Creator: {this.props.activeCreator}</h1>
        <NavBarButton titleOfCreator={button1} />
        <NavBarButton titleOfCreator={button2} />
        <NavBarButton titleOfCreator={button3} />
      </nav>
    );
  }
}
export default NavBar;
