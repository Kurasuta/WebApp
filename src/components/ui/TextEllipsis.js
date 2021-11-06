import React from "react";
import {css} from "glamor";

export default function TextEllipsis({children}) {
    return (
        <div {...css({
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '100px'
        })}>
            {children}
        </div>
    );
}
