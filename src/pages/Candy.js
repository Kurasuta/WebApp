import React from "react";
import {withRouter} from 'react-router';
import BuildTimeStampChart from "../components/BuildTimeStampChart";
import ProcessingByMonthChart from "../components/ProcessingByMonthChart";

class Candy extends React.Component {
  render() {
    return <div>
      <BuildTimeStampChart/>
      <ProcessingByMonthChart/>
    </div>;
  }
}

export default withRouter(Candy);
