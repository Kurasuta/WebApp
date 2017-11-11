import React from "react";

import {green} from "../color.js";
import {css} from "glamor";


export default class Logo extends React.Component {
  render() {
    return (
      <div {...style}>Kurasuta</div>
    );
  }
}


const style = css({
  color: green,
  fontSize: 30,
  lineHeight: '60px',
  display: 'inline-block',
  paddingLeft: 20,
  paddingRight: 20
});