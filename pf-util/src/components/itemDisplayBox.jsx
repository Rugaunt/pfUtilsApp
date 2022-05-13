import React, { Component } from "react";

class ItemDisplayBox extends Component {
  state = {};
  render() {
    const boxStyle = {
      margin: "0cm",
      line: "100%",
    };
    return (
      <React.Fragment>
        {React.createElement(
          "body",
          {
            lang: "en-CA",
            link: "#000080",
            vlink: "#800000",
            dir: "ltr",
          },
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: { boxStyle },
            },
            "Generated Item"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: { boxStyle },
            },
            "ItemName  GPValue"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: { boxStyle },
            },
            "Magic          Level  SlotType"
          )
        )}
      </React.Fragment>
    );
  }
}

export default ItemDisplayBox;
