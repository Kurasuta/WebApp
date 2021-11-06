import React from "react";
import {css} from "glamor";

export default function Hash({children}) {
    return <span {...css({
        fontFamily: '"Ubuntu Mono", monospace',
        wordBreak: 'break-all'
    })}>{children}</span>
};
