const { expect } = require('chai');
const { it } = require('mocha');

const numTypes = require('../numberTypes.js');

describe('1) função que irá dizer se um número é "positivo", "negativo" ou "neutro"', () => {
  it('A- É uma função?', () => {
    expect(numTypes).to.be.a('function');
  });

  it('B- É uma string o retorno da Função?', () => {
    expect(numTypes(9)).to.be.a('string');
  });
  it('C- o número passado for maior que 0 deverá retornar "positivo"', () => {
    expect(numTypes(9)).to.be.equals('positivo');
  });

  it('D- quando for menor que 0 deverá retornar "negativo"', () => {
    expect(numTypes(-9)).to.be.equals('negativo');
  });

  it('E- quando igual a 0 deverá retornar "neutro"', () => {
    expect(numTypes(0)).to.be.equals('neutro');
  });
})

describe('2) Casos em que o parâmetro informado não seja do tipo Number', () => {
  it('A- É uma string?', () => {
    expect(numTypes('nove')).to.be.a('string');
  });

  it('B- Caso seja igual uma string "o valor deve ser um número"', () => {
    expect(numTypes('nove')).to.be.equals('o valor deve ser um número');
  });

})