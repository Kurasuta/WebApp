import React from "react";
import {green, white} from "../color";
import {css} from "glamor";

export default class NavItem extends React.Component {
  render() {
    return (
      <a onClick={this.props.onClick} {...style}>{this.props.children}</a>
    );
  }
}

const style = css({
  color: white,
  lineHeight: '50px',
  display: 'inline-block',
  textDecoration: 'none',
  paddingLeft: 20,
  paddingRight: 20,
  ':hover': {
    cursor: 'pointer',
    backgroundColor: green,
  }
});