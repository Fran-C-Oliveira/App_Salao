import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/novoAgendamento" style={{ marginRight: '10px' }}>Novo Agendamento</Link>
      <Link to="/agendamentos">Agendamentos</Link>
    </nav>
  );
}

export default Navbar;