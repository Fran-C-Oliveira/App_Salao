import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Bem-vinda ao App do Salão da Rosana</h2>
      <Link to="/novoAgendamento">
        <button style={{ marginTop: '20px', padding: '10px', width: '100%' }}>Novo Agendamento</button>
      </Link>
    </div>
  );
}

export default Home;