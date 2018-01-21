import React from "react";
import {green, white} from "../color";
import {css} from "glamor";
import {Link} from "react-router-dom";

export default class NavItem extends React.Component {
  render() {
    return (
      <Link {...style} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

const style = css({
  color: white + ' !important',
  borderRadius: 3,
  lineHeight: '45px',
  display: 'inline-block',
  textDecoration: 'none',
  paddingLeft: 20,
  paddingRight: 20,
  ':hover': {
    cursor: 'pointer',
    backgroundColor: green,
  }
});