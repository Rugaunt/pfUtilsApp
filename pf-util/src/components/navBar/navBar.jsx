import React, { Component } from "react";
import NavBarButton from "../navBarButton";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBarItems">
        <h1>Creators: </h1>
        <NavBarButton titleOfCreator="Wondrous Item" />
        <NavBarButton titleOfCreator="Weapon" />
        <NavBarButton titleOfCreator="Armor" />
      </nav>
    );
  }
}
export default NavBar;
