import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Michael', age: 32 },
            { name: 'Joy', age: 31 },
            { name: 'Anna', age: 30 }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hello React</h1>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: vanishing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
