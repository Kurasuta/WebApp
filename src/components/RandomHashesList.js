import React, {useEffect, useState} from "react";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import SampleList from "./ui/SampleList";

export default function RandomHashesList() {
    const [samples, setSamples] = useState(null);
    useEffect(() => {
        new KurasutaApi().randomSamples(10).then(response => {
            setSamples(response.data)
        }).catch(error => {
            toast.error('API not reachable');
        });
    }, []);
    return <SampleList>{samples}</SampleList>;
}
