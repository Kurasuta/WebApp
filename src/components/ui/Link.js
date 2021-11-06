import React from "react";
import {css} from "glamor";
import {Link as BaseLink} from "react-router-dom";

export default class Link extends React.Component {
    render() {
        return (
            <BaseLink {...style} to={this.props.to}>
                {this.props.children}
            </BaseLink>
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