import React from "react";
import {css} from "glamor";
import {lightgray} from "../../color";

export default function Header({sample}) {
  return (
    <div {...container}>
      <ul {...list}>
        <li>Entry Point: 0x{sample.entry_point.toString(16)}<br/></li>
        <li>Build Timestamp: {sample.build_timestamp}</li>
      </ul>
      <br {...css({clear: 'both'})}/>
    </div>
  );
}

const container = css({
  padding: 10,
  backgroundColor: lightgray
});

const list = css({
  padding: 0,
  margin: '10px 0 0 0',
  listStyle: 'none',
  '> li': {
    float: 'left',
    marginRight: 15,
    fontSize: '0.8em'
  }
});
