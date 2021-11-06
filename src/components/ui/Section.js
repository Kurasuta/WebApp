import React from "react";
import {green, white} from "../../color.js";
import {css} from "glamor";

export default function Section(props) {
    return (
        <section {...css({
            marginBottom: 20,
            '> header': {
                margin: 0,
                padding: 10,
                backgroundColor: green,
                color: white,
                fontWeight: 'bold'
            }
        })}>
            <header>{props.title}</header>
            {props.children}
        </section>
    );
}
