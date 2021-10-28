import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
  conteudo: 'Composição de Estados',
  bloco: 12,
  status: 'Aprenderei'
  },
  {
  conteudo: 'Redux',
  bloco: 16,
  status: 'Aprenderei'
  },
]
class Content extends React.Component {
  render() {
    return(
      <>
        {conteudos.map((contenteudo, index) => (
          <div key={index}>
            <h4>{`O conteudo é: ${contenteudo.conteudo}`}</h4>
            <p>{`status: ${contenteudo.status}`}</p>
            <p>{`bloco: ${contenteudo.bloco}`}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Content;