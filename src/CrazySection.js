import React from "react";
import Section from "./components/ui/Section";

function createDefinitionListDefinition(definition) {
    const style = {margin: 0, padding: '0 0 0 0'};
    if (Array.isArray(definition)) {
        return definition.map((val) => {
            return <dd style={style}>{val}</dd>
        })
    }

    return <dd style={style}>{definition}</dd>
}

function createDefinitionListFragment(term, definition) {
    const style = {fontWeight: 'bold', paddingTop: '3px'};

    return [
        <dt style={style}>{term}</dt>,
        createDefinitionListDefinition(definition)
    ];
}

function createDefinitionList(data) {
    const style = {margin: 0, padding: 5};
    return <dl style={style}>
        {data.map((row) => {
            return createDefinitionListFragment(row['term'], row['definition'])
        })}
    </dl>
}

export default function CrazySection(props) {
    return props.data.length === 0 ? null : (
        <Section title={props.title}>
            {createDefinitionList(props.data)}
        </Section>
    );
}
