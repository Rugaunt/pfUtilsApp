import React, { Component } from "react";
import NavBarButton from "../navBarButton";
import TestButton from "../testButton";
/*
<h1><nav className="NavBarItems">Creator: {this.props.activeCreator}</h1>
        <NavBarButton buttonTitleIn={this.props.button1} />
        <NavBarButton buttonTitleIn={this.props.button2} />
        <NavBarButton buttonTitleIn={this.props.button3} />
      </nav>

     
*/
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              <TestButton />

              <NavBarButton buttonTitle={this.props.button1} />
              <NavBarButton buttonTitle={this.props.button2} />
              <NavBarButton buttonTitle={this.props.button3} />
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
export default NavBar;
