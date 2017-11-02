import React from 'react';

class NavItem extends React.Component {
    render() {
        const style = {
            verticalAlign: 'middle',
            textAlign: 'center',
        };
        return (
            <a style={style} href="#">{this.props.children}</a>
        );
    }
}

export default NavItem;
