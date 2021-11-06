import React from "react";
import Section from "./components/ui/Section";
import {css} from "glamor";

export default function CrazySection(props) {
    return props.data.length === 0 ? null : (
        <Section title={props.title}>
            <dl  {...css({margin: 0, padding: 5})}>
                {props.data.map((row, i) => [
                    <dt {...css({fontWeight: 'bold', paddingTop: '3px'})}>{row['term']}</dt>,
                    Array.isArray(row['definition']) ? row['definition'].map((val, j) => {
                        return <dd {...css({margin: 0, padding: '0 0 0 0'})}>{val}</dd>
                    }) : <dd {...css({margin: 0, padding: '0 0 0 0'})}>{row['definition']}</dd>
                ])}
            </dl>
        </Section>
    );
}
