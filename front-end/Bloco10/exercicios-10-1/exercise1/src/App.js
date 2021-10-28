import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Levantar', 'Fazer Café', 'Fazer Exercicio', 'Estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    );
  }
}

export default App;