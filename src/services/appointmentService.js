// Salva o agendamento no localStorage
export function saveAppointment(appointment) {
  const stored = localStorage.getItem('appointments');
  const appointments = stored ? JSON.parse(stored) : [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Busca todos os agendamentos do localStorage
export function getAppointments() {
  const stored = localStorage.getItem('appointments');
  return stored ? JSON.parse(stored) : [];
}

// Exclui um agendamento pelo índice
export function deleteAppointment(index) {
  const stored = localStorage.getItem('appointments');
  const appointments = stored ? JSON.parse(stored) : [];
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Edita um agendamento pelo índice
export function editAppointment(index, updatedAppointment) {
  const stored = localStorage.getItem('appointments');
  const appointments = stored ? JSON.parse(stored) : [];
  appointments[index] = updatedAppointment;
  localStorage.setItem('appointments', JSON.stringify(appointments));
}