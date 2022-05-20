import React, { Component } from "react";
/*

*/
class NavBarButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.onPress()}>{this.props.buttonTitle}</button>
      </div>
    );
  }
  onPress() {
    alert("its clicking!");
  }
}

export default NavBarButton;
