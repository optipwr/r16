import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: '1asdf', name: 'Michael', age: 32 },
            { id: '2asdf', name: 'Blarby', age: 31 },
            { id: '3asdf', name: 'Paxton', age: 30 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            // console.log('p.id', p.id)
            // console.log('id', id)
            return p.id === id;
        });
        // console.log('personIndex', personIndex);

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;       

        this.setState({ persons: persons })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
            );
        }

        return (
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler} />
                    { persons }
                </div>
        );
    }
}

export default App;
