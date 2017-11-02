import React from 'react';
import Table from './Table';
import formatEntropy from './utils'

class SectionTable extends React.Component {
    render() {
        return <Table
            headers={['Name', 'Entropy', 'VAddr', 'VSize', 'RSize']}
            rightAlign={[2, 3, 4]}
        >{
            this.props.children.map((section) => {
                return [
                    section.name,
                    formatEntropy(section.entropy),
                    section.virtual_address,
                    section.virtual_size,
                    section.raw_size
                ]
            })
        }</Table>;
    }
}

export default SectionTable;
