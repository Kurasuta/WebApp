import React from "react";
import Header from "./Header";
import Section from "./Section";
import Overlay from "./Overlay";
import {css} from "glamor";

/*
"0.762252"
overlay_sha256
:
"4c532831a492614f3b7e85966a6cf45c9bcc19c33bd66ccde978f0ebfccacc7b"
overlay_size
:
"983040"
overlay_ssdeep
:
 */

export default function File({sample}) {

  console.log(sample);

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

