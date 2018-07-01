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

    switchNameHandler = (newName) => {
        // console.log('was clicked!')
        this.setState({
            persons: [
                { name: newName, age: 32 },
                { name: 'Joy', age: 31 },
                { name: 'Anna', age: 30 }
            ]
        })
    }

    nameChangedHandler = (e) => {
        this.setState({
            persons: [
                { name: 'Michael', age: 32 },
                { name: e.target.value, age: 31 },
                { name: 'Anna', age: 30 }
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hello React</h1>
                <button style={style} onClick={() => this.switchNameHandler('SNOOPY')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Joi')}
                    changed={this.nameChangedHandler} >Hobbies: vanishing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
