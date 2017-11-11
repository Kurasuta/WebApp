import React from "react";
import {green, white} from "../color";
import {css} from "glamor";

export default class NavItem extends React.Component {
  render() {
    return (
      <a {...style}>{this.props.children}</a>
    );
  }
}

const style = css({
  color: white,
  lineHeight: '60px',
  display: 'inline-block',
  textDecoration: 'none',
  paddingLeft: 20,
  paddingRight: 20,
  ':hover': {
    backgroundColor: green,
  }
});