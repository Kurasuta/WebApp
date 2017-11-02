import React from 'react';
import createFragment from 'react-addons-create-fragment';
import color from './color.js'

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.data = props.data;
    }

    static createDefinitionListDefinition(definition) {
        const style = {margin: 0, padding: '0 0 0 0'};
        if (Array.isArray(definition)) {
            return definition.map((val) => {
                return <dd style={style}>{val}</dd>
            })
        }

        return <dd style={style}>{definition}</dd>
    }

    static createDefinitionListFragment(term, definition) {
        const style = {fontWeight: 'bold', paddingTop: '3px'};
        return createFragment({
            term: <dt style={style}>{term}</dt>,
            definition: Section.createDefinitionListDefinition(definition)
        })
    }

    createDefinitionList(data) {
        const style = {margin: 0, padding: 5};
        return <dl style={style}>
            {data.map((row) => {
                return Section.createDefinitionListFragment(row['term'], row['definition'])
            })}
        </dl>
    }

    render() {
        const sectionStyle = {
            marginBottom: 20,
            border: '2px solid ' + color.link,
        };
        const headlineStyle = {
            margin: 0,
            padding: 5,
            backgroundColor: color.link
        };
        console.log(this.data);
        return (
            <section style={sectionStyle}>
                <h2 style={headlineStyle}>{this.title}</h2>
                {this.createDefinitionList(this.data)}
            </section>
        );
    }
}

export default Section;
