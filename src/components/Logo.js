import React from "react";
import {green} from "../color.js";
import {css} from "glamor";


export default function Logo() {
    return (
        <div {...css({
            color: green,
            fontSize: 30,
            lineHeight: '60px',
            display: 'inline-block',
            paddingLeft: 20,
            paddingRight: 20
        })}>Kurasuta</div>
    );
}
