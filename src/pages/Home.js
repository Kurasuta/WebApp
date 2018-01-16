import React from "react";
//import SampleList from "./SampleList";
import KurasutaApi from "../KurasutaApi";
import Loading from "../components/ui/Loading";

export default class Home extends React.Component {
  state = {
    newestSamples: null
  };

  componentDidMount() {
    new KurasutaApi().newestSamples().then((response) => {
      this.setState({newestSamples: response.data});
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>Try to say the English word "Cluster" with a strong Japanese accent.</p>
        <p>The core/first use-case of this project is straight forward: hash sections of as many PE files as
          possible and make pivoting possible. This website is a first client consuming a REST-like API to the Kurasuta
          database. That database contains extracted info on as many PE files as we could get our hands on so far. As of
          end of 2017, we processed half a million samples.</p>
        <p>Just put a SHA256 hash of a sample into the text box and - in case we already processed that sample - get
          back some information on the corresponding PE file together with a list of sections. Clicking on the SHA256
          hash of a section shows a list of samples also containing that section.</p>
        <p>There are, of course, many ideas around this project: More samples, machine learning, more dimensions
          to pivot around, UI improvements, API documentation... we are currently working on a few. If you have any
          suggestions, feel free to reach out! If you have more sweet samples to process, definitely contact us.</p>
        <p>All the <a href="https://github.com/Kurasuta">code running Kurasuta is available on github</a>.
          Contributions are welcome. There is no documentation. We are tired of licences.
        </p>
        <h2>Examples</h2>
        <ul>
          <li>4c532831a492614f3b7e85966a6cf45c9bcc19c33bd66ccde978f0ebfccacc7b .text section occurs in 3 different
            samples that all have the same build time stamp.
          </li>
        </ul>
        <h2>Newest 10 samples</h2>
        {!this.state.newestSamples ? <Loading/>
          : null
        }
      </React.Fragment>
    );
  }
}