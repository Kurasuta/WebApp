import React from "react";

export default class Home extends React.Component {
  render() {
    return [
      <h1>Kurasuta</h1>,
      <p>Try to say the English word "Cluster" with a strong Japanese accent.</p>,
      <p>The core/first use-case of this project is straight forward: hash sections of as many PE files as possible and
        make pivoting possible. This website is a first client consuming a REST-like API to the Kurasuta database. That
        database contains extracted info on as many PE files as we could get our hands on so far. As of end of 2017, we
        processed half a million samples.</p>,
      <p>Currently you can put a SHA256 hash of a sample into the text box and - in case we already processed that
        sample - get back some information on the corresponding PE file back together with a list of sections. Clicking
        on the SHA256 hash of a section shows a list of samples also containing that section.</p>,
      <p>There are, of course, many ideas around this project: More samples, machine learning, more edges to pivot
        around, UI improvements, API documentation... we are currently working on a few. If you have any suggestions,
        feel free to contact us! If you have more sweet samples to process, definitely reach out to us.</p>,
      <p>All the <a href="https://github.com/Kurasuta">code running Kurasuta is available on github</a>. Contributions
        are welcome. There is no documentation. We are tired of licences.</p>
    ];
  }
}
