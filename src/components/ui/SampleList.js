import React from "react";
import {css} from "glamor";
import Loading from "./Loading";
import Link from "./Link";
import Hash from "./Hash";
import Table from "./Table";

export default function SampleList({children}) {
  return (
    children === null ? <Loading/> :
      <Table headers={{'Hash': 'left', 'Build Time Stamp': 'left'}}>
        {
          children.map((sample) => {
            return [
              <Link to={`/sample/` + sample.hash_sha256}>
                <Hash>{sample.hash_sha256}</Hash>
              </Link>,
              <div>{sample.build_timestamp}</div>
            ]
          })
        }
      </Table>
  );
}

const style = css({
  fontSize: 10,
  verticalAlign: 'top'
});
