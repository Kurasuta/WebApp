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
            <nav {...navStyle}>
                <Container>
                    <ul {...containerStyle}>
                        <li><a onClick={this.props.showHome}{...css({':hover': {cursor: 'pointer'}})}><Logo/></a></li>
                        <li><img src="/logo.png" width="42" height="42" {...logoStyle} alt="Kurasuta-Logo"/></li>
                        <li><NavItem to={`/`}>Home</NavItem></li>
                        <li><NavItem to={`/candy`}>Candy</NavItem></li>
                        <li><NavItem to={`/people`}>People</NavItem></li>
                        <li style={{paddingLeft: 10}}><Search/></li>
                    </ul>
                </Container>
            </nav>
        );
    }
}

const navStyle = css({
    backgroundColor: black,
    paddingRight: 25
});

const logoStyle = css({
    position: 'relative',
    right: 10
});

const containerStyle = css({
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    '> li': {
        alignSelf: 'center',
    }
});
