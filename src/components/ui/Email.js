import React from "react";
import {css} from "glamor";

export default function Email({user, domain}) {
  return <span {...style} data-user={user} data-website={domain}/>
};

const style = css({
  cursor: 'pointer',
  ':before': {
    content: 'attr(data-website) "\\0040" attr(data-user)',
    unicodeBidi: 'bidi-override',
    direction: 'rtl'
  }
});
