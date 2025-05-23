import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppointmentForm from './pages/appointmentForm';
import AppointmentList from './pages/appointmentList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/novoAgendamento" element={<AppointmentForm />} />
        <Route path="/agendamentos" element={<AppointmentList />} />
      </Routes>
    </Router>
  );
}

export default App;