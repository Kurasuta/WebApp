import React from "react";
import BuildTimeStampChart from "../components/BuildTimeStampChart";
import ProcessingByMonthChart from "../components/ProcessingByMonthChart";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

export default class Candy extends React.Component {
  render() {
    return <Tabs>
      <TabList>
        <Tab>Build Timestamps</Tab>
        <Tab>Processing</Tab>
        <Tab>Wordclouds</Tab>
      </TabList>

      <TabPanel>
        <BuildTimeStampChart/>
      </TabPanel>
      <TabPanel>
        <ProcessingByMonthChart/>
      </TabPanel>
      <TabPanel>
        <p>Beautiful and mildly informative.</p>
        <Tabs>
          <TabList>
            <Tab>PDB paths</Tab>
            <Tab>Sections</Tab>
            <Tab>Resources</Tab>
          </TabList>
          <TabPanel><img src="/image/pdb-paths.png" width="100%"/></TabPanel>
          <TabPanel><img src="/image/section-names.png" width="100%"/></TabPanel>
          <TabPanel><img src="/image/resource-names.png" width="100%"/></TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>;
  }
}
