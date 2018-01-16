import React from "react";
import {css} from "glamor";
import {lightgray} from "../../color";
import Part from "./Part";

export default function Overlay({overlay}) {
  return (
    <Part
      left={() => 'Overlay'}
      center={() => {
        return (
          <React.Fragment>
            <div>{overlay.sha256}</div>
            <div>
              <ul {...list}>
                <li>Entropy {overlay.entropy.toFixed(4)}</li>
                <li>Size {overlay.size} bytes</li>
              </ul>

            </div>
          </React.Fragment>
        );
      }}
      right={() => 'R'}
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
