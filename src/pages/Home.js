import React from "react";
import NewestHashesList from "../components/NewestHashesList";
import {css} from "glamor";
import Hash from "../components/ui/Hash";

export default class Home extends React.Component {
  render() {
    return (
      <div {...style}>
        <div {...bluf}>Try to say the English word Cluster with a strong Japanese accent.</div>
        <div>
          <h2>What is Kurasuta?</h2>
          <p>The core/first use-case of this project is straight forward: hash sections of as many PE files as
            possible and make pivoting possible. This website is a first client consuming a REST-like API to the
            Kurasuta database. That database contains extracted info on as many PE files as we could get our hands on so
            far. As of end of 2017, we processed half a million samples.</p>
        </div>
        <div>
          <h2>Support us</h2>
          <p>There are, of course, many ideas around this project: More samples, machine learning, more dimensions
            to pivot around, UI improvements, API documentation... we are currently working on a few. If you have any
            suggestions, feel free to reach out! If you have more sweet samples to process, definitely contact us.</p>

          <p>All the <a href="https://github.com/Kurasuta">code running Kurasuta is available on github</a>.
            Contributions are welcome. There is no documentation. We are tired of licences.</p>
        </div>
        <div>
          <h2>How does it work?</h2>
          <p>Just put a SHA256 hash of a sample into the text box and - in case we already processed that sample - get
            back some information on the corresponding PE file together with a list of sections. Clicking on the SHA256
            hash of a section shows a list of samples also containing that section.</p>
        </div>
        <div>
          <h2>Examples</h2>
          <ul>
            <li>The .text section
              of <Hash>4c532831a492614f3b7e85966a6cf45c9bcc19c33bd66ccde978f0ebfccacc7b</Hash> occurs in 3
              different samples that all have the same build time stamp.
            </li>
          </ul>
        </div>
        <div {...newestSamplesStyle}>
          <h2>Newest 10 samples</h2>
          <NewestHashesList/>
        </div>
      </div>
    );
  }
}

const style = css({
  display: 'grid',
  gridTemplateColumns: '470px 470px',
  gridTemplateAreas: `
    "bluf bluf"
    "what support"
    "how example"
    "newest newest"
  `,
  gridGap: 20,
  '> div:not(:first-child)': {
    borderTop: '1px solid #979797',
    ' h2': {
      textTransform: 'uppercase',
      fontSize: 16,
      marginTop: 8
    }
  }
});

const bluf = css({
  gridArea: 'bluf',
  fontSize: 48,
  margin: '40px 0',
  width: 593
});

const newestSamplesStyle = css({
  gridArea: 'newest',
  marginBottom: 100
});
