import React, { useState } from 'react';
import { saveAppointment } from '../services/appointmentService';

function AppointmentForm() {
  const [clientName, setClientName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveAppointment({ clientName, service, date, time, notes });
      alert('Agendamento salvo com sucesso!');
    } catch (error) {
      alert('Erro ao salvar agendamento!');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Novo Agendamento</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome do Cliente</label><br />
          <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Serviço</label><br />
          <input type="text" placeholder="manicure, cabelo etc" value={service} onChange={(e) => setService(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Data </label><br />
          <input type="date" placeholder="ex: 22/05/2025" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Horário (ex: 14:30)</label><br />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Observações</label><br />
          <textarea rows="4" style={{ width: '100%' }} value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Salvar Agendamento</button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
