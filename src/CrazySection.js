import React from "react";
import Section from "./components/ui/Section";

export default class CrazySection extends React.Component {
  createDefinitionListDefinition(definition) {
    const style = {margin: 0, padding: '0 0 0 0'};
    if (Array.isArray(definition)) {
      return definition.map((val) => {
        return <dd style={style}>{val}</dd>
      })
    }

    return <dd style={style}>{definition}</dd>
  }

  createDefinitionListFragment(term, definition) {
    const style = {fontWeight: 'bold', paddingTop: '3px'};

    return [
      <dt style={style}>{term}</dt>,
      this.createDefinitionListDefinition(definition)
    ];
  }

  createDefinitionList(data) {
    const style = {margin: 0, padding: 5};
    return <dl style={style}>
      {data.map((row) => {
        return this.createDefinitionListFragment(row['term'], row['definition'])
      })}
    </dl>
  }

  render() {
    return (
      <Section title={this.props.title}>
        {this.createDefinitionList(this.props.data)}
      </Section>
    );
  }
}
