import { useState } from 'react';
import './App.css';
import Argentina from './components/Argentina/index';
import Portugal from './components/Portugal/index';
import Brasil from './components/Brasil/index';

function App() {
  const [jogadores, setJogadores] = useState([]);
  const [selecao, setSelecao] = useState('Argentina');

  const handleSelecaoClick = (novaSelecao) => {
    setSelecao(novaSelecao);
  };

  // Função para renderizar o componente com base na seleção atual
  const renderizarSelecao = () => {
    switch (selecao) {
      case 'Argentina':
        return <Argentina />;
      case 'Portugal':
        return <Portugal />;
      case 'Brasil':
        return <Brasil />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSelecaoClick('Argentina')}>Seleção Argentina</button>
        <button onClick={() => handleSelecaoClick('Portugal')}>Seleção Portuguesa</button>
        <button onClick={() => handleSelecaoClick('Brasil')}>Seleção Brasileira</button>
      </div>
      <table>
        {/* Renderizar a tabela de jogadores aqui com base na seleção atual */}
      </table>
      {renderizarSelecao()} {/* Renderiza o componente com base na seleção */}
    </div>
  );
}

export default App
