import React, { Component } from 'react';
import '../App.css'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props
    return (
      <div className='pokemon'>
        <img src={ image } alt='imagem do pokemon' />
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `Peso médio: ${averageWeight.value}${averageWeight.measurementUnit}` }</p>
      </div>
    )
  }
}

export default Pokemon
