import React, { Component } from "react";
/*

*/
class NavBarButton extends Component {
  constructor(props, buttonTitleIn) {
    super(props);
    this.state = { buttonTitle: buttonTitleIn };
  }

  render() {
    const { onSelect } = this.props;
    const buttonName = this.state.buttonTitle;
    return (
      <div>
        <button onClick={() => this.onPress()}>{this.state.buttonName}</button>
      </div>
    );
  }
  onPress() {
    alert("its clicking!");
  }
}

export default NavBarButton;
