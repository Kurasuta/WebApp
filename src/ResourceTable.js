import React from "react";
import Table from "./components/ui/Table";
import formatEntropy from "./utils";
import Hash from "./components/ui/Hash";

function combineStrAndId(str, id) {
    if (str === undefined) {
        return id;
    }

    return str + ' (' + id + ')';
}

export default function ResourceTable(props) {
    return (
        <Table headers={{
            'Hash': 'left',
            'Type': 'left',
            'Name': 'left',
            'Language': 'left',
            'Size': 'left',
            'Offset': 'left',
            'Entropy': 'left',
        }}>
            {
                props.children.map((resource) => {
                    return [
                        <Hash>{resource.hash_sha256}</Hash>,
                        combineStrAndId(resource.type_str, resource.type_id),
                        combineStrAndId(resource.name_str, resource.name_id),
                        combineStrAndId(resource.language_str, resource.language_id),
                        resource.size,
                        resource.offset,
                        formatEntropy(resource.entropy),
                    ]
                })
            }
        </Table>
    );
}
