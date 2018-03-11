import React from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import LoadingChart from "./LoadingChart";
import C3Chart from 'react-c3js';

export default class ProcessingByMonthChart extends React.Component {
  kurasutaApi = new KurasutaApi();
  state = {processingsByMonth: null};

  componentDidMount() {
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

  render() {
    const processingsByMonth = this.state.processingsByMonth;
    let processingByMonthChart = null;
    if (processingsByMonth === null) {
      processingByMonthChart = <LoadingChart/>;
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
      <h2>processed samples by month</h2>
      {processingByMonthChart}
      <p>
        The above diagram simply shows the processed samples of this Kurasuta installation broken down by month.
        Probably not too interesting.
      </p>
    </div>;
  }
}
