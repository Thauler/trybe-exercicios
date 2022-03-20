const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const writeFile = require('../writing');

describe('3) Função que escreverá um conteúdo em um arquivo específico', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
    it('A- É uma string?', () => {
      const writeFileFn = writeFile('file1.txt', 'Testando a escrita');

      expect(writeFileFn).to.be.a('string');
    });

    it('B- Após concluir a escrita do arquivo ela deverá retornar um "ok"', () => {
      const writeFileFn = writeFile('file1.txt', 'Testando a escrita');

      expect(writeFileFn).to.be.equals('ok');
    });

});