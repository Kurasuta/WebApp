import React from "react";
import BuildTimeStampChart from "../components/BuildTimeStampChart";
import ProcessingByMonthChart from "../components/ProcessingByMonthChart";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';

export default function Candy() {
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
                <TabPanel><img alt="Wordcloud: PDB Paths" src="/image/pdb-paths.png" width="100%"/></TabPanel>
                <TabPanel><img alt="Wordcloud: Section Names" src="/image/section-names.png" width="100%"/></TabPanel>
                <TabPanel><img alt="Wordcloud: Resource Names" src="/image/resource-names.png" width="100%"/></TabPanel>
            </Tabs>
        </TabPanel>
    </Tabs>;
}
