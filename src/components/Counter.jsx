import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/counterStore';
import './Counter.css';

function Counter() {
  const navigate = useNavigate();
  const counters = useStore((state) => state.counters);
  const incrementCounter = useStore((state) => state.incrementCounter);
  const decrementCounter = useStore((state) => state.decrementCounter);
  const getTotal = useStore((state) => state.getTotal);

  const handleIncrement = (id) => {
    incrementCounter(id);
    getTotal();
  };

  const handleDecrement = (id) => {
    decrementCounter(id);
    getTotal();
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-header">
        <img src="/images/tigre.png" alt="Imagen de Tigre" className="sidebar-image" />
        </div>
        <button onClick={() => navigate('/dashboard')}>Ir al Dashboard</button>
        <button onClick={() => navigate('/')}>Cerrar Sesión</button>
      </div>
      <div className="content">
        <h1>Bienvenido a los Contadores</h1>
        <div className="counter-container">
          {counters.map((counter) => (
            <div key={counter.id} className="counter-card">
              <div className="counter-buttons">
                <button className="decrement-btn" onClick={() => handleDecrement(counter.id)}>-</button>
                <p className="counter-value">{counter.value}</p>
                <button className="increment-btn" onClick={() => handleIncrement(counter.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
