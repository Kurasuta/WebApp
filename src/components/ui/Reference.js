import React from "react";
import {css} from "glamor";

export default function Reference({children}) {
    return (
        <a {...css({
            fontSize: 10,
            verticalAlign: 'top'
        })} data-tip={children} href={children}>[1]</a>
    );
}



