import React from 'react';

class NavText extends React.Component {
    constructor(props) {
        super(props);
        this.caption = props.caption;
    }

    render() {
        const style = {
            paddingLeft: 5,
        };
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
}

export default NavText;
