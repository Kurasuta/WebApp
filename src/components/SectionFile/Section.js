import React from "react";
import {css} from "glamor";
import {lightgray} from "../../color";
import Part from "./Part";

export default function Section({section}) {
  console.log(section.name);

  return (
    <Part
      left={() => section.name}
      center={() => {
        return (
          <React.Fragment>
            <div>{section.hash_sha256}</div>
            <div>
              <ul {...list}>
                <li>Entropy {section.entropy.toFixed(4)}</li>
                <li>VAddr 0x{section.virtual_address.toString(16)}</li>
                <li>VSize {section.virtual_size} bytes</li>
                <li>RSize {section.raw_size} bytes</li>
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

