import React, { Component } from "react";
/*

*/
class NavBarButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onSelect(this.props.buttonTitle)}>
          {this.props.buttonTitle}
        </button>
      </div>
    );
  }
  onPress() {
    alert("its clicking!");
  }
}

export default NavBarButton;
