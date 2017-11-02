import React from 'react';
import Table from './Table';
import formatEntropy from './utils'

class ResourceTable extends React.Component {
    static combineStrAndId(str, id) {
        if (str === undefined) {
            return id;
        }

        return str + ' (' + id + ')';
    }

    render() {
        return <Table headers={['Type', 'Name', 'Language', 'Size', 'Offset', 'Entropy']}>{
            this.props.children.map((resource) => {
                return [
                    ResourceTable.combineStrAndId(resource.type_str, resource.type_id),
                    ResourceTable.combineStrAndId(resource.name_str, resource.name_id),
                    ResourceTable.combineStrAndId(resource.language_str, resource.language_id),
                    resource.size,
                    resource.offset,
                    formatEntropy(resource.entropy),
                ]
            })
        }</Table>;
    }
}

export default ResourceTable;
