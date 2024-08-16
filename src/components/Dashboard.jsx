import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/counterStore';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const counters = useStore((state) => state.counters || []);
  const total = useStore((state) => state.total);
  const getTotal = useStore((state) => state.getTotal);

  useEffect(() => {
    getTotal();
  }, [counters, getTotal]);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-header">
        <img src="/images/tigre.png" alt="Imagen de Tigre" className="sidebar-image" />
        </div>
        <button onClick={() => navigate('/counters')}>Ir a Contadores</button>
        <button onClick={() => navigate('/')}>Cerrar Sesión</button>
      </div>
      <div className="content">
        <h1>Bienvenido al Dashboard</h1>
        <div className="dashboard-content">
          <div className="card">
            <h2>Total de Contadores</h2>
            <p className="counter-value">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
