import React from "react";
import {css} from "glamor";

export default function Reference({children}) {
  return (
    <a {...style} data-tip={children} href={children}>[1]</a>
  );
}

const style = css({
  fontSize: 10,
  verticalAlign: 'top'
});
