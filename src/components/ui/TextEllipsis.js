import React from "react";
import {css} from "glamor";

export default function TextEllipsis({children}) {
  return (
    <div {...style}>
      {children}
    </div>
  );
}

const style = css({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100px'
});