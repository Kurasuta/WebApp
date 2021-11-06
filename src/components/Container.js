import React from "react";
import {css} from "glamor";

export default class Container extends React.Component {
    render() {
        return (
            <div {...style}>
                {this.props.children}
            </div>
        );
    }
}
const style = css({
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto'
});
