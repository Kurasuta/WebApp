import React from "react";
import {css} from "glamor";
import C3Chart from 'react-c3js';
import Reference from "../components/ui/Reference";
import Link from "../components/ui/Link";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import {withRouter} from 'react-router';

class Candy extends React.Component {
  kurasutaApi = new KurasutaApi();
  state = {buildTimestampsByYear: null, processingsByMonth: null};

  componentDidMount() {
    this.kurasutaApi.buildTimeStampsByYear().then((result) => {
      this.setState({buildTimestampsByYear: result.data})
    });
    this.kurasutaApi.processingsByMonth().then((result) => {
      this.setState({processingsByMonth: result.data})
    });
  }

  forwardToRandomSampleIn(year) {
    this.kurasutaApi.randomSampleByYear(year).then(response => {
      this.props.history.push('/sample/' + response.data.hash_sha256);
    }).catch(error => {
      toast.error(error.response ? error.response.data.message : 'API request failed');
    });
  }

  getLoadingChart() {
    return <div {...css({height: 320, textAlign: 'center', lineHeight: '320px'})}> Loading... </div>;
  }

  render() {
    const buildTimestampsByYear = this.state.buildTimestampsByYear;
    let buildTimeStampChart = null;
    if (buildTimestampsByYear === null) {
      buildTimeStampChart = this.getLoadingChart();
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

    const processingsByMonth = this.state.processingsByMonth;
    let processingByMonthChart = null;
    if (processingsByMonth === null) {
      processingByMonthChart = this.getLoadingChart();
    }
    else {
      const months = [];
      const sampleCounts = [];
      Object.keys(processingsByMonth).sort().map((year) => {
        Object.keys(processingsByMonth[year]).sort().map((month) => {
          let key = year + '-' + (month < 10 ? '0' : '') + month;
          months.push(key);
          sampleCounts.push(processingsByMonth[year][month]);
        });
      });
      processingByMonthChart = <C3Chart
        data={{
          columns: [['x'].concat(sampleCounts)],
          type: 'bar'
        }}
        axis={{
          x: {type: 'category', categories: months},
          y: {label: '# processed samples'}
        }}
        legend={{show: false}}
        tooltip={{show: false}}
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

      <h2>processed samples by month</h2>
      {processingByMonthChart}
      <p>
        The above diagram simply shows the processed samples of this Kurasuta installation broken down by month.
        Probably not too interesting.
      </p>
    </div>;
  }
}


export default withRouter(Candy);
