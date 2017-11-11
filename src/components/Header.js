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
          <Logo/>
          <NavItem>Home</NavItem>
          <NavItem>Search</NavItem>
          <NavItem>About</NavItem>
          <Search/>
        </Container>
      </nav>
    );
  }
}

const style = css({
  backgroundColor: black,
  height: 60,
  paddingRight: 25
});