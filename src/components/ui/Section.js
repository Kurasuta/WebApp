import React from "react";
import {green, white} from "../../color.js";
import {css} from "glamor";

export default class Section extends React.Component {
    render() {
        return (
            <section {...style}>
                <header>{this.props.title}</header>
                {this.props.children}
            </section>
        );
    }
}

const style = css({
    marginBottom: 20,
    '> header': {
        margin: 0,
        padding: 10,
        backgroundColor: green,
        color: white,
        fontWeight: 'bold'
    }
});
