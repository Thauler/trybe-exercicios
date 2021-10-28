import React, { Component } from 'react'
import Pokemon from './components/Pokemon'
import data from './data'

class App extends Component {
  render() {
    return (
      <div>
        {
        data
        .map((poke) => <Pokemon
        name={ poke.name }
        type={poke.type}
        image={poke.image}
        averageWeight={poke.averageWeight}
        />)
        }
      </div>
    )
  }
}

export default App

