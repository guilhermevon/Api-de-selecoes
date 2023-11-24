import React, { useState, useEffect } from 'react';
import style from './../Argentina/Argentina.module.css'

function Jogadores() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TioRhay/Api-futebol/main/listagem-jogadoresargentina.json')
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
      <h1>Jogadores da Argentina</h1>
      <table>
        <thead>
          <tr className='titulo'>
            <th className='nome1'>Nome</th>
            <th color="black">Posição</th>
            <th color="black">Idade</th>
            <th color="black">Imagem</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map(jogador => (
            <tr key={jogador.id}>
              <td id="nome">{jogador.Jogador}</td>
              <td id="posicao">{jogador.posicão}</td>
              <td id="idade">{jogador.idade}</td>
              <td>
                <img src={jogador.img} alt={jogador.Jogador}  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jogadores;