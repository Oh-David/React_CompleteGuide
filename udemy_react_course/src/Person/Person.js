import React from 'react';

const person = (props) => {
  return (
    <div>
      <p> {props.name}, {props.age} </p>
      <p> {props.chidren} </p>
    </div>
  )
};

export default person;