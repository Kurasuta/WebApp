import React from 'react';
import Search from './Search.js'
import NavItem from './NavItem.js'
import NavText from './NavText.js'

import color from './color.js'

class Nav extends React.Component {
    render() {
        let style = {
            backgroundColor: color.link,
            height: 30,
            display: 'grid',
            gridGap: 10,
            lineHeight: '28px',
            gridTemplateColumns: '100px 1fr 1fr 1fr 600px'
        };

        return (
            <div style={style}>
                <NavText>Kurasuta</NavText>
                <NavItem>Home</NavItem>
                <NavItem>Search</NavItem>
                <NavItem>About</NavItem>
                <Search/>
            </div>
        );
    }
}

export default Nav;
