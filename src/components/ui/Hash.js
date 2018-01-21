import React from "react";
import {css} from "glamor";

export default function Hash({children}) {
  return <span {...style}>{children}</span>
};

const style = css({
  fontFamily: '"Ubuntu Mono", monospace',
  wordBreak: 'break-all'
});
