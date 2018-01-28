import React from "react";
import {css} from "glamor";
import Part from "./Part";
import Link from "../ui/Link";
import Hash from "../ui/Hash";

export default function Section({section}) {
  // dont link hash of empty section
  const hash =
    (section.hash_sha256 === 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
      ? <Hash>{section.hash_sha256}</Hash>
      : <Link to={'/section/' + section.hash_sha256}><Hash>{section.hash_sha256}</Hash></Link>;

  return (
    <Part
      left={() => section.name}
      center={() => {
        return (
          <React.Fragment>
            <div>{hash}</div>
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
      right={() => 'S'}
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

