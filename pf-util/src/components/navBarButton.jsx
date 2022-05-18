import React, { Component } from "react";

class NavBarButton extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onActivate(this.props.titleOfCreator)}
        className="btn btn-secondary m-2"
      >
        {this.props.titleOfCreator}
      </button>
    );
  }

  onActivate = () => {
    this.setState({ activeCreator: titleOfCreator });
  };
}

export default NavBarButton;
