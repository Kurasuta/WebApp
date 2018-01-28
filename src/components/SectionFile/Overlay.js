import React from "react";
import {css} from "glamor";
import Part from "./Part";
import Hash from "../ui/Hash";

export default function Overlay({overlay}) {
  return (
    <Part
      left={() => 'Overlay'}
      center={() => {
        return (
          <React.Fragment>
            <div><Hash>{overlay.sha256}</Hash></div>
            <div>
              <ul {...list}>
                <li>Entropy {overlay.entropy.toFixed(4)}</li>
                <li>Size {overlay.size} bytes</li>
                <li>ssdeep <Hash>{overlay.ssdeep}</Hash></li>
              </ul>
            </div>
          </React.Fragment>
        );
      }}
      right={() => 'O'}
    />
  );
}

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
