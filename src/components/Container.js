import React from "react";
import {css} from "glamor";

export default function Container(props) {
    return (
        <div {...css({
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto'
        })}>
            {props.children}
        </div>
    );
}
