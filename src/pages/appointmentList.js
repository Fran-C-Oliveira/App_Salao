import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment, editAppointment } from '../services/appointmentService';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({ clientName: '', service: '', date: '', time: '', notes: '' });

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  const handleDelete = (index) => {
    deleteAppointment(index);
    setAppointments(getAppointments());
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditData(appointments[index]);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    editAppointment(editingIndex, editData);
    setAppointments(getAppointments());
    setEditingIndex(null);
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>Lista de Agendamentos</h2>
      <ul>
        {appointments.map((appt, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <span>
                <input name="clientName" value={editData.clientName} onChange={handleEditChange} placeholder="Nome" />
                <input name="service" value={editData.service} onChange={handleEditChange} placeholder="Serviço" />
                <input name="date" value={editData.date} onChange={handleEditChange} placeholder="Data" type="date" />
                <input name="time" value={editData.time} onChange={handleEditChange} placeholder="Hora" type="time" />
                <input name="notes" value={editData.notes || ''} onChange={handleEditChange} placeholder="Observações" />
                <button onClick={handleEditSave}>Salvar</button>
                <button onClick={handleEditCancel}>Cancelar</button>
              </span>
            ) : (
              <span>
                {appt.clientName} - {appt.service} - Dia: {appt.date} às {appt.time}
                <button onClick={() => handleEditClick(index)} style={{ marginLeft: 8 }}>Editar</button>
                <button onClick={() => handleDelete(index)} style={{ marginLeft: 4 }}>Excluir</button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;