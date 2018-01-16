import React from "react";
import Header from "./Header";
import Section from "./Section";
import Overlay from "./Overlay";
import {css} from "glamor";

export default function File({sample}) {
  return (
    <div {...file}>

      <Header/>

      {sample.sections.map(section => {
        return <Section section={section}/>
      })}

      <Overlay overlay={{
        entropy: sample.overlay_entropy || 0,
        sha256: sample.overlay_sha256,
        size: sample.overlay_size,
        ssdeep: sample.overlay_ssdeep
      }}/>

    </div>
  );
}

const file = css({
  border: '1px solid black',
  borderRadius: 2,
  margin: 0,
  padding: 0
});

