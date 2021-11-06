import React from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import LoadingChart from "./LoadingChart";
import C3Chart from 'react-c3js';
import {Link} from "react-router-dom";
import Reference from "./ui/Reference";

export default class BuildTimeStampChart extends React.Component {
  kurasutaApi = new KurasutaApi();
  state = {buildTimestampsByYear: null};

  componentDidMount() {
    this.kurasutaApi.buildTimeStampsByYear().then((result) => {
      this.setState({buildTimestampsByYear: result.data})
    });
  }

  forwardToRandomSampleIn(year) {
    this.kurasutaApi.randomSampleByYear(year).then(response => {
      // this.props.history.push('/sample/' + response.data.hash_sha256);
    }).catch(error => {
      toast.error(error.response ? error.response.data.message : 'API request failed');
    });
  }

  render() {
    const buildTimestampsByYear = this.state.buildTimestampsByYear;
    let buildTimeStampChart = null;
    if (buildTimestampsByYear === null) {
      buildTimeStampChart =  <LoadingChart/>;
    }
    else {
      const years = Object.keys(buildTimestampsByYear).sort();
      buildTimeStampChart = <C3Chart
        data={{
          x: 'x',
          columns: [
            ['x'].concat(years),
            ['Samples'].concat(years.map((year) => buildTimestampsByYear[year]))
          ],
          onclick: d => {
            this.setState({buildTimestampsByYear: null});
            this.forwardToRandomSampleIn(d.x);
          },
          type: 'bar'
        }}
        axis={{x: {label: 'year'}, y: {label: '# samples'}}}
        tooltip={{format: {title: (d) => 'Year ' + d,}}}
      />
    }

    return <div>
      <h2>build time stamps</h2>
      {buildTimeStampChart}
      <p>
        The above diagram shows a histogram of build time stamps by year of all samples we processed so far. It will
        most probably show a spike in 1970 and 1992. 1970 is the beginning of the UNIX epoch and the spike simple
        means that we could not extract a build time stamp from those samples. The spike in 1992 can be explained by
        bug in a certain Borland Delphi compiler where every build time stamp would be 1992-06-19 22:22:17
        <Reference>http://www.hexacorn.com/blog/2014/12/05/the-not-so-boring-land-of-borland-executables-part-1/</Reference>.
      </p>
      <p>
        The early decline from 2012 on is caused by the fact that we are still missing fresh sample sources. If you
        could help out with that please <Link to={`/people`}>contact us</Link>!
      </p>
      <p>Click a bar in the chart to navigate to a random sample from that year.</p>
    </div>;
  }
}
