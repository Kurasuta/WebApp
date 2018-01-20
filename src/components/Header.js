import React from "react";
import Search from "./Search.js";

import {black} from "../color.js";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Container from "./Container";
import {css} from "glamor";

export default class Header extends React.Component {
  render() {
    return (
      <nav {...style}>
        <Container>
          <a onClick={this.props.showHome}{...css({':hover': {cursor: 'pointer'}})}><Logo/></a>
          <NavItem to={`/`}>Home</NavItem>
          <Search return={this.props.search}/>
        </Container>
      </nav>
    );
  }
}

const style = css({
  backgroundColor: black,
  height: 70,
  paddingRight: 25
});
