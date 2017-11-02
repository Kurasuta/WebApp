import React from 'react';
import Nav from './Nav.js'
import Sample from './Sample.js'
import color from './color.js';

class App extends React.Component {
    render() {
        document.body.style.backgroundColor = color.light;
        const sample = require('../output-2.json');
        return (
            <div className="App">
                <Nav/>
                <Sample sample={sample}/>
            </div>
        );
    }
}

export default App;
