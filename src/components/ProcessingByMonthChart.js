import React, {useEffect, useState} from "react";
import LoadingChart from "./LoadingChart";
import C3Chart from 'react-c3js';
import KurasutaApi from "../KurasutaApi";

export default function ProcessingByMonthChart() {
    const [processingsByMonth, setProcessingsByMonth] = useState(null)
    useEffect(() => {
        new KurasutaApi().processingsByMonth().then((result) => {
            setProcessingsByMonth(result.data)
        });
    }, []);
    let processingByMonthChart = null;
    if (processingsByMonth === null) {
        processingByMonthChart = <LoadingChart/>;
    } else {
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
