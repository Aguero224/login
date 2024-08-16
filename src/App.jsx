import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Counters from './components/Counter'; // Asegúrate de tener este componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counters" element={<Counters />} />
        {/* Puedes agregar otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
