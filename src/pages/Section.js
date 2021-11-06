import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Table from "../components/ui/Table";
import Hash from "../components/ui/Hash";
import Link from "../components/ui/Link";
import KurasutaApi from "../KurasutaApi";
import Loading from "../components/ui/Loading";

export default function Section() {
    const [section, setSection] = useState(null);
    const params = useParams();
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const kurasutaApi = new KurasutaApi();
        kurasutaApi.section(params.hash).then((response) => {
            setSection(response.data)
        });
    });
    if (!section) {
        return <Loading/>
    }


    return (
        <Table headers={{'Hash': 'left', 'Build Time Stamp': 'left'}}>
            {
                section.samples.map(sample => {
                    return [
                        <Link to={`/sample/` + sample.hash_sha256}>
                            <Hash>{sample.hash_sha256}</Hash>
                        </Link>,
                        <div>{sample.build_timestamp}</div>
                    ]
                })
            }
        </Table>
    );
}
