import React from "react";
import {css} from "glamor";
import {blue} from "../../color";

export default function Email({user, domain}) {
    return <span {...style} data-user={user} data-website={domain} onClick={() => {
        const s = domain + String.fromCharCode(parseInt(40, 16)) + user;
        window.location.href = 'mailto: ' + s.split('').reverse().join('');
    }}/>
};

const style = css({
    cursor: 'pointer',
    color: blue,
    ':before': {
        content: 'attr(data-website) "\\0040" attr(data-user)',
        unicodeBidi: 'bidi-override',
        direction: 'rtl'
    }
});
