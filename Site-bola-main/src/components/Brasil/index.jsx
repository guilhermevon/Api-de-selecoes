import React, { useState, useEffect } from 'react';
import style from './../Brasil/Brasil.module.css'

function Jogadores() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TioRhay/Api-futebol/main/listagem-jogadoresbrasil.json')
      .then(response => response.json())
      .then(data => {
        setJogadores(data);
      })
      .catch(error => {
        console.error('Erro ao buscar os jogadores:', error);
      });
  }, []);

  return (
    <div>
      <h1>Jogadores do Brasil</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Posição</th>
            <th>Idade</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map(jogador => (
            <tr key={jogador.id}>
              <td>{jogador.Jogador}</td>
              <td>{jogador.posicão}</td>
              <td>{jogador.idade}</td>
              <td>
                <img src={jogador.img} alt={jogador.nome} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jogadores;