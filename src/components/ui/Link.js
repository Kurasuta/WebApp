import React from "react";
import {css} from "glamor";

export default class Link extends React.Component {
  render() {
    return (
      <a onClick={this.props.onClick}{...style}>{this.props.children}</a>
    );
  }
}

const style = css({
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  }
});