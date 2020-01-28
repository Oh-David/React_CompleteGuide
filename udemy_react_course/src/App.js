import React, { Component, useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [ personsState, setPersonsFunction ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Dave', age: 29 },
      { name: 'Steph', age: 30 },
    ]
  });

  const [ otherState, setOtherState ] = useState({otherState: "other State values"});

  console.log(personsState, otherState);

  const buttonClickHandler = () => {
    // console.log('Was clicked!');
    setPersonsFunction({
      persons: [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Starting a React App</h1>
      <button onClick={buttonClickHandler}>Button Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;